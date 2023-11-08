import React from "react";
import _ from 'lodash';

import * as Styled from "./Header_Styled";
import "./animation.css";
import bg1 from "../../images/bg2.webp";
import cloud1 from "../../images/cloud1.webp";
import cloud2 from "../../images/cloud2.webp";
import cloud3 from "../../images/cloud3.webp";
import sky2 from '../../images/sky2.png';

const Header: React.FC = () => {
  const stars = new Array(60).fill(1);

  const renderStar = (i: number) => {
    let min = 400;
    let max = 700;
    if(window.innerWidth >= 1024) {
      min = 350;
      max = 750;
    }
  
    if(window.innerWidth >= 2560) {
      min = 450;
      max = 850;
    }

    const starSize = _.random(12, 24);
    const top = _.random(min + 500, max + 900);
    const left = _.random(-50, 150);
    const zScale = _.random(4, 18);

    return <div style={{
      zIndex: -1,
      position: 'absolute',
      width: starSize + "px",
      height: starSize + "px",
      borderRadius: "100%",
      background: "#e9e9e9",
      top: top + '%',
      left: left + '%',
      transform: `translateZ(-${zScale}px)`,
      filter: 'drop-shadow(20px 25px 5px #191919)',
      userSelect: 'none',
    }}/>
  }

  return (
    <Styled.Container>
      <Styled.Bg1 src={bg1} alt="sky" />
      <Styled.Cloud1 src={cloud1} />
      <Styled.Cloud2 src={cloud2} />
      <Styled.Cloud3 src={cloud3} />
      {/* <Styled.Galaxy src={sky2} /> */}
      <Styled.Title>
        <h1>ISAAC CHOI</h1>
        <h1>FRONTEND DEVELOPER</h1>
      </Styled.Title>
      {/* {
        stars.map((_, i)=> renderStar(i))
      } */}
    </Styled.Container>
  );
};

export default Header;
