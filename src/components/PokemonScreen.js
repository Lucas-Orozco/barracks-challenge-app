import React, { useEffect, useState } from "react";

export const PokemonScreen = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    cargandoData();
  }, []);

  useEffect(() => {
      cargandoForm();
  }, []);
  const cargandoData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    const { results } = data;
    setPokemons(results);
  };

  const [select, setSelect] = useState({});
  const muestraSeleccion =(e) => {
    const resp = pokemons.filter(pokemon=>pokemon.name===e.target.value);
    setSelect(resp[0]);
  }


  const [form, setform] = useState();


    const cargandoForm = async () => {
      const response = await fetch(select.url);
      const data = await response.json();
      const { form } = data;
      console.log(form);
    };
    // console.log(form);
  return (
    <div >
      <select  className= 'select-container' onChange={(e)=>muestraSeleccion(e)}>
        {pokemons.map((pokemon, index) => (
          <option  key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
        <div>
          <img src={select.url} alt={select.name} />
        </div>
    </div>
  );
};
