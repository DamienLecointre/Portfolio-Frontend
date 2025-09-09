"use client";

import useCurrentPage from "@/hooks/useCurrentPage";

import PageTitle from "@/components/ui/PageTitle";
import LineDivider from "@/components/ui/LineDivider";
import Header from "@/components/layout/Header";

import styles from "@/styles/pages/SitePageSetup.module.scss";

function HistoirePage() {
  const isHomePage = useCurrentPage("/");
  return (
    <div
      className={`${
        isHomePage ? styles.homePageContainer : styles.pageContainer
      }`}
    >
      <div className={styles.contentContainer}>
        <PageTitle dynamicTitle="Mon histoire" location="history" />
        <LineDivider />
        <div className={styles.txtContainer}>
          <h4>TEXTE</h4>
        </div>
        <LineDivider />
      </div>
      <Header />
    </div>
  );
}

export default HistoirePage;
