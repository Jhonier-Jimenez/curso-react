import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor is called");
  }

  componentDidMount() {
    console.log("ComponentDidMount is called");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate is called");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount is called");
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("Render is called");
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
