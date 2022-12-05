import classes    from "./Star.module.sass";
import classnames from "classnames";
import React      from "react";

export type StarProps = {
  filled?: boolean;
};
export const Star: React.FC<StarProps> = ({filled}) => {
  return (
      <svg viewBox="0 0 30 30"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           className={classnames(classes.container, {[classes.filled]: filled})}>
        <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="currentColor" />
      </svg>
  );
};
