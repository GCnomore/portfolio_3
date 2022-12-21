import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: #121212;
`;

export const Tiles = styled.div<{
  size: number;
}>`
  width: ${({ size }) => size - 4}px;
  height: ${({ size }) => size - 4}px;
  min-width: 50px;
  min-height: 50px;
  border: 1px #494949 solid;
  background-color: #191919;
`;
