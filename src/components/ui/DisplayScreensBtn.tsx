"use client";

import Link from "next/link";

import useCurrentPage from "@/hooks/useCurrentPage";
import { useBurger } from "../utils/BurgerContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "@/styles/components/ui/DisplayScreensBtn.module.scss";

type linkProps = {
  linkTitle: string;
  link: string;
  location?: string;
};

function DisplayScreensBtn({ linkTitle, link, location }: linkProps) {
  const isActive = useCurrentPage(link);
  const { closeMenu } = useBurger();

  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      className={`
        ${location === "home" ? styles.link : ""} 
        ${location === "BurgerMenuDisplay" ? styles.burgerMenuLink : ""} 
        ${
          isActive && location !== "BurgerMenuDisplay" ? styles.activeLink : ""
        } `}
      onClick={location === "BurgerMenuDisplay" ? closeMenu : undefined}
    >
      {linkTitle}
      {location === "BurgerMenuDisplay" && (
        <FontAwesomeIcon icon={faChevronRight} />
      )}
    </Link>
  );
}

export default DisplayScreensBtn;
