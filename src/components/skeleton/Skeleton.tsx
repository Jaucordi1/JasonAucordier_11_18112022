import styles from "./Skeleton.module.sass";
import classnames from "classnames";
import React from "react";

export type SkeletonProps = {
  variant?: "text" | "rect" | "circle";
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};
export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const {variant = "rect", width = "available", height = "auto", className, style, children} = props;

  const variantClassName = React.useMemo(() => {
    switch (variant) {
      case "text":
        return styles.text;
      case "rect":
        return styles.rect;
      case "circle":
        return styles.circle;
    }
  }, [variant]);

  const duration = Math.random()

  return (
      <div style={{...style, width, height, animationDelay: `${duration}s`}} className={classnames(className, styles.container, variantClassName)}>
        {children}
      </div>
  );
};
