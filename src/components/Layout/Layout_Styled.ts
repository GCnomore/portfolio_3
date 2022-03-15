import styled from "styled-components";
import {
  SCREEN_2XL,
  SCREEN_LG,
  SCREEN_MD,
  SCREEN_SM,
  SCREEN_XL,
  SCREEN_XS,
} from "../../constants";

export const Container = styled.div`
  padding: 0 25%;

  @media (max-width: ${SCREEN_2XL}) {
    padding: 0 20%;
  }

  @media (max-width: ${SCREEN_XL}) {
  }

  @media (max-width: ${SCREEN_LG}) {
  }

  @media (max-width: ${SCREEN_MD}) {
  }

  @media (max-width: ${SCREEN_SM}) {
    padding: 0 10%;
  }

  @media (max-width: ${SCREEN_XS}) {
  }
`;
