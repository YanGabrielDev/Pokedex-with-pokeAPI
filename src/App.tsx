import React, { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import Pokemons from "./Services/Pokemons/getPokemons"
import { Grid } from "@mui/material"
import { NavBar } from "./components/Navbar"
import { TextInput } from "./components/Input"
import { BroadcastChannel } from "worker_threads"
import { BrowserRouter } from "react-router-dom"
import { MainRoutes } from "./Routes/routes"

function App() {
  return (
    <div className="App">
      <Grid container={true} display="center" justifyContent="center">
        <Grid lg={8}>
          <BrowserRouter>
            <NavBar />
            <MainRoutes />
          </BrowserRouter>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
