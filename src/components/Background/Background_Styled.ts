import styled from "styled-components";

export const Container = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Tiles = styled.div<{
  size: number;
}>`
  width: ${({ size }) => size - 4}px;
  height: ${({ size }) => size - 4}px;
  border: 1px #121212 solid;
  background-color: #191919;
`;
