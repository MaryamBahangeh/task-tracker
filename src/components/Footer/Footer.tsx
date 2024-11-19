import { ReactElement } from "react";

import IconButton, { Shape, Size } from "../IconButton/IconButton.tsx";
import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import styles from "./Footer.module.css";

export default function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <IconButton
        icon={<MingcuteAddLine />}
        shape={Shape.CIRCLE}
        size={Size.LARGE}
      />
    </footer>
  );
}
