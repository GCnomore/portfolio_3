import styled, { keyframes } from "styled-components";
import {
  FONT_HIGHLIGHT,
  SCREEN_2XL,
  SCREEN_LG,
  SCREEN_SM,
} from "../../constants";
import { Modal, ModalBody, ModalProps } from "react-bootstrap";

export const Container = styled(Modal)<ModalProps>`
  display: flex;
  
  > .modal-dialog {
    width: 100%;
    max-width: 100%;
    margin: 0;
    max-height: 100%;
    background-color: #242424;
    justify-content: flex-start;

    .modal-content {
      border-radius: 0;
    }
  }

  h4 {
    text-decoration: underline;
  }

  tr {
    padding-bottom: 5rem;
  }

  tr > td {
    min-width: 20rem;
    padding-bottom: 1rem;
  }

  ul {
    list-style: circle;
  }
  `;

export const Body = styled(ModalBody)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #242424;
  color: white;
  padding-top: 0px;

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

export const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  height: 0px;
  justify-content: flex-end;
`;

export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 3rem;
  opacity: 0.3;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }
`;

export const MainImgContainer = styled.div<{isMobile: boolean}>`
  display: flex;
  justify-content: center;

> img {
  width: ${({isMobile})=> isMobile ? 'auto' : '65vw'};
  height: ${({isMobile})=> isMobile ? '65vh' : 'auto'};
  margin: 0 auto;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
}
`;

export const TableRow = styled.div`
  display: flex;
  margin: 1rem 0 1rem 0;

  > h4 {
    width: 20rem;
    flex-shrink: 0;
  }
`;

export const ProjectImages = styled.li<{isMobile: boolean}>`
  list-style: none;
  width: ${({isMobile})=> isMobile ? '30%' : '100%'};
  margin: ${({isMobile})=> isMobile ? '0 2rem 2rem 0' : '0 0 2rem 0'};
  
  > img {
    width: 100%;
  }
`;

export const Description = styled.div`
  width: 65vw;
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0 auto;
`;