"use client";

import { useEffect, useState } from "react";

import LoadingTxt from "@/components/sections/loading/LoadingTxt";
import IntroductionTxt from "@/components/sections/loading/IntroductionTxt";

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
  const [columns, setColumns] = useState<[number, number]>(steps[0]);

  useEffect(() => {
    let stepIndex = 1;

    setColumns(steps[stepIndex]);
    stepIndex++;

    const interval = setInterval(() => {
      setColumns(steps[stepIndex]);
      stepIndex++;

      if (stepIndex >= steps.length) clearInterval(interval);
    }, stepDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        gridTemplateColumns: `${columns[0]}% ${columns[1]}%`,
      }}
    >
      <div className={styles.blackContainer}>
        <LoadingTxt />
      </div>
      <div className={styles.whiteContainer}>
        <IntroductionTxt />
      </div>
    </div>
  );
}

export default Loading;
