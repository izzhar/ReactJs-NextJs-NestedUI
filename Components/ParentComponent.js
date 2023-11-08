import React from "react";
import ChildComponent from "./ChildComponent";

const parentStyle = {
  border: "1px solid #000",
  padding: "10px",
};

const ParentComponent = () => {
  return (
    <div style={parentStyle}>
      <h1>Parent Component</h1>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
