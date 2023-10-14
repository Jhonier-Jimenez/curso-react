import { useState } from "react";

const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(pokemonName);
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
