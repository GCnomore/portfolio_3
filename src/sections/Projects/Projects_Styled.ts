import styled from "styled-components/macro";

export const CONTAINER = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin: 0;
    padding: 0 10%;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    > li {
      cursor: pointer;
      width: 10%;
      min-width: 8rem;
      text-align: center;
    }
  }
`;

export const ProjectContainer = styled.div`
  overflow-x: auto;
`;
