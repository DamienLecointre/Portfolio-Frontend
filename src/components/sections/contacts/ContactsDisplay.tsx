import { contactsData } from "@/data/sections/contacts/ContactsData";
import ContactItem from "@/components/sections/contacts/ContactsItem";

import styles from "@/styles/components/sections/contacts/ContactsDisplay.module.scss";

type Props = {
  id: number;
  location?: string;
};

function ContactsDisplay({ id, location }: Props) {
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
