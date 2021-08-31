import React from "react";
import "./Pokemon.css";

class Pokemon extends React.Component {
  render() {
    const pokemon = this.props.pokemon
    return (
      <div className="content">
        {console.log(pokemon)}
        <div className="infos-pokemon">
          <p className="namePokemon">{pokemon.name}</p>
          <p className="typePokemon">{pokemon.type}</p>
          <p className="averagePokemon">
            {pokemon.averageWeight.value}
            {pokemon.averageWeight.measurementUnit}
          </p>
        </div>
        <a href={pokemon.moreInfo}>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="imgPokemon"
          />
        </a>
      </div>
    );
  }
}

export default Pokemon;
