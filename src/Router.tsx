import {Layout}                                      from "./components/layout/Layout";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import React                                         from "react";
import {ILogement}                                   from "./models/logement/ILogement";

const ErrorPage = React.lazy(() => import("./pages/404/ErrorPage"));
const HomePage = React.lazy(() => import("./pages/home/HomePage"));
const LogementPage = React.lazy(() => import("./pages/logement/LogementPage"));
const AboutPage = React.lazy(() => import("./pages/about/AboutPage"));

export enum Routes {
  ROOT = "/",

  HOME = "",
  LOGEMENT = "logement/:id",
  ABOUT = "about",
}

const AppFallback = () => {
  return (
      <p>Chargement de l'application…</p>
  );
};

export const Root = () => {
  return (
      <Layout>
        <React.Suspense fallback={<AppFallback />}>
          <Outlet />
        </React.Suspense>
      </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <Root />,
    errorElement: (
        <Layout>
          <React.Suspense fallback={<AppFallback />}>
            <ErrorPage />
          </React.Suspense>
        </Layout>
    ),
    children: [
      {
        path: Routes.HOME,
        element: <HomePage />,
        loader: async () => {
          return new Promise(
              (resolve, reject) => fetch("/api/logements.json")
                  .then(response => {
                    if (!response.ok) {
                      throw new Response(response.statusText, {status: response.status});
                    }
                    return response.json();
                  })
                  .then(resolve)
                  .catch(error => {
                    if (!(error instanceof Response)) {
                      error = new Response(`Oups, une erreur est survenue lors de la récupération de la liste des logements.`, {status: 500});
                    }
                    reject(error);
                  })
          );
        },
      },
      {
        path: Routes.LOGEMENT,
        element: <LogementPage />,
        loader: async ({params}) => {
          return new Promise((resolve, reject) => fetch("/api/logements.json")
              .then(response => {
                if (!response.ok) {
                  throw new Response(response.statusText, {status: response.status});
                }
                return response.json() as Promise<ILogement[]>;
              })
              .then(logements => logements.find(logement => logement.id === params.id))
              .then(logement => {
                if (!logement) {
                  throw new Response(`Logement '${params.id}' non trouvé.`, {status: 404});
                }
                return logement;
              })
              .then(resolve)
              .catch(error => {
                if (!(error instanceof Response)) {
                  error = new Response(`Oups, une erreur est survenue lors de la récupération du logement '${params.id}'.`, {status: 500});
                }
                reject(error);
              })
          );
        },
      },
      {
        path: Routes.ABOUT,
        element: <AboutPage />,
      }
    ],
  }
]);

export const Router = () => (<RouterProvider router={router} />);
