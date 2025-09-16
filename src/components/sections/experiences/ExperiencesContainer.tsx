import ExperiencesDisplay from "./ExperiencesDisplay";

import styles from "@/styles/components/sections/experiences/ExperiencesContainer.module.scss";
function ExperiencesContainer() {
  return (
    <div className={styles.experiencesContainer}>
      <h3 className={styles.title}>Expériences :</h3>
      <ExperiencesDisplay />
    </div>
  );
}

export default ExperiencesContainer;
