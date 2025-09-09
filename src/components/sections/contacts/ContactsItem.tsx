import { ReactElement } from "react";

import styles from "@/styles/components/sections/contacts/ContactsItem.module.scss";

type ContactItemProps = {
  icon: ReactElement;
  label: string;
  link?: string;
  location?: string;
};

function ContactsItem({ icon, label, link, location }: ContactItemProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${location === "default" ? styles.linkContainer : ""} ${
        location === "BurgerMenuDisplay" ? styles.burgerLinkContainer : ""
      }`}
    >
      <span className={styles.contactIcon}>{icon}</span>
      {location === "default" ? (
        <span className={styles.contactIconColored}>{icon}</span>
      ) : (
        ""
      )}
      <span
        className={`${location === "default" ? styles.contacttxt : ""} ${
          location === "BurgerMenuDisplay" ? styles.burgerContacttxt : ""
        }`}
      >
        {label}
      </span>
    </a>
  );
}

export default ContactsItem;
