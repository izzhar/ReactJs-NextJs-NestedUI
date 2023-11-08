import React from "react";
import SubChildComponent from "./SubChildComponent";

const ChildComponent = () => {
  return (
    <div>
      <h2>Child Component</h2>
      <SubChildComponent />
    </div>
  );
};

export default ChildComponent;
