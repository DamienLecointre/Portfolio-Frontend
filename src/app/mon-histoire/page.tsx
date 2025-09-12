"use client";

import useCurrentPage from "@/hooks/useCurrentPage";
import { useIsMobile } from "@/hooks/useIsMobile";

import BurgerMenu from "@/components/ui/BurgerMenu";
import BurgerMenuDisplay from "@/components/layout/BurgerMenuDisplay";
import PageTitle from "@/components/ui/PageTitle";
import LineDivider from "@/components/ui/LineDivider";
import StorytellingData from "@/components/sections/storytelling/StorytellingData";
import Header from "@/components/layout/Header";

import { IoChatboxEllipsesOutline } from "react-icons/io5";

import styles from "@/styles/pages/SitePageSetup.module.scss";

function HistoirePage() {
  const isHomePage = useCurrentPage("/");
  const isMobile = useIsMobile(768);
  return (
    <div
      className={`${
        isHomePage ? styles.homePageContainer : styles.pageContainer
      }`}
    >
      {isMobile && (
        <>
          <BurgerMenu />
          <BurgerMenuDisplay />
        </>
      )}
      <div className={styles.contentContainer}>
        <PageTitle dynamicTitle="Mon histoire" />
        <LineDivider lineDivider="lineTopDivider" />
        <div className={styles.txtContainer}>
          {isMobile && <div className={styles.gradientContainer}></div>}
          <IoChatboxEllipsesOutline className={styles.quoteIcon} />
          <StorytellingData />
        </div>
        <LineDivider />
      </div>
      {!isMobile && <Header />}
    </div>
  );
}

export default HistoirePage;
