// import logo from './logo.svg';
import GetPokemon from './pokemon/getpokemon';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [pokemon, setPkm] = useState("");

  const getPkm = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/charizard").then((response) => response.json()).then((data) => {
      setPkm(data.name);
    });
  };

  return (
    <div className="App">
      <GetPokemon />
    </div>
  );
}

export default App;
