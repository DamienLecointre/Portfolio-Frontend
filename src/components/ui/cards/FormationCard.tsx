import styles from "@/styles/components/ui/cards/FormationCard.module.scss";

type Props = {
  endDate: number | null;
  startDate: number | null;
  detail: string;
  place: string;
};
function FormationCard({ endDate, startDate, detail, place }: Props) {
  return (
    <div className={styles.formationCardContainer}>
      <div className={styles.datesContainer}>
        <h5 className={`${styles.text} ${styles.endDate}`}>{endDate}</h5>
        {startDate !== null ? <h5 className={styles.text}>{startDate}</h5> : ""}
      </div>
      <div className={styles.dividerContainer}>
        <div className={styles.line}></div>
        <div className={styles.dote}></div>
      </div>
      <div className={styles.detailsContainer}>
        <h5 className={styles.text}>{detail}</h5>
        <h5 className={`${styles.text} ${styles.textThinner}`}>{place}</h5>
      </div>
    </div>
  );
}

export default FormationCard;

// id: number;
//   endDate: number;
//   startDate: number | null;
//   detail: string;
//   place: string;
