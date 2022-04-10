import React from "react";
import { Divider } from "../../components/Divider/Divider";
import FadeInDown from "../../components/FadeInDown/FadeInDown";

import * as Styled from "./About_Styled";

export default function About() {
  return (
    <Styled.Container>
      <FadeInDown>
        <Styled.SectionTitle>
          <h2>About</h2>
        </Styled.SectionTitle>
      </FadeInDown>

      <Divider />
      <FadeInDown>
        <Styled.Content>
          <Styled.P1>HELLO!</Styled.P1>I am a frontend developer based in
          <Styled.P2>Los Angeles</Styled.P2> area. In a{" "}
          <Styled.P2>GOOD WAY</Styled.P2> to say that I didn't majored in
          computer science, I am a self-taught, freshman deveolper who just took
          a first step into the software world.{" "}
          <Styled.P2>
            (People can have someone teach them, but in the end, learning is up
            to their own which is self-taught, right?!)
          </Styled.P2>
          <br />I am a wannabe better-than-yesterday person and believe stress
          is what makes me grow!
        </Styled.Content>
      </FadeInDown>
    </Styled.Container>
  );
}
