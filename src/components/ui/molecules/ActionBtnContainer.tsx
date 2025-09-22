import ActionBtn from "../buttons/ActionBtn";

import { DataActionBtn } from "@/data/ui/buttons/DataActionBtn";

import styles from "@/styles/components/ui/molecules/ActionBtnContainer.module.scss";

type Props = {
  activeId: number;
  setActiveId: (id: number) => void;
};

function ActionBtnContainer({ activeId, setActiveId }: Props) {
  const handleclick = (id: number) => {
    setActiveId(id);
  };

  return (
    <div className={styles.btnContainer}>
      <div className={styles.btnWrapper}>
        {DataActionBtn.map((item) => (
          <ActionBtn
            key={item.id}
            {...item}
            onclick={() => handleclick(item.id)}
            isActive={activeId === item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ActionBtnContainer;
