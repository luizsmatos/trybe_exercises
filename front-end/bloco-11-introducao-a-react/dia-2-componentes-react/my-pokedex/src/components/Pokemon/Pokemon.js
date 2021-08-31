import React from "react";
import "./Pokemon.css";

class Pokemon extends React.Component {
  render() {
    const {
      pokemon: { name, type, averageWeight, image, moreInfo },
    } = this.props;
    return (
      <div className="content">
        <div className="infos-pokemon">
          <p className="namePokemon">{name}</p>
          <p className="typePokemon">{type}</p>
          <p className="averagePokemon">
            {averageWeight.value}
            {averageWeight.measurementUnit}
          </p>
        </div>
        <a href={moreInfo} target="_blank" rel="noreferrer">
          <img src={image} alt={name} className="imgPokemon" />
        </a>
      </div>
    );
  }
}

export default Pokemon;
