import { ReactElement, SVGProps } from "react";

import clsx from "clsx";

import styles from "./IconButton.module.css";

export enum Shape {
  SQUARE = "square",
  CIRCLE = "circle",
}

export enum Size {
  MEDIUM = "medium",
  LARGE = "large",
}

type Props = {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  shape?: Shape;
  size?: Size;
};

export default function IconButton({
  icon,
  shape = Shape.SQUARE,
  size = Size.MEDIUM,
}: Props): ReactElement {
  return (
    <button className={clsx(styles.button, styles[shape], styles[size])}>
      {icon}
    </button>
  );
}
