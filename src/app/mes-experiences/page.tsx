"use client";

import { useIsMobile } from "@/hooks/useIsMobile";

import BurgerMenu from "@/components/ui/buttons/BurgerMenu";
import BurgerMenuDisplay from "@/components/layout/BurgerMenuDisplay";
import PageTitle from "@/components/ui/molecules/PageTitle";
import LineDivider from "@/components/ui/elements/LineDivider";
import ActionBtnContainer from "@/components/ui/molecules/ActionBtnContainer";
import ExperiencesDisplay from "@/components/sections/experiences/ExperiencesDisplay";
import Header from "@/components/layout/Header";

import styles from "@/styles/pages/SitePageSetup.module.scss";

function ExperiencePage() {
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
        <PageTitle dynamicTitle="Mes expériences" />
        <div className={styles.lineTopDividerContainer}>
          <LineDivider lineDivider="lineTopDivider" />
          <ActionBtnContainer />
        </div>
        <ExperiencesDisplay />
        <LineDivider />
      </div>
      {!isMobile && <Header />}
    </div>
  );
}

export default ExperiencePage;
