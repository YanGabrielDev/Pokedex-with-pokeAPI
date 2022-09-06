import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Pokemons from "./Services/Pokemons/getPokemons";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Grid container={true} display="center" justifyContent="center">
        <Grid lg={8}>
          <Pokemons />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
