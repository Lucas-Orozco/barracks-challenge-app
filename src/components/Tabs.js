import React, { useState } from "react";
import { NasaScreen } from "./NasaScreen";
import { PokemonScreen } from "./PokemonScreen";
export const Tabs = () => {
  const [tabs, setTabs] = useState("nasa");
  const abrirNasa =() => {
    setTabs("nasa");
  };
  const abrirPokemon = () => {
    setTabs("pokemon");
  };
  return (
    <div>
      <div className="tab">
        <button className={tabs==='nasa'?'tab-nasa':'tab-nasa tab-desactive'} onClick={abrirNasa}>
          Nasa
        </button>
        <button className={tabs==='pokemon'?'tab-pokemon':'tab-pokemon tab-desactive'} onClick={abrirPokemon}>
          Pokemon
        </button>
      </div>
      <div className='tab-contenedor'>{tabs === "nasa" ? <NasaScreen /> : <PokemonScreen />}</div>
    </div>
  );
};
