import { ReactElement } from "react";

import ContactItem from "@/components/sections/contacts/ContactsItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "@/styles/components/sections/contacts/ContactsData.module.scss";

type contactDataType = {
  icon: ReactElement;
  label: string;
  link?: string;
}[];

const contactData: contactDataType = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faEnvelope}
        style={{ height: "20px", width: "20px" }}
      />
    ),
    label: "lecointre.d@gmail.com",
    link: "mailto:lecointe.d@gmail.com",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faMobileScreenButton}
        style={{ height: "20px", width: "20px" }}
      />
    ),
    label: "06 75 28 36 08",
    link: "telto:+33675283608",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faLinkedinIn}
        style={{ height: "20px", width: "20px" }}
      />
    ),
    label: "Mon Linkedin",
    link: "https://www.linkedin.com/in/damienlecointre-developpeurweb/",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faGithub}
        style={{ height: "20px", width: "20px" }}
      />
    ),
    label: "Mon Github",
    link: "https://github.com/DamienLecointre",
  },
];

type Props = {
  location?: string;
};

function ContactsData({ location }: Props) {
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

export default ContactsData;
