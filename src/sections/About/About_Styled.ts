import styled from "styled-components/macro";
import { CONTAINER, FONT_FAMILY, FONT_HIGHLIGHT } from "../../constants";

export const Container = styled(CONTAINER)`
  margin-top: 80vh;
  color: white;
  display: flex;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  > h2 {
    margin: 0;
    text-align: start;
  }
`;

export const Content = styled.div`
  margin-top: 0;
  font-family: ${FONT_FAMILY};
  justify-content: center;
  font-size: 1.2rem;
  filter: drop-shadow(1px 1px 1px black);
  width: 100%;

  > p {
    color: ${FONT_HIGHLIGHT};
    font-weight: 400;
    display: inline;
  }
`;

export const P1 = styled.p`
  font-size: 2.5rem;
  font-weight: bold !important;
  margin: 0 0.5rem -1rem 0;
`;

export const P2 = styled.p`
  /* margin: 0 0.25rem 0 0.2rem; */
`;
