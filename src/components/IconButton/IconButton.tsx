import { ReactElement, SVGProps } from "react";

import clsx from "clsx";

import styles from "./IconButton.module.css";

export enum Shape {
  SQUARE = "square",
  CIRCLE = "circle",
}

type Props = {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  shape?: Shape;
};

export default function IconButton({
  icon,
  shape = Shape.SQUARE,
}: Props): ReactElement {
  return <button className={clsx(styles.button, styles[shape])}>{icon}</button>;
}
