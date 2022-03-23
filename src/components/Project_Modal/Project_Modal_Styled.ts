import styled from "styled-components";

export const BackDrop = styled.div<{
  isShow: boolean;
  scTop: number;
}>`
  height: 100vh;
  width: 150vh;
  user-select: none;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1.2px);
  position: fixed;
  top: ${(props) => props.scTop + "px"};
  display: ${({ isShow }) => (isShow ? "flex" : "none")};
`;
