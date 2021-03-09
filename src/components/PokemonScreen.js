import React, { useEffect, useState } from "react";

export const PokemonScreen = () => {
  const [pokemons, setPokemons] = useState([
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
  ]);

  useEffect(() => {
    cargandoData();
  }, []);

  const cargandoData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    const { results } = data;
    setPokemons(results);
  };
  // https://pokeapi.co/api/v2/pokemon-form/1/

  const [select, setSelect] = useState({
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  });

  const [imgPokemon, setImgPokemon] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
  const muestraSeleccion = (e) => {
    const resp = pokemons.filter((pokemon) => pokemon.name === e.target.value);
    setSelect(resp[0]);
    loadData(resp[0].url); 
  };

  const loadData = async (url) => {
    const respPokemon = await fetch(url);
    const data = await respPokemon.json();
    loadImgPokemon(data.id)
  };

  // console.log(idPokemon);
  const loadImgPokemon = async(id)=>{
     const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`);
     const data = await response.json();
     setImgPokemon(data.sprites.front_default);
  }
  
  return (
    <div>
      <select
        className="select-container"
        onChange={(e) => muestraSeleccion(e)}
      >
        {pokemons.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <div>
        <img className='container-pokemon' src={imgPokemon} alt={select.name} />
      </div>
    </div>
  );
};
