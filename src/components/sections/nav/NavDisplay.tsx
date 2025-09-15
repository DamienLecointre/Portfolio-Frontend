import DataScreensDisplayBtn from "@/data/sections/nav/DataScreensDisplayBtn";
import DisplayScreensBtn from "@/components/ui/DisplayScreensBtn";

import styles from "@/styles/components/sections/nav/NavDisplay.module.scss";

type Props = {
  location?: string;
};

function NavDisplay({ location }: Props) {
  const navData = DataScreensDisplayBtn();
  return (
    <nav
      className={`${location === "home" ? styles.navContainer : ""} ${
        location === "BurgerMenuDisplay" ? styles.burgerNavContainer : ""
      }`}
    >
      {navData.map((item, index) => (
        <DisplayScreensBtn key={index} {...item} location={location} />
      ))}
    </nav>
  );
}

export default NavDisplay;
