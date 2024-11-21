import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Toolbar from "./components/Toolbar/toolbar.tsx";
import List from "./components/List/List.tsx";

import "./App.css";
import { Task } from "./models/task.ts";
import { useState } from "react";

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

function App() {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);

  const createTask = (name: string): void => {
    setTasks((old) => [...old, { name, isDone: false }]);
  };

  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <List tasks={tasks} />
      </main>
      <Footer createTask={createTask} />
    </>
  );
}

export default App;
