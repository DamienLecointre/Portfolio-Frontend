import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "@/styles/components/ui/buttons/ArrowBtn.module.scss";

type Props = {
  onLeftClick: () => void;
  onRightClick: () => void;
  disableLeft?: boolean;
  disableRight?: boolean;
};

function ArrowBtn({
  onLeftClick,
  onRightClick,
  disableLeft,
  disableRight,
}: Props) {
  return (
    <div className={styles.arrowBtnContainer}>
      <button
        className={styles.arrowBtn}
        onClick={onLeftClick}
        disabled={disableLeft}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`${styles.arrow} ${
            disableLeft ? styles.arrowDisabled : ""
          } ${!disableLeft ? styles.arrowBtnPointer : ""}`}
        />
      </button>
      <button
        className={styles.arrowBtn}
        onClick={onRightClick}
        disabled={disableRight}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`${styles.arrow} ${
            disableRight ? styles.arrowDisabled : ""
          } ${!disableRight ? styles.arrowBtnPointer : ""}`}
        />
      </button>
    </div>
  );
}

export default ArrowBtn;
