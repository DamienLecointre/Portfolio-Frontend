import SkillsCard from "@/components/ui/SkillsCard";
import { SkillsData } from "@/data/sections/skills/SkillsData";

import styles from "@/styles/components/sections/skills/SkillsDisplay.module.scss";

function SkillsDisplay() {
  return (
    <div className={styles.skillsDisplayContainer}>
      {SkillsData.map((item, index) => (
        <SkillsCard key={index} {...item} />
      ))}
    </div>
  );
}

export default SkillsDisplay;
