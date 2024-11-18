import { ReactElement, SVGProps } from "react";

import styles from "./Input.module.css";

type Props = {
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
};

export default function Input({ icon }: Props): ReactElement {
  return (
    <div className={styles.box}>
      <input />
      {icon && <span className={styles.icon}>{icon}</span>}
    </div>
  );
}
