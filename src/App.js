import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";
import Home from "./Components/Home";
// import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <div className="App container">
        <NavbarComp />
        <Home />
      </div>
  );
}

export default App;
