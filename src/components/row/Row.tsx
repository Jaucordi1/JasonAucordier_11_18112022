import styles                         from "./Row.module.sass";
import {Box, BoxProps, ComponentProp} from "../box/Box";
import classnames                     from "classnames";
import React                          from "react";

export function Row<C extends ComponentProp = "div">(props: BoxProps<C>) {
  const {className, ...rest} = props;
  return <Box {...rest} className={classnames(className, styles.container)} />;
}
