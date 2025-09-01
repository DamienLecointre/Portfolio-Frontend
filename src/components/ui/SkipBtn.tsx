"use client";

import { useNavTo } from "@/hooks/useNavTo";

import styles from "@/styles/components/ui/SkipBtn.module.scss";

function SkipBtn() {
  const navTo = useNavTo();

  return (
    <button className={styles.btn} onClick={() => navTo("home")}>
      SKIP INTRO
    </button>
  );
}

export default SkipBtn;
