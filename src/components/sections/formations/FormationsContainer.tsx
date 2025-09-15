import FormationsDisplay from "./FormationsDisplay";

import styles from "@/styles/components/sections/formations/FormationsContainer.module.scss";
function FormationsContainer() {
  return (
    <div className={styles.formationsContainer}>
      <h3 className={styles.title}>Formations :</h3>
      <FormationsDisplay />
    </div>
  );
}

export default FormationsContainer;
