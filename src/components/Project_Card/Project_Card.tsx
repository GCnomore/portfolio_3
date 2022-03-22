import React, { useState } from "react";

import { IProjectData } from "../../data/data";
import * as Styled from "./Project_Card_Styled";

export default function ProjectCard(props: { project: IProjectData }) {
  const { content, git, label, name, src, link, tech } = props.project;

  const [showContent, setShowContent] = useState<boolean>(false);

  return (
    <Styled.Container
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <img alt="projects" src={src} />
      <Styled.Label letters={label.length} label={label}>
        {label}
      </Styled.Label>
      <Styled.Content show={showContent}>
        <h3>{name}</h3>
        <p>{content}</p>
        <Styled.TechsContainer>
          <span>Tech:</span>
          <Styled.Techs>
            {tech.map((item: string) => (
              <li key={`${name}-tech-${item}`}>{item}</li>
            ))}
          </Styled.Techs>
        </Styled.TechsContainer>
        <Styled.Links>
          <a href={git}>Github</a>
          <a href={link}>See Project</a>
        </Styled.Links>
      </Styled.Content>
    </Styled.Container>
  );
}
