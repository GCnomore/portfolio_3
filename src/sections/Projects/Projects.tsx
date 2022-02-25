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

export default function Projects() {
  const [category, setCategory] = useState<ICategory>({ id: 1, name: "Work" });

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
              selected={index + 1 === category.id}
              key={`${item.name}${index}`}
              onClick={() => setCategory({ id: index + 1, name: item.name })}
            >
              {item.name}
            </Styled.Category>
          ))}
        </ul>
      </Styled.CategoryContainer>
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
}
