import PokemonAbilities from "./PokemonAbilities";
import PokemonStats from "./PokemonStats";
import { useFetch } from "../Hooks/useFetch";
import useFetchParam from "../Hooks/useFetchParam";

const PokemonInfo = ({ pokemonName }) => {
  const { data: generationData } = useFetch(
    "https://pokeapi.co/api/v2/generation"
  );

  const pokemonData = useFetchParam(
    "https://pokeapi.co/api/v2/pokemon/",
    pokemonName
  );
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
        <div className="pokemonData">
          <div className="dataContainer">
            <h2>{pokemonData.name}</h2>
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
            />
            <p>Height: {pokemonData.height} decimetres</p>
            <p>Weight: {pokemonData.weight} hectograms</p>
          </div>
          <div className="dataContainer">
            {pokemonData.abilities && (
              <PokemonAbilities abilities={pokemonData.abilities} />
            )}

            {pokemonData.stats && <PokemonStats stats={pokemonData.stats} />}
          </div>
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
