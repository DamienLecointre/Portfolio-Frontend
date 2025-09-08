import Link from "next/link";

import styles from "@/styles/components/ui/DisplayScreensBtn.module.scss";

type linkProps = {
  linkTitle: string;
  link: string;
};

function DisplayScreensBtn({ linkTitle, link }: linkProps) {
  return (
    <Link href={link} className={styles.link}>
      {linkTitle}
    </Link>
  );
}

export default DisplayScreensBtn;
