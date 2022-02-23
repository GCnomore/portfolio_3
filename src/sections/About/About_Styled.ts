import styled from "styled-components/macro";
import { CONTAINER } from "../Projects/Projects_Styled";

export const Container = styled(CONTAINER)<{ isBgGone: boolean }>`
  height: 60vh;
  margin-top: 220vh;
  margin-bottom: 30vh;
  color: white;
  display: ${({ isBgGone }) => (isBgGone ? "flex" : "none")};
`;

export const SectionTitle = styled.div`
  > h2 {
    margin: 0;
  }
`;
