import React, { useContext, useRef, useState } from "react";

import { Divider } from "../../components/Divider/Divider";
import ProjectCard from "../../components/Project_Card/Project_Card";
import ProjectModal from "../../components/Project_Modal/Project_Modal";
import {
  CATEGORY,
  ICategory,
  IProjectData,
  ProjectsData,
} from "../../data/data";
import { AppContext } from "../../reducer/AppReducer";
import * as Styled from "./Projects_Styled";
import SmoothScroll from "../../lib/smoothScroll";

interface IProjectsProps {
  smoothScroll: SmoothScroll | null;
}

const Projects:React.FC<IProjectsProps> = ({smoothScroll}) => {
  const { state, dispatch } = useContext(AppContext);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [category, setCategory] = useState<ICategory>(CATEGORY[0]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<IProjectData | null>(null);

  const renderProjects = (): JSX.Element[] => {
    const filteredProjects = ProjectsData.filter(
      (item) => item.label.toLowerCase() === category.name.toLowerCase()
    );
    if (category.name === "All") {
      return ProjectsData.map((project: IProjectData) => (
        <div key={project.git}>
          <ProjectCard project={project} setSelectedProject={setSelectedProject} setShowModal={setShowModal} smoothScroll={smoothScroll} />
        </div>
      ));
    } else {
      return filteredProjects.map((project) => (
        <div key={project.git}>
          <ProjectCard project={project} setSelectedProject={setSelectedProject} setShowModal={setShowModal} smoothScroll={smoothScroll} />
        </div>
      ));
    }
  };

  return (
    <Styled.Container ref={containerRef}>
      <Styled.SectionTitle>
        <h2 className="text-2xl font-bold">Projects</h2>
      </Styled.SectionTitle>

      <Divider />

      <Styled.CategoryContainer>
        <ul>
          {CATEGORY.map((item: ICategory, index: number) => (
            <Styled.Category
              selected={item.id === category.id}
              key={item.id}
              onClick={() => setCategory(item)}
            >
              {item.name}
            </Styled.Category>
          ))}
        </ul>
      </Styled.CategoryContainer>

      <Styled.ProjectContainer>
        <div>{renderProjects()}</div>
      </Styled.ProjectContainer>
      <ProjectModal 
        containerRef={containerRef.current} 
        showModal={showModal} 
        setShowModal={setShowModal} 
        selectedProject={selectedProject} 
        smoothScroll={smoothScroll} 
      />

      {/* <div>
      </div> */}
    </Styled.Container>
  );
}

export default Projects;