import { useIsShortScreen } from "@/hooks/useIsShortScreen";
import { useIsMobile } from "@/hooks/useIsMobile";

import styles from "@/styles/components/ui/molecules/Gradient.module.scss";

function Gradient() {
  const isShortScreen = useIsShortScreen(810);
  const isMobile = useIsMobile(768);

  const gradientheightStyle = { height: "40%" };

  return (
    <div
      className={styles.gradientContainer}
      style={isShortScreen && !isMobile ? gradientheightStyle : {}}
    ></div>
  );
}

export default Gradient;
