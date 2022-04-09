import React, { Component } from "react";

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    result: ""
  };

  clear = () => {
    this.setState({
      n1: "",
      n2: "",
      result: ""
    });
  };

  dividir = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        result: n1 / n2
      });
    }
  };

  diminuir = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        result: n1 - n2
      });
    }
  };

  somar = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        result: n1 + n2
      });
    }
  };

  multiplicar = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        result: n1 * n2
      });
    }
  };

  handleChange2 = (e) => {
    this.setState({
      n2: Number(e.target.value)
    });
  };

  handleChange1 = (e) => {
    this.setState({
      n1: Number(e.target.value)
    });
  };

  let;

  render() {
    const { result, n1, n2 } = this.state;
    const { dividir, diminuir, somar, multiplicar, clear } = this;
    return (
      <div>
        <h1>Calculadora</h1>
        <div>
          <h2> {result} </h2>
          <input onChange={this.handleChange1} type="number" value={n1} />
          <input onChange={this.handleChange2} type="number" value={n2} />
        </div>
        <div>
          <button onClick={dividir}>/</button>
          <button onClick={diminuir}>-</button>
          <button onClick={somar}>+</button>
          <button onClick={multiplicar}>*</button>
          <button onClick={clear}>C</button>
        </div>
      </div>
    );
  }
}

export default App;
