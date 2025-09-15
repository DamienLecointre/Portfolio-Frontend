import ContactsData from "@/data/sections/contacts/ContactsData";
import ContactItem from "@/components/sections/contacts/ContactsItem";

import styles from "@/styles/components/sections/contacts/ContactsDisplay.module.scss";

type Props = {
  location?: string;
};

function ContactsDisplay({ location }: Props) {
  const contactData = ContactsData();

  return (
    <div
      className={`${location === "home" ? styles.contactsContainer : ""} ${
        location === "BurgerMenuDisplay" ? styles.burgerContactsContainer : ""
      }`}
    >
      {contactData.map((item, index) => (
        <ContactItem key={index} {...item} location={location} />
      ))}
    </div>
  );
}

export default ContactsDisplay;
