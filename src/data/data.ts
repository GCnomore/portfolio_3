import FoodApp from "../images/projects/foodApp/FoodApp_home.webp";
import FoodApp1 from "../images/projects/foodApp/foodapp1.webp";
import FoodApp2 from "../images/projects/foodApp/foodapp2.webp";
import FoodApp3 from "../images/projects/foodApp/foodapp3.webp";
import FoodApp4 from "../images/projects/foodApp/foodapp4.webp";

import GCboard from "../images/projects/GCboard/GCboard_home.webp";
import GCboard1 from "../images/projects/GCboard/gcboard1.webp";
import GCboard2 from "../images/projects/GCboard/gcboard2.webp";
import GCboard3 from "../images/projects/GCboard/gcboard3.webp";
import GCboard4 from "../images/projects/GCboard/gcboard4.webp";
import GCboard5 from "../images/projects/GCboard/gcboard5.webp";

import Pokedex from "../images/projects/pokedex/Pokedex_home.webp";
import Pokedex1 from "../images/projects/pokedex/pokedex1.webp";
import Pokedex2 from "../images/projects/pokedex/pokedex2.webp";
import Pokedex3 from "../images/projects/pokedex/pokedex3.webp";

import Moviehunt from "../images/projects/movieHunt/Moviehunt.webp";
import Moviehunt1 from "../images/projects/movieHunt/moviehunt1.webp";
import Moviehunt2 from "../images/projects/movieHunt/moviehunt2.webp";
import Moviehunt3 from "../images/projects/movieHunt/moviehunt3.webp";
import Moviehunt5 from "../images/projects/movieHunt/moviehunt5.webp";
import Moviehunt6 from "../images/projects/movieHunt/moviehunt6.webp";
import Moviehunt7 from "../images/projects/movieHunt/moviehunt7.webp";

// import Kokoatalk from "../images/KokoaTalk_home.webp";
// import Todo from "../images/Todo_home.webp";
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
import Terraclose8 from "../images/projects/terraclose/terraclose8.webp";
import Terraclose9 from "../images/projects/terraclose/terraclose9.webp";
import Terraclose10 from "../images/projects/terraclose/terraclose10.webp";
import Terraclose11 from "../images/projects/terraclose/terraclose11.webp";

import Grooming1 from "../images/projects/grooming/grooming1.webp";
import Grooming2 from "../images/projects/grooming/grooming2.webp";
import Grooming3 from "../images/projects/grooming/grooming3.webp";

import Tquens from "../images/projects/tquens/tquens.webp";
import Tquens1 from "../images/projects/tquens/tquens1.webp";
import Tquens2 from "../images/projects/tquens/tquens2.webp";
import Tquens3 from "../images/projects/tquens/tquens3.webp";
import Tquens4 from "../images/projects/tquens/tquens4.webp";
import Tquens5 from "../images/projects/tquens/tquens5.webp";
import Tquens6 from "../images/projects/tquens/tquens6.webp";
import Tquens7 from "../images/projects/tquens/tquens7.webp";
import Tquens8 from "../images/projects/tquens/tquens8.webp";
import Tquens9 from "../images/projects/tquens/tquens9.webp";

import CHRRY from '../images/projects/Chrry/Chrry_home.webp';

import aws from '../images/icons/aws.svg';
import bootstrap from '../images/icons/bootstrap.svg';
import firebase from '../images/icons/firebase.svg';
import javascript from '../images/icons/javascript.svg';
import jquery from '../images/icons/jquery.svg';
import mongodb from '../images/icons/mongodb.svg';
import mysql from '../images/icons/mysql.svg';
import nextjs from '../images/icons/nextjs.svg';
import nodejs from '../images/icons/nodejs.svg';
import python from '../images/icons/python.svg';
import react from '../images/icons/react.svg';
import redux from '../images/icons/redux.svg';
import scss from '../images/icons/scss.svg';
import typescript from '../images/icons/typescript.svg';
import vue from '../images/icons/vue.svg';
import tailwind from '../images/icons/tailwind.svg';
import html from '../images/icons/html.svg';
import css from '../images/icons/css.svg';


export enum LABEL {
  PERSONAL = "PERSONAL",
  BOOTCAMP = "BOOTCAMP",
  WORK = "WORK",
}

export enum STATUS {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
  IN_PROGRESS = 'IN_PROGRESS'
}

export interface IProjectData {
  name: string;
  status: STATUS;
  platform: string;
  src: string;
  label: LABEL;
  content: string;
  git?: string;
  tech: string[];
  link?: string;
  images: string[];
  features?: string[];
  description?: string;
  feContribution: string[];
  beContribution: string[];
  icons?: any[];
}

export interface ICategory {
  id: string;
  name: string;
}

export interface IProgrammingFocus {
  name: string;
  ratio: string;
}

