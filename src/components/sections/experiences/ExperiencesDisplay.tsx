import { experiencesData } from "@/data/sections/experiences/ExperiencesData";
import ExperiencesCard from "@/components/ui/cards/ExperiencesCard";

import styles from "@/styles/components/sections/experiences/ExperiencesDisplay.module.scss";

function ExperiencesDisplay() {
  return (
    <div className={styles.experiencesContainer}>
      {experiencesData.map((item) => (
        <ExperiencesCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ExperiencesDisplay;
