import React from "react";
import { container, button } from "./styles";
import { CounterDrillingProps } from "./types";

function Counter({ incrementCounter, decrementCounter }: CounterDrillingProps) {
  return (
    <div style={container}>
      <div style={button} onClick={decrementCounter}>
        -
      </div>
      <div style={button} onClick={incrementCounter}>
        +
      </div>
    </div>
  );
}

export default Counter;
