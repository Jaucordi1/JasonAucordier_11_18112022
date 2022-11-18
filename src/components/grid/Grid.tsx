import React                          from "react";
import styles                         from "./Grid.module.sass";
import {Box, BoxProps, ComponentProp} from "../box/Box";
import classnames                     from "classnames";

export type GridProps<C extends ComponentProp> = BoxProps<C> & {
  areasTemplate: string[];
}
export function Grid<C extends ComponentProp>(props: GridProps<C>) {
  const {areasTemplate, style, className, ...rest} = props;

  const styleProp: React.CSSProperties = {
    ...style,
    gridTemplateAreas: areasTemplate.map((area: string) => `"${area}"`).join(" "),
  };

  return (
      <Box {...rest} className={classnames(className, styles.container)} style={styleProp} />
  );
}
