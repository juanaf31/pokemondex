import { Row, Typography } from "antd";
import axios from "axios";
import { PokemonDetailAttributes } from "models/pokemonDetail";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import PokemonMoveCard from "./partials/PokemonMoveCard";

function Moves() {
  const pokemon: PokemonDetailAttributes = useSelector(
    (state: RootState) => state.pokemonReducer.pokemonDetail
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Row justify="center">
        <Typography.Title level={4}>{`${
          pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)
        } Moves`}</Typography.Title>
      </Row>
      <Row gutter={[0, 30]}>
        {pokemon.moves.map((item) => (
          <PokemonMoveCard name={item.move.name} url={item.move.url} />
        ))}
      </Row>
    </div>
  );
}

export default Moves;
