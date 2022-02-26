import React, { useState } from "react";

import { Divider } from "../../components/Divider/Divider";
import Project_Card from "../../components/Project_Card/Project_Card";
import From_Bootcamp from "./From_Bootcamp/From_Bootcamp";
import From_Work from "./From_Work/From_Work";
import Personal from "./Personal/Personal";
import {
  CATEGORY,
  ICategory,
  IProjectData,
  ProjectsData,
} from "./Projects_Data";
import * as Styled from "./Projects_Styled";

export default function Projects() {
  const [category, setCategory] = useState<ICategory>({ id: 0, name: "All" });

  const renderProjects = (): JSX.Element[] => {
    const filteredProjects = ProjectsData.filter(
      (item) => item.label.toLowerCase() === category.name.toLowerCase()
    );
    if (category.name === "All") {
      return ProjectsData.map((project: IProjectData) => (
        <Project_Card key={project.git} project={project} />
      ));
    } else {
      return filteredProjects.map((project) => (
        <Project_Card key={project.git} project={project} />
      ));
    }
  };

  return (
    <Styled.CONTAINER>
      <Styled.SectionTitle>
        <h2>Projects</h2>
      </Styled.SectionTitle>
      <Divider />
      <Styled.CategoryContainer>
        <ul>
          {CATEGORY.map((item: ICategory, index: number) => (
            <Styled.Category
              selected={index === category.id}
              key={`${item.name}${index}`}
              onClick={() => setCategory({ id: index, name: item.name })}
            >
              {item.name}
            </Styled.Category>
          ))}
        </ul>
      </Styled.CategoryContainer>
      <Styled.ProjectContainer>
        <div>{renderProjects()}</div>
      </Styled.ProjectContainer>
    </Styled.CONTAINER>
  );
}
