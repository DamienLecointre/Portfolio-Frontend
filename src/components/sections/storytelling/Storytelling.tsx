import styles from "@/styles/components/sections/storytelling/Storytelling.module.scss";
type Props = {
  text: string;
};
function Storytelling({ text }: Props) {
  if (text.includes("Parlons-en")) {
    const parts = text.split("Parlons-en");

    return (
      <p className={styles.text}>
        {parts[0]}
        <a
          href="mailto:lecointe.d@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.text} ${styles.textLink}`}
        >
          Parlons-en
        </a>
        {parts[1]}
      </p>
    );
  }

  return <p className={styles.text}>{text}</p>;
}

export default Storytelling;
