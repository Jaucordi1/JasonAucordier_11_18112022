import classes       from "./AboutPage.module.sass";
import {useIsMobile} from "../../hooks/useIsMobile";
import React         from "react";

import type {ISlide} from "../../components/carousel";

const Carousel = React.lazy(() => import("../../components/carousel"));
const Collapse = React.lazy(() => import("../../components/collapse/Collapse"));

const AboutPage = () => {
  const isMobile = useIsMobile();

  const slides: ISlide[] = React.useMemo(() => [{
    image: process.env.PUBLIC_URL + (
        isMobile
            ? "/assets/banner-about-mobile.png"
            : "/assets/banner-about.png"
    ),
    imageAlt: "Photo de chaîne de montagne en arrière plan avec, en premier plan, le feuillage d'un sapin à gauche et un morceau de valée en bas à droite",
  }], [isMobile]);

  return (
      <div className={classes.container}>
        <Carousel className={classes.banner} slides={slides} dark dense />
        <div className={classes.content}>
          <Collapse header="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
            et toutes les informations sont régulièrement vérifiées par nos équipes.
          </Collapse>
          <Collapse header="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa.
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </Collapse>
          <Collapse header="Service">
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
            N'hésitez pas à nous contacter si vous avez la moindre question.
          </Collapse>
          <Collapse header="Sécurité">
            La sécurité est la priorité de Kasa.
            Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
            En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </Collapse>
        </div>
      </div>
  );
};

export default AboutPage;
