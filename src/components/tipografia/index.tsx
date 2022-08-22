import React from "react";
import { Container } from "./styles";

interface HeadingProps {
  name: String;
  typeHeading:
    | "display"
    | "heading-l"
    | "heading-m"
    | "heading-s"
    | "heading-xs"
    | "subheading"
    | "body-m";
  fontWeight?: 400 | 700;
  color?: String;
}
export const Heading = ({
  name,
  typeHeading,
  color = "black",
  fontWeight = 700,
}: HeadingProps) => {
  return (
    <Container>
      <div
        style={{ color: `${color}`, fontWeight: `${fontWeight}` }}
        className={typeHeading}
      >
        <p>{name}</p>
      </div>
    </Container>
  );
};
