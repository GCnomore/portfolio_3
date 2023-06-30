import styled from "styled-components/macro";
import { FONT_FAMILY, FONT_HIGHLIGHT, SCREEN_XL } from "../../constants";
import { LABEL } from "../../data/data";

export const Container = styled.div`
  width: 20rem;
  height: 20rem;
  /* min-width: 275px; */
  /* min-height: 275px; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  font-family: ${FONT_FAMILY};
  transition: 0.5s;
  cursor: pointer;

  @media (max-width: ${SCREEN_XL}) {
    width: 18rem;
    height: 18rem;
  }

  > img {
    height: 100%;
  }
`;

export const Label = styled.div<{ letters: number; label: string }>`
  position: absolute;
  color: #fff;
  background-color: ${({ label }) => {
    if (label === LABEL.PERSONAL) return FONT_HIGHLIGHT;
    if (label === LABEL.BOOTCAMP) return "#287CF3";
    if (label === LABEL.WORK) return "#58E009";
  }};
  transform: rotateZ(45deg);
  right: -35px;
  top: ${({ letters }) => `${letters}%`};
  font-weight: 600;
  padding: 0 2rem;
  letter-spacing: 1px;
  z-index: 2;
`;
