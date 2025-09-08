import DisplayScreensBtn from "@/components/ui/DisplayScreensBtn";

import styles from "@/styles/components/sections/nav/DisplayScreensBtnData.module.scss";

function DisplayScreensBtnData() {
  const navData = [
    { linkTitle: "Mon histoire", link: "/mon-histoire" },
    { linkTitle: "Mes expériences", link: "/mes-experiences" },
    { linkTitle: "Mes réalisations", link: "/mes-realisations" },
  ];
  return (
    <nav className={styles.navContainer}>
      {navData.map((item, index) => (
        <DisplayScreensBtn key={index} {...item} />
      ))}
    </nav>
  );
}

export default DisplayScreensBtnData;
