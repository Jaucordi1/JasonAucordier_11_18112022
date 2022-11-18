import {Layout}                                      from "./components/layout/Layout";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import React                                         from "react";

const ErrorPage = React.lazy(() => import("./pages/error/ErrorPage"));
const HomePage = React.lazy(() => import("./pages/home/HomePage"));
const LogementPage = React.lazy(() => import("./pages/logement/LogementPage"));
const AboutPage = React.lazy(() => import("./pages/about/AboutPage"));

export enum Routes {
  ROOT = "/",

  HOME = "",
  LOGEMENTS = "logements",
  LOGEMENT = "logement/:id",
  ABOUT = "about",
}

export const Root = () => {
  return (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.HOME,
        element: <HomePage />,
      },
      {
        path: Routes.LOGEMENT,
        element: <LogementPage />,
      },
      {
        path: Routes.ABOUT,
        element: <AboutPage />,
      }
    ],
  }
]);

export const Router = () => (<RouterProvider router={router} />);
