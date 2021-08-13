import { LoadingOutlined } from "@ant-design/icons";
import fadeInUp from "animations/fadeInUp";
import stagger from "animations/stagger";
import { Col, Layout, Row, Spin, Tag, Typography } from "antd";
import axios from "axios";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GoBackArrowIcon from "../../public/images/icons/go-back-arrow.svg";
import "styles/pages/details.less";

function Detail(props) {
  const router = useRouter();
  const [pokemon, setPokemon] = useState(null);
  const [typePokemon, setTypePokemon] = useState([]);
  console.log(pokemon);

  useEffect(() => {
    const getPokemonDetail = async () => {
      const response = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${router?.query?.name}`)
        .then((res) => {
          setPokemon(res.data);
          setTypePokemon(res.data.types.map((item) => item.type.name));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPokemonDetail();
  }, [router?.query?.name]);

  return (
    <div>
      <Head>
        <title>
          Pokemon |{pokemon?.name ? pokemon.name : "Pokemon Details"}
        </title>
      </Head>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <Layout className="pokemon-details">
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
          </Layout.Header>

          {pokemon ? (
            <Layout.Content>
              {/* <Row className="layout-content-wrapper">
                <Col className="pokemon-info">
                  <Typography.Title level={1} className="pokemon-name">
                    {pokemon?.name.charAt(0).toUpperCase() +
                      pokemon?.name.slice(1)}
                  </Typography.Title>
                </Col>
                <img
                  src={pokemon?.sprites?.other.dream_world.front_default}
                  aria-label={pokemon?.name}
                  alt={pokemon?.name}
                />
                <motion.div variants={stagger(0.08)}>
                  <Col>
                    <ul>
                      {pokemon?.stats.map((item,id) => (
                        <motion.li key={id} variants={fadeInUp}>
                          <strong>{item.stat.name}</strong>
                          <Tag color="magenta">{item.base_stat}</Tag>
                        </motion.li>
                      ))}
                    </ul>
                  </Col>
                </motion.div>
              </Row> */}
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
