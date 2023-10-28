// import { useState } from "react";

import { useFormInput } from "../Hooks/useFormInput";

const PokemonForm = ({ onSearch }) => {
  // const [pokemonName, setPokemonName] = useState("");

  const pokemonName = useFormInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(pokemonName);
  };

  // const handleOnChange = (event) => {
  //   setPokemonName(event.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Pokémon name" {...pokemonName} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PokemonForm;
