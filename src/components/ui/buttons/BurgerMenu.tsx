"use client";

import { useBurger } from "@/components/utils/BurgerContext";

import styles from "@/styles/components/ui/buttons/BurgerMenu.module.scss";

function BurgerMenu() {
  const { isActive, toggleMenu } = useBurger();

  return (
    <div className={styles.burgerMenuContainer}>
      <div className={styles.burgerMenuWrapper} onClick={toggleMenu}>
        <span
          className={`${styles.line} ${
            !isActive ? styles.lineTop : styles.lineTopRotate
          }`}
        ></span>
        <span
          className={`${styles.line} ${
            !isActive ? styles.lineMid : styles.lineMidHidden
          }`}
        ></span>
        <span
          className={`${styles.line} ${
            !isActive ? styles.lineBot : styles.lineBotRotate
          }`}
        ></span>
      </div>
    </div>
  );
}

export default BurgerMenu;
