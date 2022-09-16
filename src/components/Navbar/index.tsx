import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"
export const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="nav-container">
        <Link to="/">Home</Link>
        <Link to="pokedex">Pokedex</Link>
      </div>
    </nav>
  )
}
