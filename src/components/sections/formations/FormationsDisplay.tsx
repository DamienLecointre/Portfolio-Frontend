import { RefObject } from "react";

import FormationCard from "@/components/ui/cards/FormationCard";
import LineDivider from "@/components/ui/elements/LineDivider";

import { formationsData } from "@/data/sections/formations/FormationsData";

import styles from "@/styles/components/sections/formations/FormationsDisplay.module.scss";

type Props = {
  wrapperRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  transform: string;
  onTouchStart?: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchMove?: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchEnd?: (e: React.TouchEvent<HTMLDivElement>) => void;
};

function FormationsDisplay({
  wrapperRef,
  trackRef,
  transform,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}: Props) {
  return (
    <div className={styles.formationsWrapper} ref={wrapperRef}>
      <div
        className={styles.formationsContainer}
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
        {formationsData.map((item) => (
          <FormationCard key={item.id} {...item} />
        ))}
        <LineDivider lineDivider="formations" />
      </div>
    </div>
  );
}

export default FormationsDisplay;
