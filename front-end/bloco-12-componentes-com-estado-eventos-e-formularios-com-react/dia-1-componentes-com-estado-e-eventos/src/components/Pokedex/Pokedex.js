import React from "react";
import Button from "../Button/Button";
import Pokemon from "../Pokemon/Pokemon";
import "./pokedex.css";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      filteredType: "all",
    };

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.filterTypePokemon = this.filterTypePokemon.bind(this);
    this.filterTypes = this.filterTypes.bind(this);
  }

  filterPokemon() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter((pokemon) => {
      if (filteredType === "all") return true;
      return pokemon.type === filteredType;
    });
  }

  nextPokemon(pokemons) {
    const { pokemonIndex } = this.state;
    
    if (pokemonIndex === pokemons.length - 1) {
      return this.setState({
        pokemonIndex: 0,
      });
    }
    return this.setState(({ pokemonIndex }) => ({
      pokemonIndex: pokemonIndex + 1,
    }));
  }

  filterTypePokemon(type) {
    this.setState({
      pokemonIndex: 0,
      filteredType: type,
    });
  }

  filterTypes() {
    const { pokemons } = this.props;

    return pokemons
      .map(({ type }) => type)
      .filter(
        (types, index, arrayTypes) => arrayTypes.indexOf(types) === index
      );
  }

  render() {
    const pokemons = this.filterPokemon();
    const pokemonsTypes = this.filterTypes();

    return (
      <section className="pokedex">
        <Button
          onClick={() => this.nextPokemon(pokemons)}
          className="pokedex-button btn btn-success"
          disabled={pokemons.length <= 1}
        >
          Proximo
        </Button>
        <Pokemon pokemon={pokemons[this.state.pokemonIndex]} />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterTypePokemon("all")}
            className="btn btn-info"
          >
            Todos
          </Button>
          {pokemonsTypes.map((type) => (
            <Button
              key={type}
              onClick={() => this.filterTypePokemon(type)}
              className={`btn ${ type }`}
            >
              {type}
            </Button>
          ))}
        </div>
      </section>
    );
  }
}

export default Pokedex;
