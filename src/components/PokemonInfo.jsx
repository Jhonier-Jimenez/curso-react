import { useEffect, useState } from "react";

const PokemonInfo = ({ pokemonName }) => {
  const [generationData, setGenerationData] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/generation")
      .then((response) => response.json())
      .then((data) => setGenerationData(data));
  }, []);

  useEffect(() => {
    if (pokemonName) {
      fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.trim().toLowerCase()}`
      )
        .then((response) => response.json())
        .then((data) => {
          setPokemonData(data);
          console.log(data);
        });
    }
  }, [pokemonName]);

  return (
    <div className="PokemonInfo">
      <div>
        {generationData && (
          <div>
            <h2>Generation Names:</h2>
            <ul>
              {generationData.results.map((generation) => (
                <li key={generation.name}>{generation.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {pokemonData ? (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Height: {pokemonData.height} decimetres</p>
          <p>Weight: {pokemonData.weight} hectograms</p>
        </div>
      ) : (
        <p className="NoData">
          No Pokémon data available. Please enter a Pokémon name and submit the
          form.
        </p>
      )}
    </div>
  );
};

export default PokemonInfo;
