import Icon from "@ant-design/icons";
import { Col, Image, Row, Tag, Typography } from "antd";
import Text from "components/Typography/Text";
import React from "react";
import Male from "public/images/icons/male.ico";
import Female from "public/images/icons/female.png";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
function Breeding() {
  const pokemonSpecies = useSelector(
    (state: RootState) => state.pokemonReducer.pokemonSpecies
  );

  return (
    <Col xs={24} md={20}>
      <Typography.Title level={4}>Breeding</Typography.Title>
      <Row gutter={[0, 15]}>
        <Col span={24}>
          <Row gutter={[20, 0]}>
            <Col span={8}>
              <Text>Gender</Text>
            </Col>
            <Col>
              <Row gutter={[12, 0]} align="middle">
                <Col>
                  <Image preview={false} style={{ width: 20 }} src={Male} />
                </Col>
                <Col>
                  <Text bold>70%</Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row gutter={[12, 0]} align="middle">
                <Col>
                  <Image preview={false} style={{ width: 20 }} src={Female} />
                </Col>
                <Col>
                  <Text bold>30%</Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[20, 0]}>
            <Col span={8}>
              <Text>Egg Groups</Text>
            </Col>
            {pokemonSpecies?.egg_groups.map((item) => (
              <Col>
                <Tag color="#d8ff6b">
                  <Text color="#888a81">{item.name}</Text>
                </Tag>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default Breeding;
