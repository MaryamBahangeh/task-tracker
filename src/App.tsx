import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Toolbar from "./components/Toolbar/toolbar.tsx";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
      </main>
      <Footer />
    </>
  );
}

export default App;
