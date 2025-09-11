"use client";

import { useEffect, useState } from "react";

import styles from "@/styles/components/sections/loading/IntroductionTxt.module.scss";

const sentences = [
  ["Je m'appelle", "Damien Lecointre"],
  ["Je suis", "Développeur web React & Next"],
  ["Bienvenue sur", "mon portfolio"],
];

function IntroductionTxt() {
  const [currentSentence, setCurrentSentence] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // if (currentSentence === sentences.length - 1 && stage === 4) return;

    const timeouts: NodeJS.Timeout[] = [];

    timeouts.push(setTimeout(() => setStage(1), 100));

    timeouts.push(setTimeout(() => setStage(2), 700));

    timeouts.push(setTimeout(() => setStage(3), 1300));

    timeouts.push(
      setTimeout(() => {
        setStage(4);

        setTimeout(() => {
          setStage(0);

          if (currentSentence < sentences.length - 1) {
            setCurrentSentence((prev) => prev + 1);
          }
        }, 500);
      }, 1500)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [currentSentence]);

  return (
    <div className={styles.container}>
      {sentences.map((parts, i) => (
        <div
          key={i}
          className={`${styles.sentence} ${
            i === currentSentence ? styles.visible : ""
          }`}
        >
          <div
            className={`${styles.segment} ${styles.segmentLeft} ${
              i === currentSentence && stage >= 1 ? styles.show : ""
            }`}
          >
            {parts[0]}
          </div>
          <div
            className={`${styles.segment} ${styles.segmentRight} ${
              i === currentSentence && stage >= 2 ? styles.show : ""
            }`}
          >
            {parts[1]}
          </div>
        </div>
      ))}
    </div>
  );
}

export default IntroductionTxt;
