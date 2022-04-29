// import logo from './logo.svg';
import GetPokemon from './components/pokemon/getpokemon';
import ResponsiveAppBar from './components/pokemon/responsiveappbar';
import './App.css';
import React, { useState } from 'react';

function App() {

  return (
    <div className="App">
      <ResponsiveAppBar />
      <GetPokemon />
    </div>
  );
}

export default App;
