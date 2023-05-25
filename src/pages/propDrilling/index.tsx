import "../../app/globals.css";
import React, { useState } from "react";
import Viewer from "@/components/ViewerDrilling";
import Counter from "@/components/CounterDrilling";
import { container, content, title } from "./styles";

const propDrilling: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((counter) => counter + 1);
  };

  const decrementCounter = () => {
    setCounter((counter) => (counter !== 0 ? counter - 1 : counter));
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div style={container}>
      <span style={title}>Prop Drilling</span>
      <div style={content}>
        <Counter
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
        />
        <Viewer counter={counter} resetCounter={resetCounter} />
      </div>
    </div>
  );
};

export default propDrilling;
