import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import pokemons from "../../data";
import "./Pokedex.css";

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title"> Pokedex </h1>
        <div className="Pokedex">
          {pokemons.map((pokemon) => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />;
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
