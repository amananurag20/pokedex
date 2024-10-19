import { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import Shimmer from "../components/Shimmer";

const HomePage = () => {
  const [pokeData, setPokeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Loading state

  const getPokeData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=500"
      );
      const data = await response.json();
      setPokeData(data.results);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getPokeData();
  }, []);

  const filteredPokeData = pokeData.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 drop-shadow-lg uppercase tracking-wide flex items-center justify-center">
        Pokémon Gallery
        <img
          className="w-20 h-20 ml-5" 
          src="https://i.pinimg.com/originals/9d/48/ad/9d48ad1be2995e27e49ced3266785785.png"
          alt="Pokéball"
        />
      </h1>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for a Pokémon..."
          className="border border-gray-300 rounded-lg p-2 w-1/2 md:w-1/4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
       
      <div className="flex flex-wrap justify-center gap-8">
        {loading ? (
          Array.from({ length: 12 }).map((_, index) => (
            <Shimmer key={index} />
          ))
        ) : (
          filteredPokeData.map((poke) => (
            <PokeCard name={poke.name} key={poke.name} setLoading={setLoading} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
