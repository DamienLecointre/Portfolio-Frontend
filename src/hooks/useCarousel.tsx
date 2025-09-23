import { useState, useRef, useCallback, useEffect } from "react";
import type { TouchEvent } from "react";

export function useCarousel() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [step, setStep] = useState(0);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  // mesure des dimensions
  const measure = useCallback(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    const firstChild = track?.firstElementChild as HTMLElement | null;
    if (!wrapper || !track || !firstChild) return;

    // largeur d'une card + marge
    const cardWidth = firstChild.getBoundingClientRect().width || 0;
    const style = getComputedStyle(firstChild);
    const marginRight = parseFloat(style.marginRight || "0") || 0;
    const totalStep = cardWidth + marginRight;
    if (!isFinite(totalStep) || totalStep <= 0) return;
    setStep(totalStep);

    const wrapperWidth =
      wrapper.getBoundingClientRect().width || wrapper.clientWidth;
    const trackScrollWidth =
      track.scrollWidth || track.getBoundingClientRect().width;
    const newMaxTranslate = Math.max(trackScrollWidth - wrapperWidth, 0);
    setMaxTranslate(newMaxTranslate);

    const totalCards = track.children.length;
    const visibleCount = Math.floor(wrapperWidth / totalStep);

    // maxIndex = nombre de pas possibles sans dépasser la dernière card visible
    const newMaxIndex =
      totalCards > visibleCount ? totalCards - visibleCount : 0;
    setMaxIndex(newMaxIndex);

    setIndex((prev) => Math.min(prev, newMaxIndex));
  }, []);

  useEffect(() => {
    measure();

    if (typeof ResizeObserver === "undefined") {
      const onResize = () => measure();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    const ro = new ResizeObserver(() => measure());
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    if (trackRef.current) {
      ro.observe(trackRef.current);
      Array.from(trackRef.current.children).forEach((c) =>
        ro.observe(c as Element)
      );
    }

    return () => ro.disconnect();
  }, [measure]);

  // navigation clampée
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const goTo = (i: number) =>
    setIndex(() => Math.max(0, Math.min(i, maxIndex)));

  // calcul du translateX
  const desiredShift = index * step;
  const shift = Math.min(desiredShift, maxTranslate || 0);
  const transform = `translateX(-${shift}px)`;

  // swipe tactile
  const startXRef = useRef<number | null>(null);
  const deltaXRef = useRef(0);
  const minSwipe = 50;

  const onTouchStart = (e: TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
    deltaXRef.current = 0;
  };
  const onTouchMove = (e: TouchEvent) => {
    if (startXRef.current == null) return;
    deltaXRef.current = e.touches[0].clientX - startXRef.current;
  };
  const onTouchEnd = () => {
    const d = deltaXRef.current;
    if (Math.abs(d) > minSwipe) {
      if (d < 0) next();
      else prev();
    }
    startXRef.current = null;
    deltaXRef.current = 0;
  };

  // flags pour flèches
  const isStart = index === 0;
  const isEnd = index === maxIndex;

  return {
    wrapperRef,
    trackRef,
    transform,
    next,
    prev,
    goTo,
    measure,
    step,
    index,
    maxIndex,
    maxTranslate,
    setIndex,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    isStart,
    isEnd,
  };
}
