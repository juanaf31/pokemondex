import fadeInUp from "animations/fadeInUp";
import stagger from "animations/stagger";
import { Col, Progress, Row, Typography } from "antd";
import Text from "components/Typography/Text";
import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

function BaseStats() {
  const pokemon = useSelector(
    (state: RootState) => state.pokemonReducer.pokemonDetail
  );

  return (
    <div style={{ padding: 30 }}>
      <motion.div variants={stagger(0.08)}>
        <Col>
          {pokemon?.stats.map((item, id) => (
            <motion.div key={id} variants={fadeInUp}>
              <Row gutter={[12, 0]} justify="center">
                <Col span={10}>
                  <Text bold>{item.stat.name}</Text>
                </Col>
                <Col span={3}>
                  <Text>{item.base_stat}</Text>
                </Col>
                <Col span={7}>
                  <div style={{ width: "100%" }}>
                    <Progress
                      percent={item.base_stat}
                      size="small"
                      showInfo={false}
                      status={item.base_stat < 50 ? "exception" : "success"}
                    />
                  </div>
                </Col>
              </Row>
            </motion.div>
          ))}
          <motion.div variants={fadeInUp}>
            <Row justify="center" style={{ marginTop: 30 }}>
              <Col span={10}>
                <Row>
                  <Typography.Title level={5}>Types defences</Typography.Title>
                </Row>
                The effectiveness of each type of {pokemon?.name}
              </Col>
              <Col span={10}></Col>
            </Row>
          </motion.div>
        </Col>
      </motion.div>
    </div>
  );
}

export default BaseStats;
