import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./styles.css"

const GetPokemon = () => {
  const [pokemon, setPkm] = useState([]);

  const getKanto = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => response.json())
      .then((data) => {
        setPkm(data.results);
      });
  };

  // for (let key in pokemon) {
  //   console.log(`${key}: ${pokemon[key]}`);
  // }
  for (let pkm of pokemon) {
    console.log(pkm.name);
  }

  return (
    <div className="getpkm">
      <Button variant="contained" onClick={getKanto}>Choose Your Pokemon!</Button>
      <br></br>
      {/* <strong>{pokemon}</strong> */}
    </div>
  )
};

export default GetPokemon;
