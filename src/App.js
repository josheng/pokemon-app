// import logo from './logo.svg';
import GetPokemon from './components/pokemon/getpokemon';
import ResponsiveAppBar from './components/pokemon/responsiveappbar';
import './App.css';
import React, { useState } from 'react';
import Container from "@mui/material/Container";

function App() {

  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <GetPokemon />
      </Container>
    </div>
  );
}

export default App;
