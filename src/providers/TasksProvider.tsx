import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react";
import { Task } from "../models/task.ts";

type ContextValue = {
  tasks: Task[];
  createTask: (name: string) => void;
  toggleIsDone: (index: number, isDone: boolean) => void;
};

export const TasksContext = createContext<ContextValue>({
  tasks: [],
  createTask: () => {},
  toggleIsDone: () => {},
});

const DEFAULT_TASKS: Task[] = [
  {
    name: "Note #1",
    isDone: false,
  },
  {
    name: "Note #2",
    isDone: true,
  },
  {
    name: "Note #3",
    isDone: false,
  },
];

type Props = PropsWithChildren;

export default function TasksProvider({ children }: Props): ReactElement {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);

  const createTask = (name: string): void => {
    setTasks((old) => [...old, { name, isDone: false }]);
  };

  const toggleIsDone = (index: number, isDone: boolean): void => {
    setTasks((old) =>
      old.map((x, i) => {
        if (i === index) {
          return { ...x, isDone };
        }

        return x;
      }),
    );
  };

  return (
    <TasksContext.Provider value={{ tasks, createTask, toggleIsDone }}>
      {children}
    </TasksContext.Provider>
  );
}
