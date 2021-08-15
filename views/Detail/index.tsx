import { LoadingOutlined } from "@ant-design/icons";
import fadeInUp from "animations/fadeInUp";
import stagger from "animations/stagger";
import { Col, Layout, Row, Spin, Tabs, Tag, Typography } from "antd";
import axios from "axios";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GoBackArrowIcon from "../../public/images/icons/go-back-arrow.svg";
import "styles/pages/details.less";
import { handleColorBackground, handleColorTag } from "utils/backgroundChanger";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "redux/actions";
import { RootState } from "redux/store";
import About from "./partials/About";
import BaseStats from "./partials/BaseStats";
import Evolution from "./partials/Evolution";
import Moves from "./partials/Moves";
import { PokemonDetailAttributes } from "models/pokemonDetail";
const { TabPane } = Tabs;

function Detail(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const pokemon: PokemonDetailAttributes = useSelector(
    (state: RootState) => state.pokemonReducer.pokemonDetail
  );
  const [typePokemon, setTypePokemon] = useState([]);

  useEffect(() => {
    dispatch(getPokemonDetail(router?.query?.name));
  }, [router?.query?.name]);

  useEffect(() => {
    setTypePokemon(pokemon?.types.map((item) => item.type.name));
  }, [pokemon?.id]);

  console.log(pokemon, typePokemon);

  return (
    <div>
      <Head>
        <title>
          Pokemon |{pokemon?.name ? pokemon.name : "Pokemon Details"}
        </title>
      </Head>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <Layout className="pokemon-details">
          <div>
            <Layout.Header className="pokemon-details-header">
              <motion.div
                whileHover={{ translateX: 5 }}
                whileTap={{ translateX: -2 }}
              >
                <Link href="/">
                  <div>
                    <GoBackArrowIcon />
                  </div>
                </Link>
              </motion.div>
              <Row>
                <Col span={24}>
                  <Typography.Title
                    style={{ color: "white" }}
                    level={1}
                    className="pokemon-name"
                  >
                    {pokemon?.name.charAt(0).toUpperCase() +
                      pokemon?.name.slice(1)}
                  </Typography.Title>
                </Col>
                <Col span={12}>
                  <Row gutter={[12, 0]} className="pokemon-types">
                    {pokemon?.types?.map((type, id) => (
                      <Col
                        className="pokemon-tag"
                        style={{
                          backgroundColor: handleColorTag(typePokemon || []),
                        }}
                        key={id}
                      >
                        {type.type.name}
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
              <Row justify="center" style={{ marginTop: "-70px" }}>
                <img
                  src={pokemon?.sprites?.other.dream_world.front_default}
                  aria-label={pokemon?.name}
                  alt={pokemon?.name}
                />
              </Row>
            </Layout.Header>
          </div>

          {pokemon ? (
            <Layout.Content>
              <Row className="layout-content-wrapper">
                <Tabs centered style={{ marginTop: "50px" }}>
                  <TabPane tab="About" key="1">
                    <About />
                  </TabPane>
                  <TabPane tab="Base Stats" key="2">
                    <BaseStats />
                  </TabPane>
                  <TabPane tab="Evolution" key="3">
                    <Evolution />
                  </TabPane>
                  <TabPane tab="Moves" key="4">
                    <Moves />
                  </TabPane>
                </Tabs>
              </Row>
            </Layout.Content>
          ) : (
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />}
            />
          )}
        </Layout>
      </motion.div>
    </div>
  );
}

export default Detail;
