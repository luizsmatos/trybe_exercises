import React from "react";
import PropTypes from 'prop-types';
import "./Pokemon.css";

class Pokemon extends React.Component {
  render() {
    const {
      pokemon: { name, type, averageWeight, image, moreInfo },
    } = this.props;
    return (
      <div className="content">
        <div className="infos-pokemon">
          <p className="namePokemon"><strong>Name: </strong>{name}</p>
          <p className="typePokemon"><strong>Type: </strong>{type}</p>
          <p className="averagePokemon">
            <strong>Average:</strong> {averageWeight.value}{averageWeight.measurementUnit}
          </p>
        </div>
        <a href={moreInfo} target="_blank" rel="noreferrer">
          <img src={image} alt={name} className="imgPokemon" />
        </a>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
