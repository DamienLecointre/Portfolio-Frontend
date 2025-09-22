import { RefObject } from "react";

import FormationCard from "@/components/ui/cards/FormationCard";
import LineDivider from "@/components/ui/elements/LineDivider";

import { formationsData } from "@/data/sections/formations/FormationsData";

import styles from "@/styles/components/sections/formations/FormationsDisplay.module.scss";

type Props = {
  containerRef: RefObject<HTMLDivElement | null>;
};

function FormationsDisplay({ containerRef }: Props) {
  return (
    <div className={styles.formationsContainer} ref={containerRef}>
      {formationsData.map((item) => (
        <FormationCard key={item.id} {...item} />
      ))}
      <LineDivider lineDivider="formations" />
    </div>
  );
}

export default FormationsDisplay;
