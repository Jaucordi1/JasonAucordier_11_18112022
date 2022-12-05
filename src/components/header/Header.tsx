import classes                                 from "./Header.module.sass";
import {Routes}                                from "../../Router";
import {Skeleton}                              from "../skeleton/Skeleton";
import {NavLink, useLocation, useResolvedPath} from "react-router-dom";
import classnames                              from "classnames";
import React                                   from "react";

const Logo = React.lazy(() => import("../logo/Logo"));

export const Header = () => {
  const location = useLocation();
  const route = useResolvedPath(location.pathname);

  return (
      <header id="header" className={classes.container}>
        <NavLink to={Routes.ROOT} className={classes.homelink}>
          <React.Suspense fallback={<Skeleton width={211} height={68} />}>
            <Logo className={classes.logo} />
          </React.Suspense>
        </NavLink>

        <ul className={classes.navigation}>
          <li className={classes.navigationItem}>
            <NavLink to={Routes.HOME} className={classnames(classes.link, {
              [classes.current]: route.pathname === (Routes.ROOT + Routes.HOME),
            })}>
              Accueil
            </NavLink>
          </li>
          <li className={classes.navigationItem}>
            <NavLink to={Routes.ABOUT} className={classnames(classes.link, {
              [classes.current]: route.pathname === (Routes.ROOT + Routes.ABOUT),
            })}>
              A propos
            </NavLink>
          </li>
        </ul>
      </header>
  );
};
