import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    {" "}
    <h1>JSX H1 Heading</h1>
    <ul>
      {" "}
      Hundsband's todolist
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </div>,

  document.getElementById("root")
);
