import React from "react";
import ReactDOM from "react-dom/client";

// React Core method for creating a React element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React JS!"
);

console.log(heading);

// Crating a React Element using JSX

const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);