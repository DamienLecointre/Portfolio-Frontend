import NavDisplay from "@/components/sections/nav/NavDisplay";
import ContactsDisplay from "@/components/sections/contacts/ContactsDisplay";

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
      <NavDisplay location="BurgerMenuDisplay" />
      <div className={styles.lineContainer}>
        <span className={styles.line}></span>
      </div>
      <ContactsDisplay location="BurgerMenuDisplay" />
    </div>
  );
}

export default BurgerMenuDisplay;
