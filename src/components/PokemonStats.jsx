const PokemonStats = ({ stats }) => {
  return (
    <div>
      <h2>Base Stats:</h2>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonStats;
