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
  /* padding: 0 25%; */
  width: 1024px;
  position: relative;
  margin: 0 auto;
  display: flex;

  @media (max-width: ${SCREEN_2XL}) {
    /* padding: 0 20%; */
  }

  @media (max-width: ${SCREEN_XL}) {
    width: 720px;
  }

  @media (max-width: ${SCREEN_LG}) {
  }

  @media (max-width: ${SCREEN_MD}) {
    width: 520px;
  }

  @media (max-width: ${SCREEN_SM}) {
    width: 320px;
  }

  @media (max-width: ${SCREEN_XS}) {
  }
`;
