import CSS from "csstype";

const container: CSS.Properties = {
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const countViewer: CSS.Properties = {
  width: "100px",
  height: "80px",
  backgroundColor: "#FEFE64",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
  borderRadius: "5px",
  border: "1.5px solid #000",
  boxShadow: "8px 8px 5px 0px rgba(0,0,0,0.75)",
  userSelect: "none",
};

const resetButton: CSS.Properties = {
  marginTop: "20px",
  backgroundColor: "#FEFE64",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
  fontSize: "20px",
  border: "1px solid #000",
  boxShadow: "2px 2px 0px rgba(0,0,0)",
  cursor: "pointer",
  userSelect: "none",
};

export { container, countViewer, resetButton };
