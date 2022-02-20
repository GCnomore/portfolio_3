import React, { useState } from "react";
import From_Bootcamp from "./From_Bootcamp/From_Bootcamp";
import From_Work from "./From_Work/From_Work";
import Personal from "./Personal/Personal";

import * as Styled from "./Projects_Styled";

interface ICategory {
  id: number;
  name: string;
}

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
      <h2>Projects</h2>
      <Styled.Divider />
      <Styled.CategoryContainer>
        {CATEGORY.map((item: ICategory) => (
          <li>{item.name}</li>
        ))}
      </Styled.CategoryContainer>
      <h3>{category?.name}</h3>
      {category.id === 1 ? (
        <From_Work />
      ) : category.id === 2 ? (
        <Personal />
      ) : category.id === 3 ? (
        <From_Bootcamp />
      ) : (
        <></>
      )}
    </Styled.CONTAINER>
  );
}
