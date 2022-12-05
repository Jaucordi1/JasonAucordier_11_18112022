import styles      from "./Footer.module.sass";
import {Copyright} from "../copyright/Copyright";
import {Skeleton}  from "../skeleton/Skeleton";
import React       from "react";

const Logo = React.lazy(() => import("../logo/Logo"));

export const Footer = () => {
  return (
      <footer id="footer" className={styles.container}>
        <React.Suspense fallback={<Skeleton width={122} height={40} />}>
          <Logo className={styles.logo} />
        </React.Suspense>
        <Copyright />
      </footer>
  );
};
