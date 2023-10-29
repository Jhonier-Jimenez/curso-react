const PokemonAbilities = ({ abilities }) => {
  return (
    <div>
      <h2>Abilities:</h2>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonAbilities;
