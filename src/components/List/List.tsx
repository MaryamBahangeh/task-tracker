import { ReactElement, useContext } from "react";

import { TasksContext } from "../../providers/TasksProvider.tsx";

import IconButton, { Variant } from "../IconButton/IconButton.tsx";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import styles from "./List.module.css";

export default function List(): ReactElement {
  const { tasks, toggleIsDone } = useContext(TasksContext);

  return (
    <ul className={styles.list}>
      {tasks.map((task, index) => (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={(e) => toggleIsDone(index, e.target.checked)}
            />
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
