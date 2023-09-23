import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("Constructor is called");
    console.log("----------------");
  }

  // componentWillMount() {
  //   console.log("componentWillMount is called");
  //   console.log("----------------");
  // }
  //DEPRECATED

  componentDidMount() {
    console.log("ComponentDidMount is called");
    console.log("----------------");
  }

  // componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps is called");
  //   console.log("----------------");
  // }
  //DEPRECATED

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    if (nextProps.parentBoleean) {
      console.log("shouldComponentUpdate? YES, RENDER");
      return true;
    }
    console.log("shouldComponentUpdate? NO, DO NOT RENDER");
    return false;
  }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate is called");
  // }
  //DEPRECATED

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate is called");
    console.log("----------------");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount is called");
    console.log("----------------");
  }

  incrementCount = () => {
    if (!this.props.parentBoleean) return;
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    console.log("Render is called");
    console.log("----------------");

    return (
      <div className="counter">
        <h1>Counter App</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        {console.log("PARENT BOOLEAN", this.props.parentBoleean)}
        {this.props.parentBoleean ? <p>Authorized</p> : <p>Unauthorized</p>}
      </div>
    );
  }
}

export default Counter;
