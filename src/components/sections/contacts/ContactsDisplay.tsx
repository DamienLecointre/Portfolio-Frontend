import { contactsData } from "@/data/sections/contacts/ContactsData";
import ContactItem from "@/components/sections/contacts/ContactsItem";

import styles from "@/styles/components/sections/contacts/ContactsDisplay.module.scss";

type Props = {
  location?: string;
};

function ContactsDisplay({ location }: Props) {
  return (
    <div
      className={`${location === "home" ? styles.contactsContainer : ""} ${
        location === "BurgerMenuDisplay" ? styles.burgerContactsContainer : ""
      }`}
    >
      {contactsData.map((item) => (
        <ContactItem key={item.id} {...item} location={location} />
      ))}
    </div>
  );
}

export default ContactsDisplay;
