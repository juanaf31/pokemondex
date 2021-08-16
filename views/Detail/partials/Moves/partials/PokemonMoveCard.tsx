import fadeInUp from "animations/fadeInUp";
import { Col, Row, Tag, Typography } from "antd";
import axios from "axios";
import Text from "components/Typography/Text";
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

interface MoveAttributes {
  name: string;
  url: string;
}
function PokemonMoveCard({ name, url }: MoveAttributes) {
  const [move, setMove] = useState(null);
  useEffect(() => {
    const getPokemonMove = async () => {
      const response = await axios
        .get(`${url}`)
        .then((res) => {
          setMove(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPokemonMove();
  }, []);
  console.log(move);
  return (
    <Col span={24} style={{ padding: "0 10%" }}>
      <motion.div
        variants={fadeInUp}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1 }}
        className="motion-container"
      >
        <Row className="card-shadow" gutter={[0, 12]} style={{ padding: 10 }}>
          <Col span={24}>
            <Row justify="center" align="middle" gutter={[12, 0]}>
              <Col>
                <Text bold size={18}>
                  {move?.name}
                </Text>
              </Col>
              <Col>
                <Tag>
                  {move && move?.damage_class !== null
                    ? move.damage_class.name
                    : ""}
                </Tag>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row>{`Target : ${move?.target.name}`}</Row>
            <Row>
              {`Accuracy : ${move?.accuracy === null ? "-" : move?.accuracy}`}
            </Row>
            <Row>
              {`Effect : ${
                move?.effect_entries.length === 0
                  ? "-"
                  : move?.effect_entries[0].effect
              }`}
            </Row>
          </Col>
        </Row>
      </motion.div>
    </Col>
  );
}

export default PokemonMoveCard;
