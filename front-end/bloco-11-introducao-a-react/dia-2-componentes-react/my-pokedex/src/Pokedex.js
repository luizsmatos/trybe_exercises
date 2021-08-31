import React from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import pokemons from "./data";
import "./Pokedex.css";

function Pokedex() {
  return (
    <div>
      <h1 className = 'title'> Pokedex </h1>
      <div className="Pokedex">
        {pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
}

export default Pokedex;
