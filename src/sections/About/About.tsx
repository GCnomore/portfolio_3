import React from "react";
import { Divider } from "../../components/Divider/Divider";
import FadeInDown from "../../components/FadeInDown/FadeInDown";

import * as Styled from "./About_Styled";

export default function About() {
  return (
    <Styled.Container>
      <FadeInDown twClass="w-full">
        <Styled.SectionTitle>
          <h2 className="text-[42px] font-bold leading-[21px]">About</h2>
        </Styled.SectionTitle>
      </FadeInDown>

      <Divider className="!w-[80%] !self-start !h-[3px]" />
      <FadeInDown>
        <Styled.Content>
          <Styled.P1>HELLO!</Styled.P1>I am a frontend developer based in
          <Styled.P2> Los Angeles</Styled.P2> area.
          <br /> 
          I am a self-taught frontend developer who loves to build software. I excel at combining elements around me to solve problems.
          My primary focus is writing clean, maintainable code that ensures high-quality solutions. 
          I have a passion for continuous learning and enjoy staying updated with the latest industry trends and technologies. 
          As a self-motivated individual, I thrive on new challenges and embrace opportunities to grow both personally and professionally.
        </Styled.Content>
      </FadeInDown>

      <div className="mt-[860px] mb-[460px] w-full flex flex-col justify-start">
        <FadeInDown>
          <h2 className="text-[42px] font-bold leading-[21px]">My background / <span className="text-[#f287d4]">TMI</span></h2>
        </FadeInDown>
        <Divider className="flex !self-start !w-[80%] !h-[3px]" />
        <Styled.Content>
          I was in many places before I become a software engineer. Car sales, merchant services, loan modifications, cell phone sales, accounting, fashion district and more.<br/>
          I worked as a import production manager at garment company for 5 years and the COVID hit. Our main importer was China, just like any other LA fashion district companies.
          The entire company workflow froze, and it was just matter of time for people in manager positions, like myself, to be laid off.<br/><br/>
          With my background as a production manager, I could easily look for another position at a bigger company that could survive through the pandemic, but I wanted something else.
          I wanted to do something that can make things done by only relying on my ability and bring my imagination to real world.<br/>
          Software engineering was a perfect match of what I was looking for.<br/><br/>

          I started watching YouTube videos and following the tutorials after work during the weekdays and all day during the weekends.
          When I started to receive a stimulus check, I took that as a chance and decided to go all-in. I left my fashion industry career behind and learned to code.
          During that time, I faced many situations and issues that disturbed me from learning. <br/>
          As my life has always been, bad things were happening when it felt like I might accomplish something good. It was a very strong sign.<br/>
          I was able to finish an 8 month online boot camp within 3 months and started to submit resumes.<br/>
          It required a huge amount of patience to find a first job as a software engineer. I cannot express more.
          Thank you for keeping up to this point. I appreciate your patience. That is how I got here and also how you got here.
        </Styled.Content>
      </div>
    </Styled.Container>
  );
}
