import CSS from "csstype";

const container: CSS.Properties = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const button: CSS.Properties = {
  width: "60px",
  height: "40px",
  backgroundColor: "#FEFE64",
  marginRight: "20px",
  display: "flex",
  border: "1.5px solid #000",
  boxShadow: "8px 8px 5px 0px rgba(0,0,0,0.75)",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "20px",
  userSelect: 'none'
};

export { container, button };
