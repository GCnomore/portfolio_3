import FoodApp from "../images/FoodApp_home.webp";
import GCboard from "../images/GCboard_home.webp";
import Pokedex from "../images/Pokedex_home.webp";
import Moviehunt from "../images/Moviehunt.webp";
import Kokoatalk from "../images/KokoaTalk_home.webp";
import Todo from "../images/Todo_home.webp";
import Terrakan from "../images/projects/terrakan/terrakan1.webp";
import Terrakan2 from "../images/projects/terrakan/terrakan2.webp";
import Terrakan3 from "../images/projects/terrakan/terrakan3.webp";
import Terrakan4 from "../images/projects/terrakan/terrakan4.webp";
import Terrakan5 from "../images/projects/terrakan/terrakan5.webp";
import Terraclose from "../images/projects/terraclose/terraclose1.webp";
import Terraclose2 from "../images/projects/terraclose/terraclose2.webp";
import Terraclose3 from "../images/projects/terraclose/terraclose3.webp";
import Terraclose4 from "../images/projects/terraclose/terraclose4.webp";
import Terraclose5 from "../images/projects/terraclose/terraclose5.webp";
import Terraclose6 from "../images/projects/terraclose/terraclose6.webp";
import Terraclose7 from "../images/projects/terraclose/terraclose7.webp";

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
  git?: string;
  tech: string[];
  link?: string;
  images?: string[];
  description?: string[];
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IProgrammingFocus {
  name: string;
  ratio: string;
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
  {
    name: "Terrakan",
    src: Terrakan,
    content: "Real estate project management tool",
    label: LABEL.WORK,
    tech: ["Typescript", "NextJS", "NodeJS", "ExpressJS", "MySQL", "AWS"],
    images: [Terrakan, Terrakan2, Terrakan3, Terrakan4, Terrakan5],
    description: [
      "Real estate project management tool for both project managers and investors.",
      "Dark mode available.",
      "Fully responsive bar graph relative to the project & phase length.",
      "Widgets that show assigned tasks and activities.",
      "Activities page with with pagination. Provides filter option to filter out by project and date range",
    ],
  },
  {
    name: "Terraclose",
    src: Terraclose,
    content: "Real estate live streaming mobile application",
    label: LABEL.WORK,
    tech: ["React Native", "Redux", "MySQL", "Firebase", "RTMPS"],
    images: [
      Terraclose,
      Terraclose2,
      Terraclose3,
      Terraclose4,
      Terraclose5,
      Terraclose6,
      Terraclose7,
    ],
    description: [
      "Map view with clusters indicating listed properties",
      "List view showing baisc information on each property",
      "Auto-complete searching function with recent search archive",
      "List of vendors registered with Terraclose",
      "Detail listing page of a property. Users can submit offers, leave a comment, favorite the listing to receive notification about update on current property, request live tour to see the property via live stream.",
      "Streamer's view of live tour page. Streaming live video using RTMPS protocol. Streamer and viewrs can chat while streaming",
      "Account information page",
    ],
  },
];

export const ProgrammingFocus: IProgrammingFocus[] = [
  {
    name: "Design Pattern",
    ratio: "100%",
  },
  {
    name: "Frontend Development",
    ratio: "80%",
  },
  {
    name: "Backend Development",
    ratio: "30%",
  },
  {
    name: "New Techs",
    ratio: "70%",
  },
  {
    name: "Tools (Git, Firebase, etc)",
    ratio: "90%",
  },
];
