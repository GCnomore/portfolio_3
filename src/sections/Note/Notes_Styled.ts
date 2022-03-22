import styled from "styled-components";
import { FONT_FAMILY } from "../../constants";

export const Container = styled.div`
  display: none;
  position: absolute;
  color: white;
  top: 152vh;
  right: 5vh;
  font-family: ${FONT_FAMILY};
  transform-style: preserve-3d;
  font-size: 1.2rem;
  color: #444444;
  user-select: none;
  z-index: -1;

  > div {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1rem 2rem;
    background-color: #1e1e1e;
    width: 20vw;
    max-width: 25rem;
    min-width: 20rem;
    transform: skewX(-3deg);

    > span {
      > p {
        font-size: 1.4rem;
        text-align: center;
      }

      > ol {
        margin-top: 3rem;
        padding-left: 3rem;
        h4 {
          margin: 0;
          margin-left: -2rem;
          font-size: 1.2rem;
        }
        li {
          font-size: 1.1rem;
          margin: 1rem 0;

          &:nth-child(2) {
            margin: 0;
          }
        }
      }
    }

    > span:first-child {
      position: absolute;
      left: 0;
      top: 0;
      transform: skewX(-20deg) rotateZ(20deg) scaleY(3);
      font-weight: 900;
    }

    > span:last-child {
      position: absolute;
      right: 0;
      bottom: 0;
      transform: skewX(-20deg) rotateZ(20deg) scaleY(3);
      font-weight: 900;
    }
  }
`;
