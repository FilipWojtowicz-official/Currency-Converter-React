import Logo from "./components/logo/Logo";
import Input from "./components/input/Input";
import DisplayCalculation from "./components/display.calculation/DisplayCalculation";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");

  return (
    <div className="app">
      <Logo></Logo>
      <Input onResultChange={setResult}></Input>
      <DisplayCalculation result={result}></DisplayCalculation>
    </div>
  );
};

export default App;
