import classes                 from "./Link.module.sass";
import {NavLink, NavLinkProps} from "react-router-dom";
import classnames              from "classnames";
import React                   from "react";

type LinkProps = NavLinkProps & { className?: string };
const Link: React.FC<LinkProps> = ({className, ...props}) => {
  return (
      <NavLink {...props} className={classnames(classes.container, className)} />
  );
};

export default Link;
