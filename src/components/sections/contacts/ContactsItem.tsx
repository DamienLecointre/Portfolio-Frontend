import { ReactElement } from "react";

import styles from "@/styles/components/sections/contacts/ContactsItem.module.scss";

type ContactItemProps = {
  icon: ReactElement;
  label: string;
  link?: string;
};

function ContactsItem({ icon, label, link }: ContactItemProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkContainer}
    >
      <span className={styles.contactIcon}>{icon}</span>
      {/* <span className={styles.contactIconColored}>{icon}</span> */}
      <span className={styles.contacttxt}>{label}</span>
    </a>
  );
}

export default ContactsItem;
