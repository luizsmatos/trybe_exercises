import React from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import pokemons from "./data";
import "./Pokedex.css";

function Pokedex() {
  return (
    <div className="Pokedex">
      {pokemons.map((pokemon) => {
        return <Pokemon key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default Pokedex;
