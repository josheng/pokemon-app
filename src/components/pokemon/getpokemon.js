import React, { useState } from "react";
import Button from "@mui/material/Button";

const GetPokemon = () => {
  const [pokemon, setPkm] = useState("");

  const getPkm = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/charizard")
      .then((response) => response.json())
      .then((data) => {
        setPkm(data.name);
      });
  };

  return (
    <div>
      <Button variant="contained" onClick={getPkm}>Choose Your Pokemon!</Button>
      <br></br>
      <strong>{pokemon}</strong>
    </div>
  )
};

export default GetPokemon;
