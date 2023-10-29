import { useFormInput } from "../Hooks/useFormInput";

const PokemonForm = ({ onSearch }) => {
  const pokemonName = useFormInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(pokemonName.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Pokémon name" {...pokemonName} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PokemonForm;
