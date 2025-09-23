import { RefObject } from "react";

import SkillsCard from "@/components/ui/cards/SkillsCard";
import { SkillsData } from "@/data/sections/skills/SkillsData";

import styles from "@/styles/components/sections/skills/SkillsDisplay.module.scss";

type Props = {
  wrapperRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  transform: string;
  onTouchStart?: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchMove?: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchEnd?: (e: React.TouchEvent<HTMLDivElement>) => void;
};

function SkillsDisplay({
  wrapperRef,
  trackRef,
  transform,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}: Props) {
  return (
    <div className={styles.skillsWrapper} ref={wrapperRef}>
      <div
        className={styles.skillsDisplayContainer}
        ref={trackRef}
        style={{
          display: "flex",
          transform,
          transition: "transform 0.4s ease",
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {SkillsData.map((item) => (
          <SkillsCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default SkillsDisplay;
