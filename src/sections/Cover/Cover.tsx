import React from "react";

import * as Styled from "./Cover_Styled";
import "./animation.css";

import bg1 from "../../images/pngegg.webp";

interface CoverProps {
  isBgGone: boolean;
}

const Cover: React.FC<CoverProps> = ({ isBgGone }) => {
  console.log(isBgGone);
  return (
    <Styled.Container isBgGone={isBgGone}>
      <Styled.Bg1 src={bg1} alt="sky" />
      <h1>ISAAC CHOI</h1>
    </Styled.Container>
  );
};

export default Cover;
