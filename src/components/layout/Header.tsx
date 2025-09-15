import Baseline from "@/components/sections/baseline/Baseline";
import ContactsDisplay from "@/components/sections/contacts/ContactsDisplay";
import NavDisplay from "@/components/sections/nav/NavDisplay";

import styles from "@/styles/components/layout/Header.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Baseline />
      <div>
        <ContactsDisplay location="home" />
        <NavDisplay location="home" />
      </div>
    </header>
  );
}

export default Header;
