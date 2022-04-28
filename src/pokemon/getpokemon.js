import React, { useState } from "react";

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
      <button onClick={getPkm}>Choose Your Pokemon!</button>
      <br></br>
      <strong>{pokemon}</strong>
    </div>
  )
};

export default GetPokemon;
