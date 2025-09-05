import PageTitle from "@/components/ui/PageTitle";

import styles from "@/styles/pages/Home.module.scss";

function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <PageTitle dynamicTitle="Portfolio" />
    </div>
  );
}

export default HomePage;
