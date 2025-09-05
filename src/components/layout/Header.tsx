import Baseline from "@/components/sections/baseline/Baseline";
import ContactsData from "../sections/contacts/ContactsData";

import styles from "@/styles/components/layout/Header.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Baseline />
      <div className={styles.linksContainer}>
        <ContactsData />
      </div>
    </header>
  );
}

export default Header;
