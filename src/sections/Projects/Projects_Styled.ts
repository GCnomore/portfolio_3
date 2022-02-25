import styled from "styled-components/macro";
import { FONT_FAMILY } from "../../constants";

export const CONTAINER = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: ${FONT_FAMILY};
`;

export const SectionTitle = styled.div`
  > h2 {
    margin: 0;
  }
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;

  > ul {
    display: flex;
    margin: 1rem 0 0 0;
    padding: 0 10%;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const Category = styled.li<{ selected: boolean }>`
  cursor: pointer;
  width: 10%;
  min-width: 8rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: ${({ selected }) => selected && "0px 0px 30px white"};
`;

export const ProjectContainer = styled.div`
  overflow-x: auto;
`;
