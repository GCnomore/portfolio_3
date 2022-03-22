import styled from "styled-components/macro";
import { CONTAINER, SCREEN_MD, SCREEN_SM, SCREEN_XL } from "../../constants";

export const Container = styled(CONTAINER)`
  padding-bottom: 0;
`;

export const SectionTitle = styled.div`
  > h2 {
    margin: 0;
  }
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > ul {
    display: flex;
    margin: 1rem 0 0 0;
    padding: 0 10%;
    list-style: none;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const Category = styled.li<{ selected: boolean }>`
  cursor: pointer;
  width: 100%;
  padding: 0 1rem;
  margin: 0 5rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: ${({ selected }) => selected && "0px 0px 30px white"};
  transition: 0.3s;

  @media (max-width: ${SCREEN_XL}) {
    margin: 0 3rem;
  }

  @media (max-width: ${SCREEN_MD}) {
    margin: 0 2rem;
    padding: 0 0.5rem;
    font-size: 1rem;
  }

  @media (max-width: ${SCREEN_SM}) {
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    font-size: 0.9rem;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  > div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 5rem 5%;
    justify-content: center;

    @media (max-width: ${SCREEN_XL}) {
      padding: 5rem 0;
    }
  }
`;
