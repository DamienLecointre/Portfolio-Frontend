import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "@/styles/components/ui/DisplayScreensBtn.module.scss";

type linkProps = {
  linkTitle: string;
  link: string;
  location?: string;
};

function DisplayScreensBtn({ linkTitle, link, location }: linkProps) {
  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      className={`${
        location === "BurgerMenuDisplay" ? styles.burgerMenuLink : ""
      } ${location === "default" ? styles.link : ""} `}
    >
      {linkTitle}
      {location === "BurgerMenuDisplay" && (
        <FontAwesomeIcon icon={faChevronRight} />
      )}
    </Link>
  );
}

export default DisplayScreensBtn;
