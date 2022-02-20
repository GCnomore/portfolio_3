import React from "react";
import Background from "../../components/Background/Background";
import * as Styled from "./Home_Styled";

export default function Home() {
  return (
    <Styled.Container>
      {/* Background will be removed from DOM once animation is over */}
      <Background />
    </Styled.Container>
  );
}
