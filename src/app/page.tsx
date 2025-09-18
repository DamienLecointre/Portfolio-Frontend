import SkipBtn from "@/components/ui/buttons/SkipBtn";
import Loading from "@/components/sections/loading/Loading";

import styles from "@/styles/pages/Page.module.scss";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <SkipBtn />
      <Loading />
    </div>
  );
}
