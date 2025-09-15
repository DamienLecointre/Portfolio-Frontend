"use client";

import { useIsMobile } from "@/hooks/useIsMobile";

import BurgerMenu from "@/components/ui/BurgerMenu";
import BurgerMenuDisplay from "@/components/layout/BurgerMenuDisplay";
import PageTitle from "@/components/ui/PageTitle";
import LineDivider from "@/components/ui/LineDivider";
import StorytellingDisplay from "@/components/sections/storytelling/StorytellingDisplay";
import Header from "@/components/layout/Header";

import { IoChatboxEllipsesOutline } from "react-icons/io5";

import styles from "@/styles/pages/SitePageSetup.module.scss";

function HistoirePage() {
  const isMobile = useIsMobile(768);

  return (
    <div className={styles.pageContainer}>
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
          <StorytellingDisplay />
        </div>
        <LineDivider />
      </div>
      {!isMobile && <Header />}
    </div>
  );
}

export default HistoirePage;
