import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import styles from "@/styles/components/sections/baseline/Baseline.module.scss";
function Baseline() {
  return (
    <div className={styles.baselineContainer}>
      <div className={styles.baselineWrapper}>
        <FontAwesomeIcon icon={faCopyright} className={styles.icon} />
        <h6 className={styles.baseline}>
          2025 - Ni magie, ni sortilège, juste du code fait avec passion !
        </h6>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}

export default Baseline;
