import styles from "@/styles/components/sections/storytelling/Storytelling.module.scss";
type Props = {
  text: string;
};
function Storytelling({ text }: Props) {
  return <p className={styles.text}>{text}</p>;
}

export default Storytelling;
