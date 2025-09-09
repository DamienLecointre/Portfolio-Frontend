import DisplayScreensBtnData from "@/components/sections/nav/DisplayScreensBtnData";
import ContactsData from "@/components/sections/contacts/ContactsData";

import { useBurger } from "@/components/utils/BurgerContext";

import styles from "@/styles/components/layout/BurgerMenuDisplay.module.scss";

function BurgerMenuDisplay() {
  const { isActive } = useBurger();

  return (
    <div
      className={`${styles.burgerMenuDisplayContainer} ${
        isActive ? styles.active : ""
      }`}
    >
      <DisplayScreensBtnData location="BurgerMenuDisplay" />
      <div className={styles.lineContainer}>
        <span className={styles.line}></span>
      </div>
      <ContactsData location="BurgerMenuDisplay" />
    </div>
  );
}

export default BurgerMenuDisplay;
