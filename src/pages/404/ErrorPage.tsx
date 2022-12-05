import classes                                                             from "./ErrorPage.module.sass";
import {Routes}                                                            from "../../Router";
import {isRouteErrorResponse, useLocation, useResolvedPath, useRouteError} from "react-router-dom";
import React                                                               from "react";

import type {ErrorResponse} from "@remix-run/router";

const Link = React.lazy(() => import("../../components/link/Link"));

const EXISTING_ROUTES = [Routes.HOME, Routes.LOGEMENT, Routes.ABOUT].map(route => Routes.ROOT + route);

const ErrorPage = () => {
  const location = useLocation();
  const resolvedPath = useResolvedPath(location.pathname);
  const routeError = useRouteError() as ErrorResponse | Error;

  const isHome = resolvedPath.pathname === Routes.HOME;
  const routeExists = EXISTING_ROUTES.includes(resolvedPath.pathname);

  return (
      <main id="error-page" className={classes.container}>
        <div className={classes.error}>
          <h1 className={classes.code}>{
            isRouteErrorResponse(routeError)
                ? routeError.status
                : routeError.name
          }</h1>
          <p className={classes.message}>{
            isRouteErrorResponse(routeError)
                ? (routeError.data || (
                    routeExists
                        ? routeError.statusText
                        : "Oups! La page que vous demandez n'existe pas."
                ))
                : routeError.message
          }</p>
        </div>
        {!isHome && <div className={classes.links}>
          <Link to={Routes.ROOT + Routes.HOME} style={{textDecoration: "underline"}}>
            Retourner sur la page d'accueil
          </Link>
        </div>}
      </main>
  );
};

export default ErrorPage;
