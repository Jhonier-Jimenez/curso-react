import "./App.css";

const date = new Date();

function App() {
  console.log(date);

  let currentTime = date.getHours();

  let saludo;

  //currentTime = 22;

  if (currentTime < 12) {
    saludo = "Good morning";
  } else if (currentTime < 18) {
    saludo = "Good afternoon";
  } else {
    saludo = "Good night";
  }

  console.log(currentTime);
  return (
    <>
      <div className="heading">
        <header className="App-header">
          <p>{saludo}</p>
        </header>
      </div>
    </>
  );
}

export default App;
