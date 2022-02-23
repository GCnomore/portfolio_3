import React, { useState } from "react";

import { Divider } from "../../components/Divider/Divider";
import From_Bootcamp from "./From_Bootcamp/From_Bootcamp";
import From_Work from "./From_Work/From_Work";
import Personal from "./Personal/Personal";
import { ICategory } from "./Projects_Interface";
import * as Styled from "./Projects_Styled";

const CATEGORY: ICategory[] = [
  {
    id: 1,
    name: "Work",
  },
  {
    id: 2,
    name: "Personal",
  },
  {
    id: 3,
    name: "Bootcamp",
  },
];

interface ProjectsProps {
  isBgGone: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isBgGone }) => {
  const [category, setCategory] = useState<ICategory>({ id: 1, name: "Work" });

  return (
    <Styled.CONTAINER isBgGone={isBgGone}>
      <Styled.SectionTitle>
        <h2>Projects</h2>
      </Styled.SectionTitle>

      <Divider />
      <Styled.CategoryContainer>
        <ul>
          {CATEGORY.map((item: ICategory, index: number) => (
            <li key={`${item.name}${index}`}>{item.name}</li>
          ))}
        </ul>
      </Styled.CategoryContainer>
      <h3>{category?.name}</h3>
      <Styled.ProjectContainer>
        {category.id === 1 ? (
          <From_Work />
        ) : category.id === 2 ? (
          <Personal />
        ) : category.id === 3 ? (
          <From_Bootcamp />
        ) : (
          <></>
        )}
      </Styled.ProjectContainer>
    </Styled.CONTAINER>
  );
};

export default Projects;
