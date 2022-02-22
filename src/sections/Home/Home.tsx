import React, { useState } from "react";
import Background from "../../components/Background/Background";
import About from "../About/About";
import Cover from "../Cover/Cover";
import Projects from "../Projects/Projects";
import * as Styled from "./Home_Styled";

export default function Home() {
  const [isBgGone, setIsBgGone] = useState<boolean>(false);

  return (
    <Styled.Container>
      {/* Background will be removed from DOM once animation is over */}
      {/* <Background setIsBgGone={setIsBgGone} />
      {isBgGone ? (
        <> */}
      <Cover />
      <About />
      <Projects />
      {/* </>
      ) : (
        <></>
      )} */}
    </Styled.Container>
  );
}
