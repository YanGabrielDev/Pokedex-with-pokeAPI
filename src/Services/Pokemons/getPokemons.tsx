import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { Grid } from "@mui/material";

export default function Pokemons(): JSX.Element {
  interface PokeInterface {
    type: any;
    data: {
      name: string;
      id: number;
      sprites: {
        front_default: string;
      };
      types: [];
    };
  }

  const [pokemons, setPokemons] = useState<PokeInterface | any>();
  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = () => {
    console.log(pokemons);

    let endpoints = [];
    for (let i = 1; i < 100; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    let response = axios
      .all(endpoints.map((end) => axios.get(end)))
      .then((res) => setPokemons(res));
  };
  return (
    <div className="App">
      <Grid container justifyContent="center" spacing={8}>
        {pokemons?.map((pokes: PokeInterface, index: PokeInterface) => {
          return (
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={4}
              xs={6}
              justifyContent="center"
              display="flex"
            >
              <div className="pokeCard">
                <div className="poke-container">
                  <img
                    src={pokes.data.sprites.front_default}
                    className="poke-images"
                  />
                  <div>
                    <h3>N°{pokes.data.id}</h3>
                    <h2>{pokes.data.name}</h2>
                    <div className="poke-types">
                      {pokes.data.types.map((ty: PokeInterface) => (
                        <h2>{ty.type.name} </h2>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
