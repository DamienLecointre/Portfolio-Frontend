"use client";

import { useState, useRef } from "react";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

import BurgerMenu from "@/components/ui/buttons/BurgerMenu";
import BurgerMenuDisplay from "@/components/layout/BurgerMenuDisplay";
import PageTitle from "@/components/ui/molecules/PageTitle";
import LineDivider from "@/components/ui/elements/LineDivider";
import ActionBtnContainer from "@/components/ui/molecules/ActionBtnContainer";
import ExperiencesDisplay from "@/components/sections/experiences/ExperiencesDisplay";
import FormationsDisplay from "@/components/sections/formations/FormationsDisplay";
import ArrowBtn from "@/components/ui/buttons/ArrowBtn";
import Header from "@/components/layout/Header";

import { motion, AnimatePresence } from "framer-motion";

import styles from "@/styles/pages/SitePageSetup.module.scss";

function ExperiencePage() {
  const isMobile = useBreakpoint(768);
  const showArrows = useBreakpoint(1900);

  const [activeId, setActiveId] = useState(1);

  const formationsRef = useRef<HTMLDivElement>(null);
  const { scroll, canScrollLeft, canScrollRight } =
    useHorizontalScroll(formationsRef);

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

        <div className={styles.lineDividerContainer}>
          <LineDivider lineDivider="lineTopDivider" />
          <ActionBtnContainer activeId={activeId} setActiveId={setActiveId} />
        </div>

        <AnimatePresence mode="wait">
          {activeId === 1 && (
            <motion.div
              className={styles.motionContainer}
              key="experiences"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ExperiencesDisplay />
            </motion.div>
          )}

          {activeId === 2 && (
            <motion.div
              className={styles.motionContainer}
              key="formations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <FormationsDisplay containerRef={formationsRef} />
            </motion.div>
          )}
        </AnimatePresence>
        {showArrows && (
          <ArrowBtn
            onLeftClick={() => scroll("left")}
            onRightClick={() => scroll("right")}
            disableLeft={!canScrollLeft}
            disableRight={!canScrollRight}
          />
        )}
        <LineDivider />
      </div>

      {!isMobile && <Header />}
    </div>
  );
}

export default ExperiencePage;
