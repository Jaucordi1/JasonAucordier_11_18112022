import classes    from "./Collapse.module.sass";
import {Arrow}    from "../icons/arrow/Arrow";
import classnames from "classnames";
import React      from "react";

export type CollapseProps = React.PropsWithChildren<React.HTMLProps<HTMLElement> & {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  header: React.ReactNode;
}>;
export const ControlledCollapse: React.FC<CollapseProps> = ({header, children, className, open, onOpen, onClose, ...props}) => {
  const direction = React.useMemo(() => open ? "top" : "bottom", [open]);

  return (
      <section {...props} className={classnames(classes.container, className, {[classes.open]: open})}>
        <header className={classes.header} onClick={open ? onClose : onOpen}>
          <p className={classes.title}>{header}</p>
          <Arrow direction={direction} className={classes.arrow} />
          {/*<Arrow direction={direction} />*/}
        </header>
        <article className={classes.content}>
          {children}
        </article>
      </section>
  );
};

const Collapse: React.FC<Omit<CollapseProps, "open" | "onOpen" | "onClose"> & Partial<Pick<CollapseProps, "onOpen" | "onClose">>> = (props) => {
  const {onOpen, onClose, ...collapseProps} = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = React.useCallback(() => {
    onOpen?.();
    setOpen(true);
  }, [onOpen]);
  const handleClose = React.useCallback(() => {
    onClose?.();
    setOpen(false);
  }, [onClose]);
  return <ControlledCollapse {...collapseProps} open={open} onOpen={handleOpen} onClose={handleClose} />;
};

export default Collapse;
