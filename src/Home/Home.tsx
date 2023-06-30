import React, { useState, lazy, Suspense, useRef, useEffect } from "react";
import * as Styled from "./Home_Styled";
import Layout from "../components/Layout/Layout";
import About from "../sections/About/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  IconDefinition,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { AppContext } from "../reducer/AppReducer";
import Projects from "../sections/Projects/Projects";
import Header from "../sections/Header/Header";
import SmoothScroll from "../lib/smoothScroll";

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
  {
    name: "Blog",
    url: "https://gcblog.vercel.app/",
    icon: faPencil,
  },
];

export default function Home() {
  const { state, dispatch } = useContext(AppContext);
  const container = useRef<HTMLDivElement>(null);
  const [smoothScroll, setSmoothScroll] = useState<SmoothScroll | null>(null);
  
  useEffect(()=> {
    const _smoothScroll = new SmoothScroll(container.current, 100, 16);
    setSmoothScroll(_smoothScroll);
    _smoothScroll.init();
    
    dispatch({
      type: 'setScrollContainer',
      payload: { container: container.current }
    });
    // setContainerRef(container.current);
  }, []);
  return (
    <Styled.Container
      ref={container}
      showModal={state.showProjectModal}
      className="home-container"
    >
      <Header/>
      <Layout>
        <About />
      </Layout>
  
      <Projects smoothScroll={smoothScroll} />

      <Styled.ContactContainer>
        {contacts.map((item: IContacts, index: number) => (
          <Styled.Contacts key={`${index}contacts`}>
            <a target="_blank" rel="noreferrer" href={item.url}>
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </Styled.Contacts>
        ))}
      </Styled.ContactContainer>
    </Styled.Container>
  );
}
