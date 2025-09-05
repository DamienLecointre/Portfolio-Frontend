import styles from "@/styles/components/ui/PageTitle.module.scss";

type PageTitleProps = {
  dynamicTitle: string;
};
function PageTitle({ dynamicTitle }: PageTitleProps) {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.subTitleWrapper}>
        <span className={styles.subTitle}>Damien Lecointre</span>
        <span className={styles.functionTitle}>Développeur web full stack</span>
      </h1>
      <h2 className={styles.pageTitle}>{dynamicTitle} </h2>
    </div>
  );
}

export default PageTitle;
