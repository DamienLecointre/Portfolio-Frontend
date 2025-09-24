"use client";

import { useIsShortScreen } from "@/hooks/useIsShortScreen";
import { useBreakpoint } from "@/hooks/useBreakpoint";

import BurgerMenu from "@/components/ui/buttons/BurgerMenu";
import BurgerMenuDisplay from "@/components/layout/BurgerMenuDisplay";
import PageTitle from "@/components/ui/molecules/PageTitle";
import LineDivider from "@/components/ui/elements/LineDivider";
import Gradient from "@/components/ui/elements/Gradient";
import StorytellingDisplay from "@/components/sections/storytelling/StorytellingDisplay";
import Header from "@/components/layout/Header";

import { IoChatboxEllipsesOutline } from "react-icons/io5";

import styles from "@/styles/pages/SitePageSetup.module.scss";

function HistoirePage() {
  const isShortScreen = useIsShortScreen(810);
  const isMobile = useBreakpoint(768);

  return (
    <div className={styles.pageContainer}>
      {isMobile && (
        <>
          <BurgerMenu />
          <BurgerMenuDisplay />
        </>
      )}
      <div className={styles.contentContainer}>
        <PageTitle dynamicTitle="Ma démarche" />
        <LineDivider lineDivider="lineTopDivider" />
        <div className={styles.txtContainer}>
          {isShortScreen && <Gradient />}
          {isMobile && <Gradient />}
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
