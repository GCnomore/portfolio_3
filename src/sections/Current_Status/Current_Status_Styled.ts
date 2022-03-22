import styled from "styled-components/macro";
import { CONTAINER, SCREEN_SM, SCREEN_XL } from "../../constants";

export const Container = styled(CONTAINER)``;

export const TitleContainer = styled.div``;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${SCREEN_XL}) {
    flex-direction: column;
  }
`;

export const LifeFocus = styled.div`
  position: relative;
  width: 100%;
  margin-right: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h3 {
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
  }

  > img {
    width: 80%;
    min-width: 25rem;

    @media (max-width: ${SCREEN_SM}) {
      width: 70%;
      min-width: 15rem;
    }
  }

  @media (max-width: ${SCREEN_XL}) {
    margin-right: 0;
  }
`;

const FocusLeft = styled.div`
  position: absolute;
  border-bottom: 1px solid white;
  border-left: 1px solid white;

  > span {
    top: -2rem;
    left: 0;
    transform: translateX(-50%);
    position: absolute;
    white-space: nowrap;
  }
`;

const FocusRight = styled.div`
  position: absolute;
  border-bottom: 1px solid white;
  border-right: 1px solid white;

  > span {
    top: -2rem;
    transform: translateX(50%);
    right: 0;
    position: absolute;
    white-space: nowrap;
  }
`;

export const Focus1 = styled(FocusLeft)`
  top: 29%;
  left: 5%;
  width: 30%;
  height: 4%;

  > span {
    font-weight: bold;
    font-size: 1.5rem;
    top: -2.5rem;
  }

  @media (max-width: ${SCREEN_SM}) {
    left: 15%;
    top: 35%;
    width: 20%;

    > span {
      font-size: 1.3rem;
    }
  }
`;

export const Focus2 = styled(FocusLeft)`
  top: 50%;
  left: 0;
  width: 30%;
  height: 2%;

  > span {
    font-weight: bold;
    font-size: 1.3rem;
  }

  @media (max-width: ${SCREEN_SM}) {
    left: 12%;
    top: 55%;
    width: 15%;

    > span {
      font-size: 1rem;
    }
  }
`;

export const Focus3 = styled(FocusLeft)`
  top: 70%;
  left: 10%;
  width: 25%;
  height: 2%;

  > span {
    font-size: 1.1rem;
  }

  @media (max-width: ${SCREEN_SM}) {
    left: 10%;
    width: 30%;

    > span {
      font-size: 0.9rem;
    }
  }
`;

export const Focus4 = styled(FocusRight)`
  right: 0;
  top: 32%;
  width: 25%;
  height: 3%;

  > span {
    font-size: 1.1rem;
    font-weight: 600;
  }

  @media (max-width: ${SCREEN_SM}) {
    right: 15%;
    top: 40%;

    > span {
      font-size: 0.9rem;
    }
  }
`;

export const Focus5 = styled(FocusRight)`
  right: -8%;
  top: 60%;
  width: 30%;
  height: 3%;

  > span {
    font-size: 1.3rem;
  }

  @media (max-width: ${SCREEN_SM}) {
    right: 5%;
    width: 20%;

    > span {
      font-size: 1rem;
    }
  }
`;

export const ProgrammingFocus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  > h3 {
    width: 100%;
    text-align: center;
  }

  > ul {
    width: 100%;
    padding: 0;
  }

  @media (max-width: ${SCREEN_XL}) {
    margin-top: 5rem;
  }
`;

export const FocusItem = styled.li<{ ratio: string }>`
  list-style: none;
  margin-bottom: 1.2rem;

  > div {
    width: ${({ ratio }) => ratio};
    height: 1rem;
    background: #c6ffdd; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #f7797d,
      #fbd786,
      #c6ffdd
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f7797d,
      #fbd786,
      #c6ffdd
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;
