import { ReactElement } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

// Typage d’un contact
export type Contact = {
  icon: ReactElement;
  label: string;
  link?: string;
};

// Données exportées directement
export const contactsData: Contact[] = [
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
    label: "+33 6 75 28 36 08",
    link: "tel:+33675283608",
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
