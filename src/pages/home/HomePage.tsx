import classes         from "./HomePage.module.sass";
import {useIsMobile}   from "../../hooks/useIsMobile";
import {Routes}        from "../../Router";
import {useLoaderData} from "react-router-dom";
import React           from "react";

import type {ILogement} from "../../models/logement/ILogement";

const Link = React.lazy(() => import("../../components/link/Link"));
const Carousel = React.lazy(() => import("../../components/carousel"));
const LogementCard = React.lazy(() => import("../../components/logements/Card"));

const HomePage = () => {
  const isMobile = useIsMobile();
  const logements = useLoaderData() as ILogement[];

  const slides = [
    {
      title: "Chez vous, partout et ailleurs",
      image: `/assets/banner${isMobile ? "-mobile" : ""}.png`,
    }
  ];

  return (
      <main id="home-page" className={classes.container}>
        <Carousel slides={slides} showControls={false} className={classes.banner} dark />

        {logements && (
            <section id="logements-grid" className={classes.locationCards}>
              {logements.map((logement, index) => (
                  <Link key={index} to={Routes.LOGEMENT.replace(":id", logement.id)} className={classes.card}>
                    <LogementCard logement={logement} />
                  </Link>
              ))}
            </section>
        )}
      </main>
  );
};

export default HomePage;
