import styles from "@/styles/components/ui/cards/ExperiencesCard.module.scss";

type Props = {
  activity: string;
  detail: string;
  startDate: number | string;
  endDate: number | string;
};

function ExperiencesCard({ activity, detail, startDate, endDate }: Props) {
  return (
    <div className={styles.experiencesCardContainer}>
      <h5 className={styles.title}>{activity}</h5>
      <p className={styles.detail}>{detail}</p>
      <div className={styles.datesContainer}>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.datesWrapper}>
          <h5 className={styles.date}>{startDate}</h5>
          <div className={styles.dashContainer}>
            <div className={styles.dash}></div>
          </div>
          <h5 className={styles.date}>{endDate}</h5>
        </div>
      </div>
    </div>
  );
}

export default ExperiencesCard;
