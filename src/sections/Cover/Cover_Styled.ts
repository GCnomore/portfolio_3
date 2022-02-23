import styled, { keyframes } from "styled-components/macro";
import { CONTAINER } from "../Projects/Projects_Styled";

export const Container = styled(CONTAINER)<{ isBgGone: boolean }>`
  display: ${({ isBgGone }) => (isBgGone ? "flex" : "none")};
  height: 100%;
  transform-style: preserve-3d;
  position: relative;

  > h1 {
    position: absolute;
    color: white;
    top: 50vh;
    transform: translateZ(-5px) scale(1.5);
  }
`;

export const Bg1 = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: -20rem;
  transform: translateZ(-20px) scale(3);
`;
