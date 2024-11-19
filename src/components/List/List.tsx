import { ReactElement } from "react";

import IconButton from "../IconButton/IconButton.tsx";

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
          <input type="checkbox" />
          <div className={styles.name}>{task.name}</div>
          <div className={styles.actions}>
            <IconButton icon={<MingcuteEdit2Line />} />
            <IconButton icon={<MingcuteDelete2Line />} />
          </div>
        </li>
      ))}
    </ul>
  );
}
