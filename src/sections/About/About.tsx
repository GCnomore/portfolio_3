import React from "react";
import { Divider } from "../../components/Divider/Divider";

import * as Styled from "./About_Styled";

interface AboutProps {
  isBgGone: boolean;
}

const About: React.FC<AboutProps> = ({ isBgGone }) => {
  return (
    <Styled.Container isBgGone={isBgGone}>
      <Styled.SectionTitle>
        <h2>About</h2>
      </Styled.SectionTitle>
      <Divider />
    </Styled.Container>
  );
};

export default About;
