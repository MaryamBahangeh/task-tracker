import "./App.css";
import IconButton, {
  Shape,
  Size,
} from "./components/IconButton/IconButton.tsx";
import MingcuteSearchLine from "./icons/MingcuteSearchLine.tsx";

function App() {
  return (
    <>
      <h1>Hello, friend!</h1>
      <IconButton icon={<MingcuteSearchLine />} shape={Shape.CIRCLE} />
      <IconButton
        icon={<MingcuteSearchLine />}
        shape={Shape.CIRCLE}
        size={Size.LARGE}
      />
    </>
  );
}

export default App;
