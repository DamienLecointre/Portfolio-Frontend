"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import useCurrentPage from "@/hooks/useCurrentPage";

import { useBurger } from "@/components/utils/BurgerContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "@/styles/components/ui/buttons/DisplayScreensBtn.module.scss";

type linkProps = {
  linkTitle: string;
  link: string;
  location?: string;
};

function DisplayScreensBtn({ linkTitle, link, location }: linkProps) {
  const router = useRouter();
  const isActive = useCurrentPage(link);
  const { closeMenu } = useBurger();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location !== "BurgerMenuDisplay") {
      router.push(link);
    }

    if (location === "BurgerMenuDisplay") {
      closeMenu();
    }

    setTimeout(() => {
      if (location === "BurgerMenuDisplay") {
        router.push(link);
      }
    }, 400);
  };

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
      onClick={handleClick}
    >
      {linkTitle}
      {location === "BurgerMenuDisplay" && (
        <FontAwesomeIcon icon={faChevronRight} />
      )}
    </Link>
  );
}

export default DisplayScreensBtn;
