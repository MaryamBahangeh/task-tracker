import TasksProvider from "./providers/TasksProvider.tsx";

import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Toolbar from "./components/Toolbar/toolbar.tsx";
import List from "./components/List/List.tsx";

import "./App.css";

function App() {
  return (
    <TasksProvider>
      <Header />
      <main>
        <Toolbar />
        <List />
      </main>
      <Footer />
    </TasksProvider>
  );
}

export default App;