export const CATEGORY: ICategory[] = [
  {
    id: 'cat-0',
    name: "All",
  },
  {
    id: 'cat-1',
    name: "Work",
  },
  {
    id: 'cat-2',
    name: "Personal",
  },
  {
    id: 'cat-3',
    name: "Bootcamp",
  },
];

export const ProjectsData: IProjectData[] = [
  {
    name: "Grooming",
    status: STATUS.IN_PROGRESS,
    src: Grooming2,
    platform: 'Web App',
    content: "Appointment application for pet grooming services",
    label: LABEL.PERSONAL,
    tech: ["Typescript", "React", "React Hook Form", "Redux Toolkit", "Styled-Component", "Tailwind CSS", "NodeJS", "Express", "MongoDB"],
    images: [Grooming1, Grooming2, Grooming3],
    features: [
      "Make an appointment online",
      "Create user account using email or 3rd party account to store preference data",
      "Receive status update via phone call or text message",
    ],
    description: `A web application that makes pet grooming appointment online. 
                  Users can create account to save their preference on grooming and view activity history. 
                  Planning to provide admin panel for grooming stores to oversee their online appointments and operation.<br/> 
                  This project is now serious and turned into a private project.
                  `,
    feContribution: ['All'],
    beContribution: ['All'],
    icons: [{name: 'Typescript', src: typescript}, {name: 'React', src: react}, {name: 'Redux', src: redux}, {name: 'Tailwind CSS', src: tailwind}, {name: 'Node JS', src: nodejs}, {name: 'Mongo DB', src: mongodb}]
    // git: 'https://github.com/GCnomore/grooming',
  },
  {
    name: "TQUENS",
    status: STATUS.PUBLIC,
    src: Tquens,
    platform: 'Web App',
    content: "Automation application for Amazon sellers",
    label: LABEL.WORK,
    tech: ['React', 'Redux Toolkit', 'NodeJS', 'SCSS', 'Typescript', 'Vue', 'Tailwind CSS', 'Pinia', 'Kendo UI', 'Python', 'Fast API', 'MongoDB', 'AWS'],
    images: [Tquens1, Tquens2, Tquens3, Tquens4, Tquens5, Tquens6, Tquens7, Tquens8, Tquens9],
    features: [
      "Reviews and rating tracker",
      "Review request automation",
      "PPC manager",
      "Reports manager",
      "Reimbursement manager",
      "Email notification",
    ],
    description: "Amazon seller's assistant automates user's workflow and scale business",
    feContribution: ['Review request automation', 'PPC manager', 'Reports Manager', 'Email Notification', 'Some landing pages', 'Grid library', 'Dropdown library', 'Serveral helper functions'],
    beContribution: ['Data modeling', 'REST API design'],
    link: 'https://tquens.com/',
    icons: [{name: 'React', src: react}, {name: 'Redux', src: redux}, {name: 'Node JS', src: nodejs}, {name: 'SCSS', src: scss}, {naem: 'Typescript', src: typescript}, {name: 'Vue', src: vue}, {name: 'Tailwind CSS', src: tailwind}, {name: 'Python', src: python}, {name: 'Mongo DB', src: mongodb}, {name: 'AWS', src: aws}]
  },
  {
    name: "THE FOOD APP",
    status: STATUS.PUBLIC,
    platform: 'Web App',
    src: FoodApp,
    label: LABEL.PERSONAL,
    content: "A simple recipe finding app",
    git: "https://github.com/GCnomore/foodApp",
    tech: ["Typescript", "React", "Styled-Component", "NodeJS", "Express"],
    description: 'Web application that finds recipe of food by the ingredients it receives. I am no longer working on this project due to high api cost.', 
    images: [FoodApp, FoodApp1, FoodApp2, FoodApp3, FoodApp4],
    feContribution: ['All'],
    beContribution: ['All'],
    icons: [{name: 'Typescript', src: typescript}, {name: 'React', src: react}, {name: 'Node JS', src: nodejs}]
  },
  {
    name: "Terrakan",
    status: STATUS.PUBLIC,
    src: Terrakan,
    platform: 'Web App',
    content: "Real estate project management tool",
    label: LABEL.WORK,
    tech: ["Typescript", "NextJS", "NodeJS", "ExpressJS", "MySQL", "AWS"],
    images: [Terrakan, Terrakan2, Terrakan3, Terrakan4, Terrakan5],
    features: [
      "Fully responsive bar graph relative to the project & phase length.",
      "Widgets that show assigned tasks and activities.",
      "Activities page with with pagination. Provides filter option to filter out by project and date range",
      "Dark mode",
    ],
    description: "Real estate project management tool for both project managers and investors.",
    feContribution: ['All components and page of "Overview", "Projects", "Meetings", and "Activity"', 'Light mode / Dark mode color theme.', 'Modularized 10,000+ lines of code files into maintainable modules'],
    beContribution: ['None'],
    icons: [{name: 'Typescript', src: typescript}, {name: 'Next JS', src: nextjs}, {name: 'Node JS', src: nodejs}, {name: 'MySQL', src: mysql}, {name: 'AWS', src: aws}]
  },
  {
    name: "Closr",
    status: STATUS.PRIVATE,
    src: Terraclose,
    platform: 'Mobile / Tablet App',
    content: "Real estate live streaming mobile application",
    label: LABEL.WORK,
    tech: ["React Native", "Redux", "MySQL", "Firebase", "RTMPS"],
    images: [
      Terraclose,
      Terraclose3,
      Terraclose2,
      Terraclose5,
      Terraclose4,
      Terraclose8,
      Terraclose9,
      Terraclose10,
      Terraclose11,
    ],
    features: [
      "Map view with clusters indicating listed properties",
      "List view showing baisc information on each property",
      "Auto-complete searching function with recent search archive",
      "List of vendors registered with Terraclose",
      "Detail listing page of a property. Users can submit offers, leave a comment, favorite the listing to receive notification about update on current property, request live tour to see the property via live stream.",
      "Streamer's view of live tour page. Streaming live video using RTMPS protocol. Streamer and viewrs can chat while streaming",
      "Account information page",
    ],
    description: "Marketplace for real estate sellers and buyers. Provides live streaming service that allows hosts to introduce their house to the potential buyers.",
    feContribution: ['RTMPS live streaming service along with chatting feature with user privilege depending on their role.', 'Commnet feature with sub-comment and likes.', 'All components and page of "Listings - List View", "Listings - Detail", "Vendor - List", "Vendor - Detail", "Live Streaming".'],
    beContribution: ['Introduced and implemented "Firebase" for live streaming feature', 'Structured and implemented "Firestore" and "Cloud Functions" for chat service', 'Implemented "Realtime DB" for live streamings', 'Implemented "Firebase Analytics"'],
    icons: [{name: 'React Native', src: react}, {name: 'Redux', src: redux}, {name: 'MySQL', src: mysql}, {name: 'Firebase', src: firebase}]
  },
  {
    name: "GC board",
    status: STATUS.PUBLIC,
    src: GCboard,
    platform: 'Web App',
    label: LABEL.PERSONAL,
    content: "Trello inspired project management app",
    git: "https://github.com/GCnomore/gcboard",
    tech: ["React", "Styled-Component"],
    link: "https://gcnomore.github.io/gcboard/",
    description: "Toy project inspired by Trello.",
    images: [GCboard, GCboard1, GCboard2, GCboard3, GCboard4, GCboard5],
    feContribution: ['All'],
    beContribution: ['N/A'],
    icons: [{name: 'React', src: react}]
  },
  {
    name: "MovieHunt",
    status: STATUS.PUBLIC,
    src: Moviehunt,
    platform: 'Web App',
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
    description: "Project no longer on live... Heroku is no longer providing free tier service.",
    // link: "https://moviehunt-gc.herokuapp.com/client/",
    images: [Moviehunt, Moviehunt1, Moviehunt2, Moviehunt3, Moviehunt5, Moviehunt6, Moviehunt7],
    feContribution: ['All'],
    beContribution: ['All'],
    icons: [{name: 'React', src: react}, {name: 'Sass', src: scss}, {name: 'Redux', src: redux}, {name: 'Node JS', src: nodejs}, {naem: 'Mongo DB', src: mongodb}]
  },
  {
    name: "Pokedex",
    status: STATUS.PUBLIC,
    src: Pokedex,
    platform: 'Web App',
    label: LABEL.BOOTCAMP,
    content: "A website shows Pokemon information!",
    git: "https://github.com/GCnomore/pokedex",
    tech: ["Jquery", "Bootstrap"],
    features: [
      "Various animations",
      "Infinite scroll loading",
      "Search Pokemons"
    ],
    description: `Pokedex that shows detailed information of Pokemons with various animations. <br/>
                  <b>This project is being featured by CareerFoundy and can be seen on their website.</b>`,
    link: "https://gcnomore.github.io/pokedex/",
    images: [Pokedex, Pokedex1, Pokedex2, Pokedex3],
    feContribution: ['All'],
    beContribution: ['N/A'],
    icons: [{name: 'Jquery', src: jquery}, {name: 'Bootstrap', src: bootstrap}]
  },
  {
    name: "CHRRY",
    src: CHRRY,
    link: 'https://chrry.io/',
    label: LABEL.WORK,
    content: "Capture and shop what you see",
    tech: ["HTML", "CSS", "Javascript", "Tailwind CSS"],
    icons: [{name: 'HTML', src: html}, {name: 'CSS', src: css}, {name: 'Javascript', src: javascript}, {name: 'Tailwind CSS', src: tailwind}],
    feContribution: ['All'],
    beContribution: ['N/A'],
    images: [CHRRY],
    platform: 'Web',
    status: STATUS.PUBLIC,
    description: "Ladning page of my side project team's product. Simple layout with call to action buttons."
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
