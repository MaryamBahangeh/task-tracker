import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from "react";

import { v4 as uuidv4 } from "uuid";

import { Task } from "../models/task.ts";

type ContextValue = {
  tasks: Task[];
  createTask: (name: string) => void;
  toggleIsDone: (id: string, isDone: boolean) => void;
};

export const TasksContext = createContext<ContextValue>({
  tasks: [],
  createTask: () => {},
  toggleIsDone: () => {},
});

type Props = PropsWithChildren;

const LOCAL_STORAGE_KEY = "tasks";

export default function TasksProvider({ children }: Props): ReactElement {
  const [tasks, setTasks] = useState<Task[]>((): Task[] => {
    const content = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!content) {
      return [];
    }

    return JSON.parse(content);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (name: string): void => {
    setTasks((old) => [...old, { id: uuidv4(), name, isDone: false }]);
  };

  const toggleIsDone = (id: string, isDone: boolean): void => {
    setTasks((old) =>
      old.map((x) => {
        if (x.id === id) {
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
