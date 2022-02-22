import React from "react";
import { Divider } from "../../components/Background/Divider/Divider";

import * as Styled from "./About_Styled";

export default function About() {
  return (
    <Styled.Container>
      <Styled.SectionTitle>
        <h2>About</h2>
      </Styled.SectionTitle>
      <Divider />
    </Styled.Container>
  );
}
