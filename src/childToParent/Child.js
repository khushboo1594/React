import React from "react";

const Child = ({ pullDataFromChild }) => {
  pullDataFromChild("Hello I am child");
  return (
    <div>
      <h1>Child</h1>
    </div>
  );
};

export default Child;
