import { ReactElement } from "react";

import styles from "@/styles/components/ui/cards/SkillsCard.module.scss";

type Props = {
  title: string;
  icon: ReactElement[];
};
function SkillsCard({ title, icon }: Props) {
  return (
    <div className={styles.skillsCardContainer}>
      <div className={styles.titleContainer}>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.iconContainer}>{icon}</div>
    </div>
  );
}

export default SkillsCard;
