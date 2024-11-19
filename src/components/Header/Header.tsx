import { ReactElement } from "react";

import styles from "./Header.module.css";

export default function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <h1>Task Tracker</h1>
    </header>
  );
}
