import React, { useContext, useState } from "react";

import { IProjectData } from "../../data/data";
import * as Styled from "./Project_Card_Styled";
import { AppContext } from "../../reducer/AppReducer";
import SmoothScroll from "../../lib/smoothScroll";

interface IProjectCardProps {
  project: IProjectData;
  setSelectedProject: React.Dispatch<React.SetStateAction<IProjectData | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  smoothScroll: SmoothScroll | null;
}

const ProjectCard:React.FC<IProjectCardProps> = (props) => {
  const { content, git, label, name, src, link, tech } = props.project;
  const { state, dispatch } = useContext(AppContext);

  const handleClick = (e: React.MouseEvent) => {
    state.scrollContainer?.setAttribute('style', 'overflow-y: hidden');
    props.smoothScroll?.dispose();
    props.setSelectedProject(props.project);
    props.setShowModal(true);
  }
  
  return (
    <Styled.Container className="fadeIn" onClick={handleClick}>
      <img className="max-w-none" alt="projects" src={src} />
      <Styled.Label letters={label.length} label={label}>
        {label}
      </Styled.Label>
    </Styled.Container>
  );
}

export default ProjectCard