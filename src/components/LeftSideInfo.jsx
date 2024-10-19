

const LeftSideInfo = ({pokemonData,name}) => {
  return (
    <div className="md:w-1/2 flex flex-col items-center mb-6 md:mb-0">
        {pokemonData.sprites && (
          <img
            className="w-full h-auto max-h-[400px] object-contain" 
            src={pokemonData.sprites.other['official-artwork'].front_default}
            alt={`${name} official artwork`}
          />
        )}
        <h1 className="text-6xl font-bold text-center mt-4 capitalize">{name}</h1>
        
        
        <img
          className="w-[200px]  mt-16"
          src="https://i.pinimg.com/originals/9d/48/ad/9d48ad1be2995e27e49ced3266785785.png"
          alt="Pokéball"
        />
      </div>
  )
}

export default LeftSideInfo