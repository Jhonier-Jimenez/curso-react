import { useState } from "react";

const PokemonForm = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(pokemonName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Pokémon name"
        value={pokemonName}
        onChange={(event) => setPokemonName(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PokemonForm;
