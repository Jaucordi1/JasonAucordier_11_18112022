import classes from "./Carousel.module.sass";
import {useIsMobile} from "../../hooks/useIsMobile";
import {Controls} from "./controls/Controls";
import {Slide} from "./slide/Slide";
import {ISlide} from "./ISlide";
import classnames from "classnames";
import React from "react";

export type CarouselProps = React.HTMLProps<HTMLDivElement> & {
  showControls?: boolean | null;
  dark?: boolean;
  slides: ISlide[];
  dense?: boolean;
  previousSlide: number;
  currentSlide: number;
  nextSlide: number;
  onPrevious: () => void;
  onNext: () => void;
};
export const ControlledCarousel: React.FC<CarouselProps> = (props) => {
  const {
    slides,
    dense = false,
    previousSlide,
    currentSlide,
    nextSlide,
    onPrevious,
    onNext,
    className,
    showControls,
    dark,
    ...htmlProps
  } = props;
  const hasControls = showControls === null ? slides.length > 1 : showControls;
  const isMobile = useIsMobile();

  // Render
  return (
      <div {...htmlProps} className={classnames(classes.container, className, {[classes.dense]: dense})}>
        {hasControls && (
            <Controls currentSlide={currentSlide} slidesCount={slides.length} onPrevious={onPrevious} onNext={onNext}
                      showIndicator={!isMobile} />
        )}
        {slides.map((slide, index) => (
            <Slide key={index} slide={slide} isCurrent={currentSlide === index} isPrevious={previousSlide === index}
                   isNext={nextSlide === index} dark={dark} />
        ))}
      </div>
  );
};

type UncontrolledCarouselProps = Omit<CarouselProps, "previousSlide" | "nextSlide" | "currentSlide" | "onPrevious" | "onNext">;
const Carousel: React.FC<UncontrolledCarouselProps> = (props) => {
  const {slides, ...htmlProps} = props;

  // State
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Helpers
  const previousSlideIndex = React.useMemo(() => {
    if (currentSlide - 1 < 0) {
      return slides.length - 1;
    }
    return currentSlide - 1;
  }, [slides.length, currentSlide]);
  const nextSlideIndex = React.useMemo(() => {
    if (currentSlide + 1 >= slides.length) {
      return 0;
    }
    return currentSlide + 1;
  }, [slides.length, currentSlide]);

  // Handlers
  const handlePreviousSlide = React.useCallback(() => setCurrentSlide(previousSlideIndex), [previousSlideIndex]);
  const handleNextSlide = React.useCallback(() => setCurrentSlide(nextSlideIndex), [nextSlideIndex]);

  // Render
  return (
      <ControlledCarousel {...htmlProps} slides={slides} previousSlide={previousSlideIndex} currentSlide={currentSlide}
                          nextSlide={nextSlideIndex} onPrevious={handlePreviousSlide} onNext={handleNextSlide} />
  );
};

export default Carousel;
export type {ISlide};
