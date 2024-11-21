import { ReactElement, useContext, useMemo } from "react";

import { TasksContext } from "../../providers/TasksProvider.tsx";

import IconButton, { Variant } from "../IconButton/IconButton.tsx";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import styles from "./List.module.css";
import { Filters } from "../../App.tsx";

type Props = {
  filters: Filters;
};

export default function List({ filters }: Props): ReactElement {
  const { tasks, toggleIsDone } = useContext(TasksContext);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (!filters.name) {
        return true;
      }

      return task.name.toLowerCase().includes(filters.name.toLowerCase());
    });
  }, [filters]);

  return (
    <ul className={styles.list}>
      {filteredTasks.map((task, index) => (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={(e) => toggleIsDone(task.id, e.target.checked)}
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
