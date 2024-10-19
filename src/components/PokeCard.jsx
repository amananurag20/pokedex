import { useState, useEffect } from "react";
import { typeColors } from "../utils/constant";
import { Link } from "react-router-dom";

const PokeCard = ({ name, setLoading}) => {
  const [data, setData] = useState({});
 

  const getPokemonInfo = async (pokemonName) => {
    try {
     
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const json = await response.json();
      setData(json);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    getPokemonInfo(name);
  }, [name]);

  
  const firstType = data?.types?.[0]?.type?.name;
  const bgColor = typeColors[firstType]?.bg || "from-gray-700 to-gray-900"; 
  const hoverColor = typeColors[firstType]?.hover || "hover:from-gray-600 hover:to-gray-800";

  return (
    <Link to={`/pokemon/${name}`} state={{ pokemonData: data }}>
      <div className={`rounded-lg shadow-lg p-8 max-w-sm mx-auto bg-gradient-to-br ${bgColor} ${hoverColor} hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer`}>
        {data?.sprites?.other?.['official-artwork']?.front_default && (
          <img
            className="w-48 h-48 mx-auto mb-6"
            src={data.sprites.other['official-artwork'].front_default}
            alt={`${name} official artwork`}
          />
        )}
        <h1 className="text-3xl font-bold text-center mb-4 text-white capitalize">{name}</h1>
        <h2 className="text-center">
          {data?.types?.map((type) => (
            <span key={type.type.name} className="inline-block bg-black rounded-full px-4 py-2 text-lg font-semibold text-white mx-2 shadow-md">
              {type.type.name}
            </span>
          ))}
        </h2>
      </div>
    </Link>
  );
};

export default PokeCard;
