import { Col, Row, Typography } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import EvolutionPart from "./partials/EvolutionPart";

function Evolution() {
  const dispatch = useDispatch();
  const pokemonSpecies = useSelector(
    (state: RootState) => state.pokemonReducer.pokemonSpecies
  );
  const pokemonEvolution = useSelector(
    (state: RootState) => state.pokemonReducer.pokemonEvolution
  );
  const [evolutionChain, setEvolutionChain] = useState([]);

  const recursiveChain = (chain) => {
    setEvolutionChain((prev) => [...prev, chain.species]);
    if (chain.evolves_to.length === 0) {
      return;
    }
    recursiveChain(chain.evolves_to[0]);
  };

  useEffect(() => {
    setEvolutionChain([]);
    const getPokemonEvolution = async () => {
      const response = await axios
        .get(`${pokemonSpecies.evolution_chain.url}`)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.chain.evolves_to.length > 0) {
              setEvolutionChain((prev) => [...prev, res.data.chain.species]);
              recursiveChain(res.data.chain.evolves_to[0]);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPokemonEvolution();
  }, [pokemonSpecies?.id]);

  return (
    <div>
      <Row justify="center">
        <Typography.Title level={4}>Evolution Chain</Typography.Title>
      </Row>
      <Row justify="center">
        <Col xs={24} md={12}>
          {evolutionChain.map((item, id) => {
            let nextEvolution = evolutionChain[id + 1];
            if (nextEvolution === undefined) {
              return null;
            }
            return (
              <EvolutionPart
                name={item.name}
                url={item.url}
                nextEvolution={evolutionChain[id + 1]}
              />
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default Evolution;
