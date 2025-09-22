import FormationCard from "@/components/ui/cards/FormationCard";
import { formationsData } from "@/data/sections/formations/FormationsData";

import styles from "@/styles/components/sections/formations/FormationsDisplay.module.scss";

function FormationsDisplay() {
  return (
    <div className={styles.formationsContainer}>
      {formationsData.map((item) => (
        <FormationCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default FormationsDisplay;
