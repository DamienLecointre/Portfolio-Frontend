"use client";

import { useEffect, useState } from "react";

import { useNavTo } from "@/hooks/useNavTo";

import styles from "@/styles/components/ui/SkipBtn.module.scss";

function SkipBtn() {
  const navTo = useNavTo();
  const [hideSkipBtn, setHideSkipBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHideSkipBtn(true);
    }, 10000);
  }, []);

  return (
    <button
      className={`${styles.btn} ${hideSkipBtn === true ? styles.hideBtn : ""}`}
      onClick={() => navTo("home")}
    >
      SKIP INTRO
    </button>
  );
}

export default SkipBtn;
