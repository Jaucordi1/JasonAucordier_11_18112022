import classes    from "./Slide.module.sass";
import {ISlide}   from "../ISlide";
import classnames from "classnames";
import React      from "react";

export type SlideProps = {
  slide: ISlide;
  dark?: boolean;
  isCurrent?: boolean;
  isNext?: boolean;
  isPrevious?: boolean;
};
export const Slide: React.FC<SlideProps> = ({slide, isPrevious, isCurrent, isNext, dark}) => {
  const lazyLoaded = !isPrevious && !isCurrent && !isNext;
  return (
      <div key={slide.image} className={classnames(classes.slide, {
        [classes.current]: isCurrent,
        [classes.previous]: !isCurrent && isPrevious,
        [classes.next]: !isCurrent && isNext,
      })}>
        <img src={slide.image}
             loading={lazyLoaded ? "lazy" : "eager"}
             alt={slide.imageAlt || slide.title}
             className={classnames(classes.image, {
               [classes.darken]: dark
             })} />
        {slide.title && <p className={classes.title}>{slide.title}</p>}
      </div>
  );
};
