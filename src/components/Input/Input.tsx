import {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ReactElement,
  SVGProps,
} from "react";

import clsx from "clsx";

import styles from "./Input.module.css";

type Props = Omit<ComponentProps<"input">, "className"> & {
  className?: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
};

function Input(
  { className, icon, ...rest }: Props,
  ref?: ForwardedRef<HTMLInputElement>,
): ReactElement {
  return (
    <div className={clsx(styles.box, className)}>
      <input ref={ref} {...rest} />
      {icon && <span className={styles.icon}>{icon}</span>}
    </div>
  );
}

export default forwardRef(Input);
