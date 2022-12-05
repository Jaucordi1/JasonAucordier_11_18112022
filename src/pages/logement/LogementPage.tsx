import classes         from "./LogementPage.module.sass";
import {useLoaderData} from "react-router-dom";
import React           from "react";

import type {ISlide}    from "../../components/carousel";
import type {ILogement} from "../../models/logement/ILogement";

const Tag = React.lazy(() => import("../../components/tag/Tag"));
const Carousel = React.lazy(() => import("../../components/carousel"));
const Notation = React.lazy(() => import("../../components/notation/Notation"));
const Collapse = React.lazy(() => import("../../components/collapse/Collapse"));

const LogementPage = () => {
  const logement = useLoaderData() as ILogement;

  const slides: ISlide[] = logement?.pictures.map((picture, index) => ({
    image: picture,
  })) || [];

  return (
      <div className={classes.container}>

        <Carousel className={classes.carousel} slides={slides} showControls={null} dense />

        <h1 className={classes.title}>{logement.title}</h1>

        <div className={classes.location}>{logement.location}</div>

        <div className={classes.tags}>{logement.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
        ))}</div>

        <div className={classes.notation}>
          <Notation value={parseInt(logement.rating) - 1} max={5} />
        </div>

        <div className={classes.host}>
          <div className={classes.name}>
            {logement.host.name}
          </div>
          <img src={logement.host.picture} alt={logement.host.name} className={classes.avatar} />
        </div>

        <div className={classes.content}>
          <Collapse header="Description" className={classes.description}>
            {logement.description}
          </Collapse>

          <Collapse header="Équipements" className={classes.equipement}>
            {logement.equipments.map((equipment, index) => (
                <p key={index}>{equipment}</p>
            ))}
          </Collapse>
        </div>

      </div>
  );
};

export default LogementPage;
