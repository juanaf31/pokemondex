import { Col, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonSpecies } from "redux/actions";
import { RootState } from "redux/store";

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

  console.log(pokemon);
  return (
    <div style={{ padding: 30 }}>
      <Row gutter={[0, 30]}>
        <Col span={24}>
          <Typography.Text>
            {pokemonSpecies &&
              pokemonSpecies?.flavor_text_entries[0].flavor_text}
          </Typography.Text>
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
                      <Col>{pokemon?.height}</Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="center">
                      <Col>Weight</Col>
                    </Row>
                    <Row justify="center">
                      <Col>{pokemon.weight}</Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default About;
