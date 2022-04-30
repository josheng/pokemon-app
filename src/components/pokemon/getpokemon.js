import React, { useState, useEffect } from "react";
import "./styles.css"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MediaCard from "./card";
import BasicGrid from "./grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GetPokemon = () => {
  const [pokemon, setPkm] = useState([]);
  const [pkmInfo, setPkmInfo] = useState([]);
  // let pkmInfo = [];
  // let pkmobj = {};

  const getKanto = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => response.json())
      .then((data) => {
        setPkm(data.results);
      }).catch((error) => console.log(error));
      console.log(pokemon);
      getInfo();
  };

  const getInfo = () => {
    for (let pkm of pokemon) {
      fetch(pkm.url)
        .then((response) => response.json())
        .then((data) => {
               setPkmInfo(prevState => [...prevState, {
                 pokedex: data.id.toString(),
                 name: data.name,
                 image: data.sprites.front_default
               }]);
          // pkmobj.name = data.name;
          // pkmobj.pokedex = data.id;
          // pkmobj.image = data.sprites.front_default;
          // // console.log(data.name);
          // pkmInfo.push(pkmobj);

        }).catch((error) => console.log(error));
        // let data = await response.json();


      }
      // console.log("hi");
    }
    useEffect(() => {
      getKanto();
    },[])
    console.log(pkmInfo);

  return (
    <div className="getpkm">
      <Button color="error" variant="contained" onClick={getInfo}>
        Generate the Pokedex!
      </Button>
      <br></br>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
      {pkmInfo.map((pkm) => (
        <Grid item xs={4}>
        <MediaCard
          image={pkm.image}
          alt={pkm.name}
          name={pkm.name}
          pokedex={pkm.pokedex}
        />
          </Grid>
      ))}

        </Grid>
      </Box>
    </div>
  );
};;

export default GetPokemon;
