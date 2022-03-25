import React, { useContext, useState } from "react";

import ProjectModal from "../Project_Modal/Project_Modal";
import { IProjectData } from "../../data/data";
import * as Styled from "./Project_Card_Styled";
import { ActionType, AppContext } from "../../reducer/AppReducer";

export default function ProjectCard(props: { project: IProjectData }) {
  const { content, git, label, name, src, link, tech } = props.project;
  const { state, dispatch } = useContext(AppContext);
  const [showContent, setShowContent] = useState<boolean>(false);

  return (
    <Styled.Container
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
      onPointerDown={() =>
        setTimeout(() => {
          setShowContent(!showContent);
        }, 200)
      }
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
          {git ? <a href={git}>Github</a> : <></>}
          {link ? (
            <a href={link}>See Project</a>
          ) : (
            <span
              onClick={() =>
                dispatch({
                  type: ActionType.SHOW_PROJECT_MODAL,
                  payload: {
                    isShow: !state.showProjectModal,
                    project: props.project,
                  },
                })
              }
            >
              See Project
            </span>
          )}
        </Styled.Links>
      </Styled.Content>
    </Styled.Container>
  );
}
