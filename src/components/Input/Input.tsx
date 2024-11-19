import { ReactElement, SVGProps } from "react";

import clsx from "clsx";

import styles from "./Input.module.css";

type Props = {
  className?: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
};

export default function Input({ className, icon }: Props): ReactElement {
  return (
    <div className={clsx(styles.box, className)}>
      <input />
      {icon && <span className={styles.icon}>{icon}</span>}
    </div>
  );
}
