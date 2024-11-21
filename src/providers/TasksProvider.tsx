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
};

export const TasksContext = createContext<ContextValue>({
  tasks: [],
  createTask: () => {},
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

  return (
    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  );
}
