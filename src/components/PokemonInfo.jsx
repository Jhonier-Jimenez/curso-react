import { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
// import PokemonAbilities from "./PokemonAbilities";

const PokemonInfo = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null);

  const { data: generationData, loading } = useFetch(
    "https://pokeapi.co/api/v2/generation"
  );

  const { data: cats } = useFetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );

  console.log(cats);

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
    <div>
      {loading ? (
        <h1>LOADING..............</h1>
      ) : (
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
              <img
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name}
              />
              <p>Height: {pokemonData.height} decimetres</p>
              <p>Weight: {pokemonData.weight} hectograms</p>
              {/* {pokemonData.abilities && <PokemonAbilities />} */}
            </div>
          ) : (
            <p className="NoData">
              No Pokémon data available. Please enter a Pokémon name and submit
              the form.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
