"use client";

import useCurrentPage from "@/hooks/useCurrentPage";

import PageTitle from "@/components/ui/PageTitle";
import LineDivider from "@/components/ui/LineDivider";
import StorytellingData from "@/components/sections/storytelling/StorytellingData";
import Header from "@/components/layout/Header";

import { MdFormatQuote } from "react-icons/md";

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
        <LineDivider lineDivider="lineTopDivider" />
        <div className={styles.txtContainer}>
          <MdFormatQuote
            className={`${styles.quoteIcon} ${styles.quoteIconTop}`}
          />
          <StorytellingData />
        </div>
        <LineDivider />
      </div>
      <Header />
    </div>
  );
}

export default HistoirePage;
