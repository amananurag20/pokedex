import { useLocation, useParams } from "react-router-dom";
import LeftSideInfo from "../components/LeftSideInfo";
import RightSideInfo from "../components/RightSideInfo";

const PokemonInfo = () => {
  const { name } = useParams();
  const { state } = useLocation();
  const pokemonData = state?.pokemonData;

  if (!pokemonData) {
    return <div>No Pokémon data available.</div>; 
  }

  return (
    <div className={`flex flex-col md:flex-row min-h-screen max-w-full mx-auto p-10 rounded-lg shadow-lg bg-gray-900 text-white`}>
      {/* Left Side */}
      <LeftSideInfo pokemonData={pokemonData} name={name} />
      {/* Right Side */}
      <RightSideInfo pokemonData={pokemonData} />
    </div>
  );
  
};

export default PokemonInfo;
