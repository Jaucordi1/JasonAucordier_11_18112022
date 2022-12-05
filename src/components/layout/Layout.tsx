import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import styles   from "./Layout.module.sass";
import React    from "react";

export const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
      <div id="layout" className={styles.container}>
        <div className={styles.content}>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
  );
};
