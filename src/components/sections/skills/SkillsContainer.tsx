import SkillsDisplay from "./SkillsDisplay";

import styles from "@/styles/components/sections/skills/SkillsContainer.module.scss";

function SkillsContainer() {
  return (
    <div className={styles.skillsContainer}>
      <h3 className={`${styles.title} ${styles.skillsTitle}`}>Skills :</h3>
      <SkillsDisplay />
    </div>
  );
}

export default SkillsContainer;
