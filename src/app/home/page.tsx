import PageTitle from "@/components/ui/PageTitle";
import Header from "@/components/layout/Header";

import styles from "@/styles/pages/Home.module.scss";

function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <PageTitle dynamicTitle="Portfolio" />
      <Header />
    </div>
  );
}

export default HomePage;
