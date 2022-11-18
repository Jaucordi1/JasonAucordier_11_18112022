import styles     from "./Header.module.sass";
import {Routes}  from "../../Router";
import {Skeleton} from "../skeleton/Skeleton";
import {Row}     from "../row/Row";
import {NavLink} from "react-router-dom";
import React      from "react";

const Logo = React.lazy(() => import("../logo/Logo"));

export const Header = () => {
  return (
      <Row component="header" id="header" className={styles.container}>
        <NavLink to={Routes.ROOT} className={styles.homelink}>
          <React.Suspense fallback={<Skeleton width={211} height={68} />}>
            <Logo className={styles.logo} />
          </React.Suspense>
        </NavLink>

        <Row component="ul" className={styles.navigation}>
          <li className={styles.navlink}>
            <NavLink to={Routes.HOME} className={styles.link}>
              Home
            </NavLink>
          </li>
          <li className={styles.navlink}>
            <NavLink to={Routes.ABOUT} className={styles.link}>
              À propos
            </NavLink>
          </li>
        </Row>
      </Row>
  );
};
