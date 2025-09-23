import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "@/styles/components/ui/buttons/ArrowBtn.module.scss";

type Props = {
  onLeftClick: () => void;
  onRightClick: () => void;
  isStart: boolean;
  isEnd: boolean;
};

function ArrowBtn({ onLeftClick, onRightClick, isStart, isEnd }: Props) {
  return (
    <div className={styles.arrowBtnContainer}>
      <button
        className={styles.arrowBtn}
        onClick={onLeftClick}
        disabled={isStart}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`${styles.arrow} ${isStart ? styles.arrowDisabled : ""} ${
            !isStart ? styles.arrowBtnPointer : ""
          }`}
        />
      </button>
      <button
        className={styles.arrowBtn}
        onClick={onRightClick}
        disabled={isEnd}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`${styles.arrow} ${isEnd ? styles.arrowDisabled : ""} ${
            !isEnd ? styles.arrowBtnPointer : ""
          }`}
        />
      </button>
    </div>
  );
}

export default ArrowBtn;
