import SkillsCard from "@/components/ui/cards/SkillsCard";
import { SkillsData } from "@/data/sections/skills/SkillsData";

import styles from "@/styles/components/sections/skills/SkillsDisplay.module.scss";

function SkillsDisplay() {
  return (
    <div className={styles.skillsDisplayContainer}>
      {SkillsData.map((item) => (
        <SkillsCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default SkillsDisplay;
