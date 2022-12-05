import classes       from "./Controls.module.sass";
import {Arrow}       from "../../icons/arrow/Arrow";
import React         from "react";

export type ControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
  showIndicator?: boolean;
  currentSlide: number;
  slidesCount: number;
};
export const Controls: React.FC<ControlsProps> = ({onPrevious, onNext, currentSlide, slidesCount, showIndicator}) => {
  return (
      <div className={classes.container}>
        <div onClick={onPrevious} className={classes.previous}>
          <Arrow direction="left" />
        </div>

        {showIndicator && (
            <div className={classes.indicator}>
              {currentSlide + 1}/{slidesCount}
            </div>
        )}

        <div onClick={onNext} className={classes.next}>
          <Arrow direction="right" />
        </div>
      </div>
  );
};
