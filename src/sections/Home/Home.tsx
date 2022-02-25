import React, { useState } from "react";
import * as Styled from "./Home_Styled";
import Background from "../../components/Background/Background";
import About from "../About/About";
import Cover from "../Cover/Cover";
import Projects from "../Projects/Projects";
import Lightning1 from "../../images/lightning1.webp";
import Lightning2 from "../../images/lightning2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

interface IContacts {
  name: string;
  url: string;
  icon: IconDefinition;
}

const contacts: IContacts[] = [
  {
    name: "Github",
    url: "https://github.com/GCnomore",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/isaac-choi-6a68bb1b4/",
    icon: faLinkedinIn,
  },
  {
    name: "Email",
    url: "mailto:isaacgc08@gmail.com",
    icon: faInbox,
  },
];

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

      {isBgGone ? (
        <>
          <About />
          <Projects />
          <Styled.ContactContainer>
            {contacts.map((item: IContacts, index: number) => (
              <Styled.Contacts key={`${index}contacts`}>
                <a target="_blank" href={item.url}>
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              </Styled.Contacts>
            ))}
          </Styled.ContactContainer>
        </>
      ) : (
        <></>
      )}

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
