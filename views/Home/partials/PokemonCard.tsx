import { Col, Row, Typography } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Text from "components/Typography/Text";

import fadeInUp from "animations/fadeInUp";
import { handleColorBackground, handleColorTag } from "utils/backgroundChanger";

interface IProps {
  name: string;
  url: string;
}

function PokemonCard({ name, ...props }: IProps) {
  const [pokemon, setPokemon] = useState(null);
  const [typePokemon, setTypePokemon] = useState([]);

  useEffect(() => {
    const getPokemonDetail = async () => {
      const response = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
          setPokemon(res.data);
          setTypePokemon(res.data.types.map((item) => item.type.name));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPokemonDetail();
  }, []);

  return (
    <Col xs={24} md={12}>
      <motion.div
        variants={fadeInUp}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1 }}
        className="motion-container"
      >
        <Link href={`/pokemon/${name}`}>
          <Row
            className="pokemon-card"
            style={{ backgroundColor: handleColorBackground(typePokemon) }}
          >
            <Col>
              <Typography.Text className="pokemon-name">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Typography.Text>
            </Col>

            <Col className="pokemon-info">
              <Row className="pokemon-types">
                {pokemon?.types?.map((type, id) => (
                  <Col
                    className="pokemon-tag"
                    style={{ backgroundColor: handleColorTag(typePokemon) }}
                    key={id}
                  >
                    {type.type.name}
                  </Col>
                ))}
              </Row>

              <Row>
                <img
                  src={pokemon?.sprites?.other.dream_world.front_default}
                  aria-label={name}
                  alt={name}
                />
              </Row>
            </Col>
          </Row>
        </Link>
      </motion.div>
    </Col>
  );
}

export default PokemonCard;
