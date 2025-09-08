import Baseline from "@/components/sections/baseline/Baseline";
import ContactsData from "@/components/sections/contacts/ContactsData";
import DisplayScreensBtnData from "@/components/sections/nav/DisplayScreensBtnData";

import styles from "@/styles/components/layout/Header.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Baseline />
      <div className={styles.linksContainer}>
        <ContactsData />
        <DisplayScreensBtnData />
      </div>
    </header>
  );
}

export default Header;
