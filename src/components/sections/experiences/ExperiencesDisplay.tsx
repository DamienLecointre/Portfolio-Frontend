import { experiencesData } from "@/data/sections/experiences/ExperiencesData";
import ExperiencesCard from "@/components/ui/cards/ExperiencesCard";

import styles from "@/styles/components/sections/experiences/ExperiencesDisplay.module.scss";

type Props = {
  isActive: number;
};
function ExperiencesDisplay({ isActive }: Props) {
  return (
    <div
      className={`${styles.experiencesContainer} ${
        isActive === 1 ? styles.showContainer : ""
      } `}
    >
      {experiencesData.map((item) => (
        <ExperiencesCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ExperiencesDisplay;
