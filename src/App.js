import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title={"Github finder"} />
      </div>
    );
  }
}

export default App;
