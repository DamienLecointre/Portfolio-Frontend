import styles from "@/styles/components/ui/cards/FormationCard.module.scss";

type Props = {
  endDate: number | null;
  startDate: string | null;
  detail: string;
  place: string;
};
function FormationCard({ endDate, startDate, detail, place }: Props) {
  return (
    <div className={styles.formationCardContainer}>
      <div className={styles.datesContainer}>
        <h5 className={`${styles.dates} ${styles.endDate}`}>{endDate}</h5>
        {startDate !== null ? (
          <h5 className={`${styles.dates} ${styles.startDate}`}>{startDate}</h5>
        ) : (
          ""
        )}
      </div>
      <div className={styles.detailsContainer}>
        <h5 className={`${styles.text} ${styles.textBolder}`}>{detail}</h5>
        <h5 className={`${styles.text} ${styles.textThinner}`}>{place}</h5>
      </div>
    </div>
  );
}

export default FormationCard;
