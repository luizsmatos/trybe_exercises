import React from 'react';
import './pokemon.css'

class Pokemon extends React.Component {
    render() {
        
        const { pokemon: { name, type, averageWeight, image } } = this.props;
        return (
            <div className="pokemon">
                <div className="pokemon-infos">
                    <span> {name} </span>
                    <span className={`type ${ type }`} > {type} </span>
                    <span> {`Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</span>
                </div>
                <img src={image} alt={`${name} sprite`} className="pokemon-img" />
            </div>
        );
    }
}

export default Pokemon;