import { Route, Routes } from "react-router-dom"
import App from "../App"
import { Pokedex } from "../Pages/pokedex/pokedex"
import Home from "../Pages/home"
import Pokemons from "../Services/Pokemons/getPokemons"
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
  )
}
