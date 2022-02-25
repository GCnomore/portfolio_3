import styled, { keyframes } from "styled-components/macro";
import { FONT_FAMILY } from "../../constants";
import { CONTAINER } from "../Projects/Projects_Styled";

export const Container = styled(CONTAINER)<{ isBgGone: boolean }>`
  display: ${({ isBgGone }) => (isBgGone ? "flex" : "none")};
  height: 100%;
  transform-style: preserve-3d;
  position: relative;
`;

export const Title = styled.div`
  top: 40vh;
  position: absolute;
  transform: translateZ(-5px) scale(1.5);
  text-align: center;

  > h1 {
    color: white;
    font-family: ${FONT_FAMILY};
    text-shadow: 4px 4px 2px black;
    user-select: none;
  }

  > h1:nth-child(1) {
    font-size: 8rem;
    margin: 0 0 -5rem 0;
  }

  > h1:nth-child(2) {
    font-size: 4.1rem;
    margin: 0;
  }
`;

export const Bg1 = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: -20rem;
  transform: translateZ(-20px) scale(3);
  user-select: none;
`;

export const Cloud1 = styled.img`
  position: absolute;
  width: 40vw;
  min-width: 400px;
  top: 45vh;
  left: -50vw;
  transform: translateZ(-15px) scale(2);
  filter: drop-shadow(-10px 20px 20px black);
  user-select: none;
`;

export const Cloud2 = styled.img`
  position: absolute;
  width: 40vw;
  min-width: 400px;
  top: 70vh;
  left: 100vw;
  transform: translateZ(-10px) scale(1.2);
  filter: drop-shadow(10px 25px 10px #121212);
  user-select: none;
`;

export const Cloud3 = styled.img`
  position: absolute;
  width: 40vw;
  min-width: 400px;
  top: 60vh;
  left: 10vw;
  filter: drop-shadow(20px 25px 5px #191919);
  user-select: none;
`;
