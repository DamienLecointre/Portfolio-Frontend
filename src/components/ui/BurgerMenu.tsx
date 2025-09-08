import styles from "@/styles/components/ui/BurgerMenu.module.scss";

function BurgerMenu() {
  return (
    <div className={styles.burgerMenuContainer}>
      <div className={styles.burgerMenuWrapper}>
        <span className={`${styles.line} ${styles.lineTop}`}></span>
        <span className={`${styles.line} ${styles.lineMid}`}></span>
        <span className={`${styles.line} ${styles.lineBot}`}></span>
      </div>
    </div>
  );
}

export default BurgerMenu;
