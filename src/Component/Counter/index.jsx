import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {
  state = {
    counter: 0,
  };
  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => {
      if (prevState.counter > 0) {
        return {
          counter: prevState.counter - 1,
        };
      }
    });
  };
  render() {
    return (
      <section className="counter">
        <button onClick={this.increment} className="second-btn">
          +
        </button>
        <button onClick={this.decrement} className="first-btn">
          -
        </button>
        <span>{this.state.counter}</span>
      </section>
    );
  }
}