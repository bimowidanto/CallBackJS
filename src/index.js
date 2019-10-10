import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./styles.scss";

class App extends Component {
  state = {
    text: "text in here"
  };

  callFirstName = callBack => {
    setTimeout(() => {
      callBack("Bimo");
    }, 5000);
  };

  login = () => {
    this.callFirstName(result => {
      const first = result;
      const last = "Widanto";
      const name = first + last;
      this.setState({ text: name });
    });
  };

  render() {
    const { text } = this.state;
    const { login } = this;
    return (
      <div className="App">
        <button onClick={login}>Login</button>
        <div />
        <h2>{text}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
