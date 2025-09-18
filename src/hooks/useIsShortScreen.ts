import { useEffect, useState } from "react";

export function useIsShortScreen(breakpoint = 600) {
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsShort(window.innerHeight <= breakpoint);
    };

    // Vérifie dès le premier rendu
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isShort;
}
