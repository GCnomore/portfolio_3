import styled, { keyframes } from "styled-components";

export const BackDrop = styled.div<{
  isShow: boolean;
  scTop: number;
}>`
  z-index: 100;
  height: 100vh;
  width: 1000vh;
  user-select: none;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1.2px);
  position: fixed;
  top: ${(props) => props.scTop + "px"};
  display: ${({ isShow }) => (isShow ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const scale = keyframes`
  0% {
    height:10vw;
    width: 10vw;
  }
  100% {
    height: 90vh;
    width: 80vw;
  }
`;

export const ModalBody = styled.div`
  z-index: 200;
  width: 60vw;
  background-color: #191919;
  backdrop-filter: blur(1.2px);
  animation-name: ${scale};
  animation-duration: 0.4s;
  animation-timing-function: ease-out;

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  width: 110%;
  display: flex;
  justify-content: space-between;
  left: -5%;
  top: 50%;
  transform: translateY(-50%);

  > span {
    font-size: 5rem;
    font-weight: 900;
    color: white;

    &:active {
      transform: scale(0.9);
      transition: 0.2s ease-in-out;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  > img {
    width: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;

  > p {
    width: 100%;
    padding: 0;
    text-align: center;
    font-size: 19px;
  }
`;
