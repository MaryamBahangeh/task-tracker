import "./App.css";
import Input from "./components/Input/Input.tsx";
import MingcuteSearchLine from "./icons/MingcuteSearchLine.tsx";

function App() {
  return (
    <>
      <h1>Hello, friend!</h1>
      <Input icon={<MingcuteSearchLine />} />
    </>
  );
}

export default App;
