import classes from "./Tag.module.sass";
import React   from "react";

const Tag: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
      <span className={classes.container}>
        {children}
      </span>
  );
};

export default Tag;
