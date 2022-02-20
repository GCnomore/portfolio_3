import styled from "styled-components";

export const CONTAINER = styled.section`
  width: 100%;
  display: flex;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #343434;
`;

export const CategoryContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;

  > li {
    cursor: pointer;
  }
`;
