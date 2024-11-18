import "./App.css";
import Select from "./components/Select/Select.tsx";

function App() {
  return (
    <>
      <h1>Hello, friend!</h1>
      <Select options={[{ value: 23, label: "bijan" }]} />
    </>
  );
}

export default App;
