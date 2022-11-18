import React, {JSXElementConstructor} from "react";
import classnames                     from "classnames";
import styles                         from "./Box.module.sass";

export type ComponentProp = keyof JSX.IntrinsicElements | JSXElementConstructor<React.PropsWithChildren>;
type PropsForComponent<C extends ComponentProp> = React.PropsWithChildren<C extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[C]
    : C extends React.ComponentType<infer P>
        ? P
        : never>;

export type BoxProps<C extends ComponentProp> = PropsForComponent<C> & {
  component?: C;
}

export function Box<C extends ComponentProp = "div">(props: BoxProps<C>) {
  const {component, className, ...rest} = props;
  const Component = component || "div";

  return (
      <Component {...rest as React.ComponentProps<C>} className={classnames(styles.container, className)} />
  );
}
