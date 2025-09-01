"use client";

import { useEffect, useState } from "react";

import styles from "@/styles/components/ui/Loading.module.scss";

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
      <div className={styles.blackContainer} />
      <div className={styles.whiteContainer} />
    </div>
  );
}

export default Loading;
