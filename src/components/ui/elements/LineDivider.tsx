import styles from "@/styles/components/ui/elements/LineDivider.module.scss";

type Props = {
  lineDivider?: string;
};

function LineDivider({ lineDivider }: Props) {
  return (
    <div
      className={
        lineDivider === "lineTopDivider"
          ? styles.lineTopContainer
          : styles.lineContainer
      }
    >
      <div className={styles.line}></div>
    </div>
  );
}

export default LineDivider;
