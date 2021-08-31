import React from "react";
import "./Pokemon.css";

class Pokemon extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="infos-pokemon">
          <p className="namePokemon">{this.props.name}</p>
          <p className="typePokemon">{this.props.type}</p>
          <p className="averagePokemon">
            {this.props.averageWeigth.value}{" "}
            {this.props.averageWeigth.measurementUnit}
          </p>
        </div>
        <img
          src={this.props.name}
          alt={this.props.name}
          className="imgPokemon"
        />
      </div>
    );
  }
}

export default Pokemon;
