import styles from "@/styles/components/sections/loading/LoadingTxt.module.scss";
function LoadingTxt() {
  return (
    <div className={styles.container}>
      <div className={styles.loaderIndicatorContainer}>
        <div className={styles.loaderIndicatorDot}></div>
        <div className={styles.loaderIndicatorBlur}></div>
      </div>
      <h4 className={styles.text}>LOADING</h4>
    </div>
  );
}

export default LoadingTxt;
