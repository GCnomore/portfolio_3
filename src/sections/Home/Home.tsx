import React, { useState } from "react";
import * as Styled from "./Home_Styled";
import Background from "../../components/Background/Background";
import About from "../About/About";
import Cover from "../Cover/Cover";
import Projects from "../Projects/Projects";
import Lightning1 from "../../images/lightning1.webp";
import Lightning2 from "../../images/lightning2.webp";

export default function Home() {
  const [isBgGone, setIsBgGone] = useState<boolean>(false);
  const [strike, setStrike] = useState<{ show: boolean; count: number }>({
    show: false,
    count: 0,
  });

  const trackScroll = (e: React.UIEvent<HTMLDivElement>): void => {
    const scrollHeight: number = e.currentTarget.scrollHeight;
    const currentHeight: number = e.currentTarget.scrollTop;

    if (
      currentHeight >= scrollHeight * 0.3 &&
      currentHeight <= scrollHeight * 0.32 &&
      strike.count === 0
    ) {
      setStrike({ show: true, count: 0 });
      setTimeout(() => {
        setStrike({ show: false, count: 1 });
      }, 1000);
      console.log("here");
    }
  };

  return (
    <Styled.Container onScroll={trackScroll}>
      {/* Background will be removed from DOM once animation is over */}
      <Background setIsBgGone={setIsBgGone} />

      <Cover isBgGone={isBgGone} />
      <About isBgGone={isBgGone} />
      <Projects isBgGone={isBgGone} />
      {strike.show && (
        <>
          <Styled.LightningCover strike={strike.show} />{" "}
          <Styled.Lightning1 strike={strike.show} src={Lightning1} />
          <Styled.Lightning2 strike={strike.show} src={Lightning2} />
        </>
      )}
    </Styled.Container>
  );
}
