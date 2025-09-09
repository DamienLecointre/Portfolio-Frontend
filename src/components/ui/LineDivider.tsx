import styles from "@/styles/components/ui/LineDivider.module.scss";

function LineDivider() {
  return (
    <div className={styles.lineContainer}>
      <div className={styles.line}></div>
    </div>
  );
}

export default LineDivider;
