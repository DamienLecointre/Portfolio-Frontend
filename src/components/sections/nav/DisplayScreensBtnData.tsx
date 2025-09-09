import DisplayScreensBtn from "@/components/ui/DisplayScreensBtn";

import styles from "@/styles/components/sections/nav/DisplayScreensBtnData.module.scss";

type Props = {
  location?: string;
};

const navData = [
  { linkTitle: "Mon histoire", link: "/mon-histoire" },
  { linkTitle: "Mes expériences", link: "/mes-experiences" },
  { linkTitle: "Mes réalisations", link: "/mes-realisations" },
];

function DisplayScreensBtnData({ location }: Props) {
  return (
    <nav
      className={`${location === "default" ? styles.navContainer : ""} ${
        location === "BurgerMenuDisplay" ? styles.burgerNavContainer : ""
      }`}
    >
      {navData.map((item, index) => (
        <DisplayScreensBtn key={index} {...item} location={location} />
      ))}
    </nav>
  );
}

export default DisplayScreensBtnData;
