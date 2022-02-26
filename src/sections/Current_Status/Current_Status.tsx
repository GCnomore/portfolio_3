import React from "react";
import { Divider } from "../../components/Divider/Divider";

import * as Styled from "./Current_Status_Styled";

export default function Current_Status() {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <h2>Current Status</h2>
      </Styled.TitleContainer>
      <Divider />
      <Styled.ContentContainer></Styled.ContentContainer>
    </Styled.Container>
  );
}
