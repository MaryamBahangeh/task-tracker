import { ReactElement } from "react";

import IconButton, { Variant } from "../IconButton/IconButton.tsx";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import { Task } from "../../models/task.ts";

import styles from "./List.module.css";

type Props = {
  tasks: Task[];
};

export default function List({ tasks }: Props): ReactElement {
  return (
    <ul className={styles.list}>
      {tasks.map((task, index) => (
        <li key={index}>
          <label>
            <input type="checkbox" />
            <div className={styles.name}>{task.name}</div>
          </label>
          <div className={styles.actions}>
            <IconButton
              className={styles.edit}
              variant={Variant.GHOST}
              icon={<MingcuteEdit2Line />}
            />
            <IconButton
              className={styles.remove}
              variant={Variant.GHOST}
              icon={<MingcuteDelete2Line />}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
