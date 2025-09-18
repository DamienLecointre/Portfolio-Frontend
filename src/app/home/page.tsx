"use client";

import { useIsMobile } from "@/hooks/useIsMobile";

import BurgerMenu from "@/components/ui/buttons/BurgerMenu";
import BurgerMenuDisplay from "@/components/layout/BurgerMenuDisplay";
import PageTitle from "@/components/ui/molecules/PageTitle";
import Header from "@/components/layout/Header";

import styles from "@/styles/pages/SitePageSetup.module.scss";

function HomePage() {
  const isMobile = useIsMobile(768);

  return (
    <div className={styles.homePageContainer}>
      {isMobile && (
        <>
          <BurgerMenu />
          <BurgerMenuDisplay />
        </>
      )}
      <PageTitle dynamicTitle="Portfolio" location="home" />
      <Header />
    </div>
  );
}

export default HomePage;
