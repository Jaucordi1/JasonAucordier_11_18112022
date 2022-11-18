import {Column} from "../column/Column";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import styles   from "./Layout.module.sass";
import React    from "react";

export const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
      <Column component="main" id="layout" className={styles.container}>
        <Column className={styles.content}>
          <Header />
          {children}
        </Column>
        <Footer />
      </Column>
  );
};
