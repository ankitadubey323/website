const reactTemplate = {
  name: "react",
  files: [
    {
      path: "index.html",
      content: `
<!DOCTYPE html>
<html>
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
      `
    },
    {
      path: "src/main.jsx",
      content: `
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
      `
    },
    {
      path: "src/App.jsx",
      content: `
export default function App() {
  return <h1>Hello React</h1>;
}
      `
    }
  ]
};

export default reactTemplate;
