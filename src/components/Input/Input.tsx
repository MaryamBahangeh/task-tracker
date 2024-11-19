import { ComponentProps, ReactElement, SVGProps } from "react";

import clsx from "clsx";

import styles from "./Input.module.css";

type Props = Omit<ComponentProps<"input">, "className"> & {
  className?: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
};

export default function Input({
  className,
  icon,
  ...rest
}: Props): ReactElement {
  return (
    <div className={clsx(styles.box, className)}>
      <input {...rest} />
      {icon && <span className={styles.icon}>{icon}</span>}
    </div>
  );
}
