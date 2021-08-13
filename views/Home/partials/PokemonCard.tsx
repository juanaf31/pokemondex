import { Col, Row, Tag, Typography } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonDetail } from "redux/actions";
import { motion } from "framer-motion";

import fadeInUp from "animations/fadeInUp";

interface IProps {
  name: string;
  url: string;
}

function PokemonCard({ name, ...props }: IProps) {
  const [pokemon, setPokemon] = useState(null);
  const [typePokemon, setTypePokemon] = useState([]);

  const handleColorTag = (type: string[]) => {
    switch (true) {
      case type.includes("fire"):
        return "#f88c8b";
      case type.includes("grass"):
        return "#5ddfc6";
      case type.includes("water"):
        return "#95d3fe";
      case type.includes("bug"):
        return "#42a05f";
      case type.includes("electric"):
        return "#ffdd5e";
      default:
        return "#db60d8";
    }
  };
  const handleColorBackground = (type: string[]) => {
    switch (true) {
      case type.includes("fire"):
        return "#fb6c6c";
      case type.includes("grass"):
        return "#48d0b0";
      case type.includes("water"):
        return "#76bdfe";
      case type.includes("bug"):
        return "#63e38a";
      case type.includes("electric"):
        return "#ffcf4a";
      default:
        return "magenta";
    }
  };

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
