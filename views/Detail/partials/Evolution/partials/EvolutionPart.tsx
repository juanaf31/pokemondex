import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import NextEvolution from "./NextEvolution";

interface EvolutionPartAttribute {
  name: string;
  url: string;
  nextEvolution: any;
}

function EvolutionPart(props: EvolutionPartAttribute) {
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
    <div style={{ padding: 30 }}>
      <Row justify="space-between" align="middle">
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
        <Col>
          <ArrowRightOutlined />
        </Col>
        <Col>
          <NextEvolution
            name={props.nextEvolution.name}
            url={props.nextEvolution.url}
          />
        </Col>
      </Row>
    </div>
  );
}

export default EvolutionPart;
