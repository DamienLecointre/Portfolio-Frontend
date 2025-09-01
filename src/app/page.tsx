import SkipBtn from "@/components/btn/SkipBtn"

import styles from "@/styles/pages/Page.module.scss"

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <SkipBtn/>
      {/* <h1>HOME</h1> */}
    </div>
  );
}
