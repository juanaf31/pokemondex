import { Button, Col, Input, Layout, Row, Spin, Tag, Typography } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "redux/actions";
import { DownOutlined, LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";
import { RootState } from "redux/store";
import PokemonCard from "./partials/PokemonCard";
import { motion } from "framer-motion";
import menu from "public/images/menu.png";

import fadeInUp from "animations/fadeInUp";
import "styles/pages/search.less";
import { useState } from "react";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const listPokemon = useSelector(
    (state: RootState) => state.pokemonReducer.pokemonList
  );
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    dispatch(getPokemonList(limit, 0));
  }, [limit]);

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Layout className="ant-layout">
        <Head>
          <title>Pokemon | Explore</title>
        </Head>
        <Layout.Header>
          <Row justify="space-between" align="middle">
            <Col>
              <Typography.Title level={1} className="application-title">
                Pokedex
              </Typography.Title>
            </Col>
            <Col>
              <Button
                style={{ border: "none" }}
                ghost
                icon={<img src={menu} style={{ width: 50 }} />}
              />
            </Col>
          </Row>
        </Layout.Header>
        <Layout.Content>
          <Row gutter={[24, 16]} className="pokemons-container">
            {listPokemon?.results ? (
              listPokemon?.results.map((pokemon, id) => (
                <PokemonCard name={pokemon.name} url={pokemon.url} key={id} />
              ))
            ) : (
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
              />
            )}
            <Col span={24} style={{ marginBottom: 10 }}>
              <Row justify="center">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 1 }}
                  className="motion-container"
                >
                  <Button
                    size="large"
                    style={{ border: "none" }}
                    onClick={() => setLimit((prev) => prev + 10)}
                  >
                    <Row justify="center">
                      <Col span={24}>
                        <DownOutlined />
                      </Col>
                      <Col>Load More</Col>
                    </Row>
                  </Button>
                </motion.div>
              </Row>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </motion.div>
  );
};

export default Home;
