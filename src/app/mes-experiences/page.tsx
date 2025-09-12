"use client";

import useCurrentPage from "@/hooks/useCurrentPage";
import { useIsMobile } from "@/hooks/useIsMobile";

import BurgerMenu from "@/components/ui/BurgerMenu";
import BurgerMenuDisplay from "@/components/layout/BurgerMenuDisplay";
import PageTitle from "@/components/ui/PageTitle";
import LineDivider from "@/components/ui/LineDivider";
import Header from "@/components/layout/Header";

import styles from "@/styles/pages/SitePageSetup.module.scss";

function ExperiencePage() {
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
        <PageTitle dynamicTitle="Mes expériences" />
        <LineDivider lineDivider="lineTopDivider" />
        <div className={styles.txtContainer}></div>
        <LineDivider />
      </div>
      {!isMobile && <Header />}
    </div>
  );
}

export default ExperiencePage;
