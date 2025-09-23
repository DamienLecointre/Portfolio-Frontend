"use client";

import { useEffect, useState } from "react";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useCarousel } from "@/hooks/useCarousel";
// import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

import BurgerMenu from "@/components/ui/buttons/BurgerMenu";
import BurgerMenuDisplay from "@/components/layout/BurgerMenuDisplay";
import PageTitle from "@/components/ui/molecules/PageTitle";
import LineDivider from "@/components/ui/elements/LineDivider";
import ActionBtnContainer from "@/components/ui/molecules/ActionBtnContainer";
import ExperiencesDisplay from "@/components/sections/experiences/ExperiencesDisplay";
import FormationsDisplay from "@/components/sections/formations/FormationsDisplay";
import SkillsDisplay from "@/components/sections/skills/SkillsDisplay";
import ArrowBtn from "@/components/ui/buttons/ArrowBtn";
import Header from "@/components/layout/Header";

import { motion, AnimatePresence } from "framer-motion";

import styles from "@/styles/pages/SitePageSetup.module.scss";

function ExperiencePage() {
  const isMobile = useBreakpoint(768);
  const showArrowsFormation = useBreakpoint(1900);
  const showArrowsSkills = useBreakpoint(1250);

  const [activeId, setActiveId] = useState(1);

  const {
    wrapperRef,
    trackRef,
    transform,
    next,
    prev,
    measure,
    isStart,
    isEnd,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = useCarousel();

  useEffect(() => {
    if (activeId !== 2) return;
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => measure());
    });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [activeId, measure]);

  // const formationsRef = useRef<HTMLDivElement>(null);
  // const { scroll, canScrollLeft, canScrollRight } =
  //   useHorizontalScroll(formationsRef);

  return (
    <div className={styles.pageContainer}>
      {isMobile && (
        <>
          <BurgerMenu />
          <BurgerMenuDisplay />
        </>
      )}

      <div className={styles.contentContainer}>
        <PageTitle dynamicTitle="Mes expériences" />

        <div className={styles.lineDividerContainer}>
          <LineDivider lineDivider="lineTopDivider" />
          <ActionBtnContainer activeId={activeId} setActiveId={setActiveId} />
        </div>

        <AnimatePresence mode="wait">
          {activeId === 1 && (
            <motion.div
              className={styles.motionContainer}
              key="experiences"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ExperiencesDisplay />
            </motion.div>
          )}

          {activeId === 2 && (
            <motion.div
              className={styles.motionContainer}
              key="formations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <FormationsDisplay
                wrapperRef={wrapperRef}
                trackRef={trackRef}
                transform={transform}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
            </motion.div>
          )}
          {activeId === 3 && (
            <motion.div
              className={styles.motionContainer}
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <SkillsDisplay
                wrapperRef={wrapperRef}
                trackRef={trackRef}
                transform={transform}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {((showArrowsFormation && activeId === 2) ||
            (showArrowsSkills && activeId === 3)) && (
            <motion.div
              key="arrows"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <ArrowBtn
                onLeftClick={prev}
                onRightClick={next}
                isStart={isStart}
                isEnd={isEnd}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <LineDivider />
      </div>

      {!isMobile && <Header />}
    </div>
  );
}

export default ExperiencePage;
