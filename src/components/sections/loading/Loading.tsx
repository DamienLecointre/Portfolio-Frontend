"use client";

import { useEffect, useState } from "react";

import { useNavTo } from "@/hooks/useNavTo";
import { useIsMobile } from "@/hooks/useIsMobile";

import LoadingTxt from "@/components/sections/loading/LoadingTxt";
import IntroductionTxt from "@/components/sections/loading/IntroductionTxt";
import Quote from "@/components/sections/loading/Quote";

import styles from "@/styles/components/sections/loading/Loading.module.scss";

const steps: [number, number][] = [
  [0, 100],
  [20, 80],
  [35, 65],
  [55, 45],
  [100, 0],
];

const stepDelay = 2000;
function Loading() {
  type IntroGridValue = [number, number];

  const navTo = useNavTo();
  const isMobile = useIsMobile(768);

  const [gridValue, setGridValue] = useState<IntroGridValue>(steps[0]);
  const [finished, setFinished] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [showQuote, setShowQuote] = useState(true);

  useEffect(() => {
    let stepIndex = 1;

    setGridValue(steps[stepIndex]);
    stepIndex++;

    const interval = setInterval(() => {
      setGridValue(steps[stepIndex]);
      stepIndex++;

      if (stepIndex >= steps.length) {
        clearInterval(interval);
        setFinished(true);
        setTimeout(() => setShowLoading(false), 1000);
        setTimeout(() => setShowQuote(true), 1200);
        setTimeout(() => {
          navTo("home");
        }, 5000);
      }
    }, stepDelay);

    return () => clearInterval(interval);
  }, [navTo]);

  return (
    <div
      className={styles.container}
      style={
        isMobile
          ? { gridTemplateRows: `${gridValue[1]}% ${gridValue[0]}%` }
          : { gridTemplateColumns: `${gridValue[0]}% ${gridValue[1]}%` }
      }
    >
      <div className={styles.blackContainer}>
        {showLoading && (
          <div
            className={`${styles.loadingWrapper} ${
              finished ? styles.fadeOut : ""
            }`}
          >
            <LoadingTxt />
          </div>
        )}
        {showQuote && (
          <div
            className={`${styles.quoteWrapper} ${finished ? styles.arise : ""}`}
          >
            <Quote />
          </div>
        )}
      </div>
      <div className={styles.whiteContainer}>
        <IntroductionTxt />
      </div>
    </div>
  );
}

export default Loading;
