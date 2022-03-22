import styled from "styled-components/macro";
import {
  CONTAINER,
  FONT_FAMILY,
  FONT_HIGHLIGHT,
  SCREEN_LG,
} from "../../constants";

export const Container = styled(CONTAINER)`
  margin-top: 120vh;
  color: white;
  display: flex;
`;

export const SectionTitle = styled.div`
  > h2 {
    margin: 0;
  }
`;

export const Content = styled.span`
  margin-top: 0;
  font-family: ${FONT_FAMILY};
  align-items: flex-end;
  justify-content: center;
  font-size: 1.3rem;

  > p {
    color: ${FONT_HIGHLIGHT};
    font-weight: 600;
    display: inline;
  }
`;

export const P1 = styled.p`
  font-size: 3rem;
  margin: 0 0.5rem -1rem 0;
`;

export const P2 = styled.p`
  margin: 0 0.25rem 0 0.2rem;
`;
