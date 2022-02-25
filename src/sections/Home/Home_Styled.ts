import styled, { keyframes } from "styled-components/macro";

const Strike = keyframes`
  0%{
    opacity: 1;
    display: flex;
  }
  60%{
    opacity: 1;
    display: flex;
  }
  80%{
  opacity: 0;
  }
  100%{
  opacity: 0;
  display: none;
  }
`;

const Lightning = keyframes`
  0%{
    opacity: 1;
    display: flex;
  }
  30%{
    opacity: 0;
    display: none;
  }
  100%{
    opacity: 0;
    display: none;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #242424;
  perspective: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const LightningCover = styled.div<{ strike: boolean }>`
  position: fixed;
  height: 600vh;
  width: 100vw;
  background: radial-gradient(transparent 50%, #242424), white;
  top: 0;
  animation-name: ${({ strike }) => strike && Strike};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  z-index: ${({ strike }) => (strike ? 100 : -1)};
`;

export const Lightning1 = styled.img<{ strike: boolean }>`
  position: absolute;
  height: 100vh;
  top: 120vh;
  left: 10vw;
  animation-name: ${({ strike }) => strike && Lightning};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  z-index: ${({ strike }) => (strike ? 100 : -1)};
`;

export const Lightning2 = styled.img<{ strike: boolean }>`
  position: absolute;
  width: 30vw;
  top: 130vh;
  right: 0px;
  animation-name: ${({ strike }) => strike && Lightning};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  z-index: ${({ strike }) => (strike ? 100 : -1)};
`;
