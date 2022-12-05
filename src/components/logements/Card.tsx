import classes from "./Card.module.sass";
import React   from "react";

import type {ILogement} from "../../models/logement/ILogement";

type LogementCardProps = {
  logement: ILogement;
}

const LogementCard: React.FC<LogementCardProps> = ({logement}) => {
  return (
      <article id={`logement-${logement.id}`} className={classes.container} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, .5)), url('${logement.cover}')`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}>
        {logement.title}
      </article>
  );
};

export default LogementCard;
