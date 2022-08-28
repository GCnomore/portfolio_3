import React from "react";

import * as Styled from "./Header_Styled";
import "./animation.css";
import bg1 from "../../images/pngegg.webp";
import cloud1 from "../../images/cloud1.webp";
import cloud2 from "../../images/cloud2.webp";
import cloud3 from "../../images/cloud3.webp";

interface CoverProps {
  isBgGone: boolean;
}

const Header: React.FC<CoverProps> = ({ isBgGone }) => {
  console.log(isBgGone);
  return (
    <Styled.Container isBgGone={isBgGone}>
      <Styled.Bg1 src={bg1} alt="sky" />
      <Styled.Cloud1 src={cloud1} />
      <Styled.Cloud2 src={cloud2} />
      <Styled.Cloud3 src={cloud3} />
      <Styled.Title>
        <h1>ISAAC CHOI</h1>
        <h1>FRONTEND DEVELOPER</h1>
      </Styled.Title>
    </Styled.Container>
  );
};

export default Header;
