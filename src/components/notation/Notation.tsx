import classes from "./Notation.module.sass";
import {Star}  from "./star/Star";
import React   from "react";

type NotationProps = {
  value: number;
  max: number;
};
const Notation: React.FC<NotationProps> = ({max, value}) => {
  return (
      <div className={classes.container}>
        {new Array(max).fill(null).map((_, index) => (
            <Star key={index} filled={index <= value} />
        ))}
      </div>
  );
};

export default Notation;
