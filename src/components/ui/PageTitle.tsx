import styles from "@/styles/components/ui/PageTitle.module.scss";

type PageTitleProps = {
  dynamicTitle: string;
  location?: string;
};
function PageTitle({ dynamicTitle, location }: PageTitleProps) {
  return (
    <div
      className={`${
        location === "home" ? styles.homeTitleContainer : styles.titleContainer
      }`}
    >
      <h1
        className={`${
          location === "home"
            ? styles.homeSubTitleWrapper
            : styles.subTitleWrapper
        }`}
      >
        <span
          className={`${
            location === "home" ? styles.homeSubTitle : styles.subTitle
          }`}
        >
          Damien Lecointre
        </span>
        <span
          className={`${
            location === "home"
              ? styles.homeFunctionTitle
              : styles.functionTitle
          }`}
        >
          Développeur web full stack
        </span>
      </h1>
      <h2
        className={`
          ${location === "home" ? styles.homePageTitle : styles.pageTitle}
        `}
      >
        {dynamicTitle}
      </h2>
    </div>
  );
}

export default PageTitle;
