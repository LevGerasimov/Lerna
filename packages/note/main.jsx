import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "../components/index.jsx";

const App = () => {
  return (
    <div>
      <h1>Note App</h1>
      <Button>Click me</Button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);