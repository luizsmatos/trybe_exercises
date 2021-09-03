import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Pokedex from './components/Pokedex/Pokedex';
import pokemons from './data';


function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;