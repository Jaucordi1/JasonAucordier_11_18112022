import React from "react";
import debounce from "lodash/debounce";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState<boolean>(window.innerWidth <= 450);

  React.useLayoutEffect(() => {
    const updateSize = debounce(() => {
      setIsMobile(window.innerWidth <= 450);
      /*setIsMobile(isMobile => {
        if (isMobile) { // Previously mobile
          if (window.innerWidth > 450) {
            console.debug("Is desktop", window.innerWidth);
            return false; // Desktop
          }
        } else { // Previously desktop
          if (window.innerWidth <= 450) {
            console.debug("Is mobile", window.innerWidth);
            return true; // Mobile
          }
        }
        return isMobile;
      });*/
    }, 250);
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
};
