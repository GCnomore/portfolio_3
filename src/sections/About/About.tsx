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
          <Styled.P2>Los Angeles</Styled.P2> area.
          <br /> Although I introduce myself as a frontend developer, I am not
          only limited to a frontend development. I love being a software
          developer and very passionate about what I do. I spend most of my free
          time to learn & hone skills. I focus on writing clean & readable code
          to for smooth work progress with my teamates. I always have an ideas
          for anything, not only for software, and finding a better way is
          ingrained in me.
        </Styled.Content>
      </FadeInDown>
    </Styled.Container>
  );
}
