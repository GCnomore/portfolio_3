import styled from "styled-components";

export const FONT_HIGHLIGHT = "#f287d4;";
export const FONT_FAMILY = '"Mukta", sans-serif';

export const SCREEN_2XL = "1536px";
export const SCREEN_XL = "1280px";
export const SCREEN_LG = "1024px";
export const SCREEN_MD = "768px";
export const SCREEN_SM = "640px";
export const SCREEN_XS = "425px";

export const SECTION_PADDING_XL = "15rem 0";
export const SECTION_PADDING_LG = "10rem 0";

export const CONTAINER = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: ${FONT_FAMILY};
  padding: ${SECTION_PADDING_XL};

  @media (max-width: ${SCREEN_LG}) {
    padding: ${SECTION_PADDING_LG};
  }
`;
