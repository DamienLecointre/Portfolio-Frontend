import { useIsShortScreen } from "@/hooks/useIsShortScreen";
import { useBreakpoint } from "@/hooks/useBreakpoint";

import styles from "@/styles/components/ui/molecules/Gradient.module.scss";

function Gradient() {
  const isShortScreen = useIsShortScreen(810);
  const isMobile = useBreakpoint(768);

  const gradientheightStyle = { height: "40%" };

  return (
    <div
      className={styles.gradientContainer}
      style={isShortScreen && !isMobile ? gradientheightStyle : {}}
    ></div>
  );
}

export default Gradient;
