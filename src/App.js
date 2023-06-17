import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Display } from "./Components/Display";
import { Button } from "./Components/Button";
import { Form } from "./Form";

function App() {
  let counter = 4; // cannot update data while it is changed
  const [countering, setCountering] = useState(0);
  const increase = () => {
    setCountering(countering + 1);
  };
  const decrease = () => {
    setCountering(countering - 1);
  };
  return (
    <div className="">
      <Display />
      <Form />
    </div>
  );
}

export default App;
