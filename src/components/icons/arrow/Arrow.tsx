import classes      from "./Arrow.module.sass";
import type {Color} from "../../../styles";
import {Icon}       from "../Icon";
import classnames   from "classnames";
import React        from "react";

export type ArrowProps = {
  direction?: "left" | "right" | "top" | "bottom";
  color?: Color;
  className?: string;
}
export const Arrow: React.FC<ArrowProps> = (props) => {
  const {direction = "right", color = "white", className} = props;

  const rotation = React.useMemo(() => {
    switch (direction) {
      case "top":
        return 0;
      case "right":
        return 90;
      case "bottom":
        return 180;
      case "left":
        return 270;
    }
  }, [direction]);

  return (
      <Icon color={color} rotation={rotation}>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classnames(classes.container, className)}>
          <g clipPath="url(#clip0_8_233)">
            <path
                d="M26.8401 23.3467L29.2001 20.9733L16.0001 7.78665L2.80007 20.9867L5.16007 23.3467L16.0001 12.5067L26.8401 23.3467V23.3467Z"
                fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0_8_233">
              <rect width="32" height="32" fill="white" transform="translate(32) rotate(90)" />
            </clipPath>
          </defs>
        </svg>
      </Icon>
  );
};
