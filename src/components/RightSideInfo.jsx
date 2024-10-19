
const RightSideInfo = ({pokemonData}) => {
  return (
    <div className="md:w-1/2 md:pl-10 flex flex-col justify-center">
        <div className="mb-6">
          <h2 className="text-4xl font-semibold mb-4">Types:</h2>
          <div className="flex flex-wrap gap-3">
            {pokemonData.types.map((type) => (
              <span
                key={type.type.name}
                className={`bg-blue-600 rounded-full px-6 py-3 text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300`}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-4xl font-semibold mb-4">Moves:</h2>
          <ul className="list-disc list-inside">
            {pokemonData.moves.slice(0, 10).map((move) => (
              <li key={move.move.name} className="text-lg">{move.move.name}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-4xl font-semibold mb-4">Height:</h2>
          <p className="text-lg">{pokemonData.height} decimetres</p>
        </div>

        <div className="mb-6">
          <h2 className="text-4xl font-semibold mb-4">Weight:</h2>
          <p className="text-lg">{pokemonData.weight} hectograms</p>
        </div>

        <div className="mb-6">
          <h2 className="text-4xl font-semibold mb-4">Abilities:</h2>
          <ul className="list-disc list-inside">
            {pokemonData.abilities.map((ability) => (
              <li key={ability.ability.name} className="text-lg">{ability.ability.name}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-4xl font-semibold mb-4">Base Stats:</h2>
          <ul className="list-disc list-inside">
            {pokemonData.stats.map((stat) => (
              <li key={stat.stat.name} className="text-lg">
                {stat.stat.name}: <span className="font-bold">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default RightSideInfo