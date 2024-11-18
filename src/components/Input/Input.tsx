import { ReactElement } from "react";

import styles from "./Input.module.css";

export default function Input(): ReactElement {
  return <input className={styles.input} />;
}
