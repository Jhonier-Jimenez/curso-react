import "./App.css";
import cars from "./data";

function App() {
  const [honda, tesla] = cars;

  const {
    coloursByPopularity: [hondaTopColour],
  } = honda;

  const {
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;

  const {
    coloursByPopularity: [teslaTopColour],
  } = tesla;

  const {
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;

  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React</p>
        <table>
          <tr>
            <th>Model</th>
            <th>Top Speed</th>
          </tr>
          <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
            {/* <td>{cars[1].colorsByPopularity[0]}</td> */}
          </tr>
          <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
