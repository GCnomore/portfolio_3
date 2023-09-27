import styled, { keyframes } from "styled-components/macro";
import { FONT_FAMILY, FONT_HIGHLIGHT } from "../constants";

export const Container = styled.main<{ showModal: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  perspective: 10px;
  /* background-color: #242424; */
  background: linear-gradient(180deg, hsla(0, 0%, 14%, 1) 70%, hsla(0, 0%, 16%, 1) 100%);
  overflow-y: ${({ showModal }) => (showModal ? "hidden" : "overlay")};
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const ContactContainer = styled.ul`
  list-style: none;
  position: sticky;
  bottom: 5vh;
  left: 2vw;
  font-family: ${FONT_FAMILY};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1px;
  padding: 20px 5px;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  border-top: 1px solid white;
`;

export const Contacts = styled.li`
  margin: 15px 5px;

  > a {
    color: white;
    text-decoration: none;
    font-size: 25px;

    &:hover {
      text-decoration: underline;
      color: ${FONT_HIGHLIGHT};
    }
  }
`;
