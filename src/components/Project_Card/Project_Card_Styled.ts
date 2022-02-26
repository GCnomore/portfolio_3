import styled from "styled-components/macro";
import { FONT_FAMILY, FONT_HIGHLIGHT } from "../../constants";
import { LABEL } from "../../sections/Projects/Projects_Data";

export const Container = styled.div`
  width: 20vw;
  height: 20vw;
  min-width: 275px;
  min-height: 275px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  font-family: ${FONT_FAMILY};
  transition: 0.5s;

  > img {
    height: 100%;
  }
`;

export const Cover = styled.div`
  position: absolute;
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

export const Content = styled.div<{ show: boolean }>`
  position: absolute;
  display: ${({ show }) => (show ? "flex" : "none")};
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const TechsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10%;

  > span {
    text-decoration: underline;
  }
`;

export const Techs = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  > li {
    margin-right: 0.5rem;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
  > a {
    color: white;
    text-decoration: underline;
    &:hover {
      color: ${FONT_HIGHLIGHT};
    }
  }
`;
