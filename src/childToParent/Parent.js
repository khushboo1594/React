import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [dataFromChild, setDataFromChild] = useState("");
  const pullDataFromChild = (data) => {
    setDataFromChild(data);
  };
  return (
    <div>
      <h1> Parent - Data from child - {dataFromChild}</h1>
      <Child pullDataFromChild={pullDataFromChild} />
    </div>
  );
};

export default Parent;
