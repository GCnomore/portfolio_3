import FoodApp from "../../images/FoodApp_home.webp";
import GCboard from "../../images/GCboard_home.webp";
import Pokedex from "../../images/Pokedex_home.webp";
import Moviehunt from "../../images/Moviehunt.webp";
import Kokoatalk from "../../images/KokoaTalk_home.webp";
import Todo from "../../images/Todo_home.webp";

export enum LABEL {
  PERSONAL = "PERSONAL",
  BOOTCAMP = "BOOTCAMP",
  WORK = "WORK",
}

export interface IProjectData {
  name: string;
  src: string;
  label: LABEL;
  content: string;
  git: string;
  tech: string[];
  link?: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export const CATEGORY: ICategory[] = [
  {
    id: 0,
    name: "All",
  },
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

export const ProjectsData: IProjectData[] = [
  {
    name: "THE FOOD APP",
    src: FoodApp,
    label: LABEL.PERSONAL,
    content: "A simple recipe finding app",
    git: "https://github.com/GCnomore/foodApp",
    tech: ["Typescript", "React", "Styled-Component", "NodeJS", "Express"],
  },
  {
    name: "GC board",
    src: GCboard,
    label: LABEL.PERSONAL,
    content: "Trello inspired project management app",
    git: "https://github.com/GCnomore/gcboard",
    tech: ["React", "Styled-Component"],
    link: "https://gcnomore.github.io/gcboard/",
  },
  {
    name: "MovieHunt",
    src: Moviehunt,
    label: LABEL.BOOTCAMP,
    content: "Website showing some of my favorite movies' info",
    git: "https://github.com/GCnomore/movieHunt",
    tech: [
      "React",
      "Sass",
      "Redux",
      "NodeJS",
      "Express",
      "Passport",
      "MongoDB",
    ],
    link: "https://moviehunt-gc.herokuapp.com/client/",
  },
  {
    name: "Pokedex",
    src: Pokedex,
    label: LABEL.BOOTCAMP,
    content: "A website shows Pokemon information!",
    git: "https://github.com/GCnomore/pokedex",
    tech: ["Jquery", "Bootstrap"],
    link: "https://gcnomore.github.io/pokedex/",
  },
  {
    name: "KokoaTalk",
    src: Kokoatalk,
    label: LABEL.BOOTCAMP,
    content: "Chat app made with React Native!",
    git: "https://github.com/GCnomore/chatApp",
    tech: ["React-Native", "Expo", "React Navigation", "Firebase"],
  },
  {
    name: "TodoApp",
    src: Todo,
    label: LABEL.BOOTCAMP,
    content: "Simple todo app made with Vue",
    git: "https://github.com/GCnomore/todoApp",
    tech: ["Vue", "Material Deisgn"],
    link: "https://gcnomore.github.io/todoApp/",
  },
];
