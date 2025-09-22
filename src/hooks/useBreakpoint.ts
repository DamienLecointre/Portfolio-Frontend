import { useEffect, useState } from "react";

export function useBreakpoint(breakpoint = 768) {
  const [useBreakpoint, setUseBreakpoint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setUseBreakpoint(window.innerWidth <= breakpoint);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return useBreakpoint;
}
