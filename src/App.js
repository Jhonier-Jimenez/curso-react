import { useState } from "react";
import PokemonForm from "./components/PokemonForm";
import PokemonInfo from "./components/PokemonInfo";
import "./App.css";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  const handleFormSubmit = (name) => {
    setPokemonName(name);
  };

  return (
    <div className="App">
      <h1>Pokémon Info</h1>
      <PokemonForm onSearch={handleFormSubmit} />
      <PokemonInfo pokemonName={pokemonName} />
    </div>
  );
}

export default App;
