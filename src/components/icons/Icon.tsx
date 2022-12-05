import classes    from "./Icon.module.sass";
import classnames from "classnames";
import React      from "react";
import {Color}    from "../../styles";

export type IconProps = React.PropsWithChildren<{
  color?: Color;
  rotation?: number;
}>;
export const Icon: React.FC<IconProps> = ({color, rotation, children}) => {
  return (
      <span className={classnames(classes.container, {
        [classes.primary]: color === "primary",
        [classes.secondary]: color === "secondary",
        [classes.success]: color === "success",
        [classes.warning]: color === "warning",
        [classes.error]: color === "error",
        [classes.white]: color === "white",
        [classes.black]: color === "black",
        [classes.grey]: color === "grey",
      })} style={{
        transform: `rotate(${rotation}deg)`,
      }}>
        {children}
      </span>
  );
};
