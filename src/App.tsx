import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Toolbar from "./components/Toolbar/toolbar.tsx";
import List from "./components/List/List.tsx";

import "./App.css";
import { Task } from "./models/task.ts";

const tasks: Task[] = [
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
  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <List tasks={tasks} />
      </main>
      <Footer />
    </>
  );
}

export default App;
