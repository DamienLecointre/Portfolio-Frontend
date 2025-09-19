import styles from "@/styles/components/ui/buttons/ActionBtn.module.scss";

type Props = {
  title: string;
  onclick: () => void;
  isActive: boolean;
};

function ActionBtn({ title, onclick, isActive }: Props) {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={onclick}
    >
      {title}
    </button>
  );
}

export default ActionBtn;
