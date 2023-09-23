import React from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      parentBoleean: false,
    };

    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
    this.setParentBoleean = () =>
      this.setState({ parentBoleean: !this.state.parentBoleean });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Learn React</p>
          <button onClick={this.mountCounter} disabled={this.state.mount}>
            Mount counter
          </button>
          <button onClick={this.unmountCounter} disabled={!this.state.mount}>
            Unmount counter
          </button>
          <button onClick={this.setParentBoleean}>Change Parent Prop</button>
          {this.state.mount ? (
            <Counter parentBoleean={this.state.parentBoleean} />
          ) : null}
        </header>
      </div>
    );
  }
}

export default App;
