import { Col, Row } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";

interface EvolutionPartAttribute {
  name: string;
  url: string;
}

function NextEvolution(props: EvolutionPartAttribute) {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const getPokemonDetail = async () => {
      const response = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${props.name}`
      )
        .then((res) => {
          setPokemon(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPokemonDetail();
  }, []);
  return (
    <div>
      <Col>
        <Row>
          <img
            style={{ width: 100 }}
            src={pokemon?.sprites?.other.dream_world.front_default}
            aria-label={pokemon?.name}
            alt={pokemon?.name}
          />
        </Row>
        <Row justify="center">{props.name}</Row>
      </Col>
    </div>
  );
}

export default NextEvolution;
