import styled from "styled-components/macro";
import { CONTAINER } from "../Projects/Projects_Styled";

export const Container = styled(CONTAINER)`
  height: 120vh;
`;

export const ScrollContainer = styled.div`
  > img {
    width: 3vw;
    height: 3vw;
    min-width: 4rem;
    min-height: 4rem;
  }
`;
