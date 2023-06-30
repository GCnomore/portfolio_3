import React from "react";
import { Divider } from "../../components/Divider/Divider";
import FadeInDown from "../../components/FadeInDown/FadeInDown";

import * as Styled from "./About_Styled";

export default function About() {
  return (
    <Styled.Container>
      <FadeInDown>
        <Styled.SectionTitle>
          <h2 className="text-2xl font-bold">About</h2>
        </Styled.SectionTitle>
      </FadeInDown>

      <Divider />
      <FadeInDown>
        <Styled.Content>
          <Styled.P1>HELLO!</Styled.P1>I am a frontend developer based in
          <Styled.P2>Los Angeles</Styled.P2> area.
          <br /> 
          I am a self-taught frontend developer with a strong background in backend development as well. 
          With expertise in building web and mobile applications, I bring a well-rounded skill set to the table. 
          My primary focus is on writing clean, maintainable code that ensures high-quality solutions. 
          I have a passion for continuous learning and enjoy staying updated with the latest industry trends and technologies. 
          As a self-motivated individual, I thrive on new challenges and embrace opportunities to grow both personally and professionally. 
          Let's collaborate and create amazing digital experiences together!
        </Styled.Content>
      </FadeInDown>
    </Styled.Container>
  );
}
