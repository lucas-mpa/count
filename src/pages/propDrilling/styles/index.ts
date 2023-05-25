import CSS from "csstype";

const container: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: "linear-gradient(34deg, #5C2C6D 0%, #6d02f7 66%)",
};

const title: CSS.Properties = {
  position: "absolute",
  top: "10%",
  fontSize: "60px",
  color: "#FFF",
  fontWeight: "bold",
};

const content: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
};

export { container, content, title };
