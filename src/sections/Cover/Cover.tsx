import React from "react";

import * as Styled from "./Cover_Styled";
import JAVASCRIPT from "../../images/javascript.webp";
import TYPESCRIPT from "../../images/typescript.webp";
import NODEJS from "../../images/nodejs.webp";
import HTML from "../../images/html.webp";
import CSS from "../../images/css.webp";
import REACT from "../../images/react.webp";

export default function Cover() {
  return (
    <Styled.Container>
      <Styled.ScrollContainer>
        <img className="skill_icon js-icon" alt="skill_icon" src={JAVASCRIPT} />
        <img className="skill_icon ts-icon" alt="skill_icon" src={TYPESCRIPT} />
        <img className="skill_icon js-icon" alt="skill_icon" src={NODEJS} />
        <img className="skill_icon js-icon" alt="skill_icon" src={HTML} />
        <img className="skill_icon js-icon" alt="skill_icon" src={CSS} />
        <img className="skill_icon js-icon" alt="skill_icon" src={REACT} />
      </Styled.ScrollContainer>
    </Styled.Container>
  );
}
