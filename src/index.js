import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Main from "./Main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <Main />;
  }
}

render(<App />, document.getElementById("root"));
