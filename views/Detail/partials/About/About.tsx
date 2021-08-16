import fadeInUp from "animations/fadeInUp";
import stagger from "animations/stagger";
import { Col, Row, Typography } from "antd";
import Text from "components/Typography/Text";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonSpecies } from "redux/actions";
import { RootState } from "redux/store";
import { cmToInches, kgToFeet } from "utils/converter";
import Breeding from "./partials/Breeding";

function About() {
  const dispatch = useDispatch();
  const pokemon = useSelector(
    (state: RootState) => state.pokemonReducer.pokemonDetail
  );
  const pokemonSpecies = useSelector(
    (state: RootState) => state.pokemonReducer.pokemonSpecies
  );

  useEffect(() => {
    dispatch(getPokemonSpecies(pokemon?.id));
  }, [pokemon?.id]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <motion.div variants={fadeInUp}>
        <Row gutter={[0, 30]}>
          <Col span={24}>
            <Row justify="center">
              <Text>
                {pokemonSpecies &&
                  pokemonSpecies?.flavor_text_entries[0].flavor_text}
              </Text>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="center">
              <Col xs={24} md={12}>
                <div className="card-shadow">
                  <Row justify="space-around">
                    <Col>
                      <Row justify="center">
                        <Col>Height</Col>
                      </Row>
                      <Row justify="center">
                        <Col>
                          <Text bold>{cmToInches(pokemon?.height * 10)}</Text>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row justify="center">
                        <Col>Weight</Col>
                      </Row>
                      <Row justify="center">
                        <Col>
                          <Text bold>{kgToFeet(pokemon?.weight)}</Text>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Breeding />
          </Col>
        </Row>
      </motion.div>
    </div>
  );
}

export default About;
