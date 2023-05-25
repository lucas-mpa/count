import React from "react";
import { container, countViewer, resetButton } from "./styles";
import { ViewerDrillingProps } from "./types";

function Viewer({ counter, resetCounter }: ViewerDrillingProps) {
  return (
    <div style={container}>
      <div style={countViewer}>{counter}</div>
      <div
        style={resetButton}
        onClick={() => resetCounter()}
      >
        ⟳
      </div>
    </div>
  );
}

export default Viewer;
