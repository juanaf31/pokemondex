import { CSSProperties } from "react";
import { Typography } from "antd";
import { TextProps } from "antd/lib/typography/Text";

const { Text: CurText } = Typography;

const mapColor = {
  white: "white",
  black: "black",
  gray: "#2a2a2a",
  red: "#dd4545",
  green: "#27AE60",
  primary: "#1B5292",
};

const mapBgColor = {
  transparent: "transparent",
  gray: "#F4F4F4",
};

export interface IText extends TextProps {
  className?: string;
  size?: number;
  color?: "primary" | "white" | "black" | "gray" | "red" | "green" | any;
  bold?: boolean;
  style?: CSSProperties;
  block?: boolean;
  bgColor?: "transparent" | "gray" | any;
  padding?: number;
}

function Text(props: IText) {
  const {
    size = "16",
    color = "inherit",
    bold,
    block,
    bgColor,
    style,
    padding,
    ...cProps
  } = props;

  const weight = bold ? "bold" : "normal";

  return (
    <CurText
      style={{
        color: mapColor[color] || color,
        backgroundColor: mapBgColor[bgColor] || bgColor,
        fontSize: size,
        padding,
        fontWeight: weight,
        ...(block ? { width: "100%", display: "block" } : {}),
        ...style,
      }}
      {...cProps}
    />
  );
}

export default Text;
