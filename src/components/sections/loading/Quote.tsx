import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "@/styles/components/sections/loading/Quote.module.scss";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
export default function Quote() {
  return (
    <>
      <h4 className={styles.title}>Bonus ultra-philosophique :</h4>
      <div className={styles.quoteContainer}>
        <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIcon} />
        <h4 className={styles.quote}>
          Code bien écrit, esprit apaisé. Code spaghetti, stress infini.
        </h4>
        <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteIcon} />
      </div>
    </>
  );
}
