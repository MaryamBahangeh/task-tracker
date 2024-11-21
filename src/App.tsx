import TasksProvider from "./providers/TasksProvider.tsx";

import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Toolbar from "./components/Toolbar/toolbar.tsx";
import List from "./components/List/List.tsx";

import "./App.css";
import { useState } from "react";

export type Filters = {
  name: string;
};

function App() {
  const [filters, setFilters] = useState<Filters>({ name: "" });

  return (
    <TasksProvider>
      <Header />
      <main>
        <Toolbar filters={filters} setFilters={setFilters} />
        <List filters={filters} />
      </main>
      <Footer />
    </TasksProvider>
  );
}

export default App;
