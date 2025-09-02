"use client";

import { useEffect, useState } from "react";

import LoadingTxt from "@/components/sections/loading/LoadingTxt";
import IntroductionTxt from "@/components/sections/loading/IntroductionTxt";
import Quote from "@/components/sections/loading/Quote";
import { useNavTo } from "@/hooks/useNavTo";

import styles from "@/styles/components/sections/loading/Loading.module.scss";

const steps: [number, number][] = [
  [0, 100],
  [20, 80],
  [40, 60],
  [60, 40],
  [100, 0],
];

const stepDelay = 2000;
function Loading() {
  const navTo = useNavTo();
  const [columns, setColumns] = useState<[number, number]>(steps[0]);
  const [finished, setFinished] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [showQuote, setShowQuote] = useState(true);

  useEffect(() => {
    let stepIndex = 1;

    setColumns(steps[stepIndex]);
    stepIndex++;

    const interval = setInterval(() => {
      setColumns(steps[stepIndex]);
      stepIndex++;

      if (stepIndex >= steps.length) {
        clearInterval(interval);
        setFinished(true);
        setTimeout(() => setShowLoading(false), 1000);
        setTimeout(() => setShowQuote(true), 1200);
        setTimeout(() => {
          navTo("home");
        }, 6000);
      }
    }, stepDelay);

    return () => clearInterval(interval);
  }, [navTo]);

  return (
    <div
      className={styles.container}
      style={{
        gridTemplateColumns: `${columns[0]}% ${columns[1]}%`,
      }}
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
