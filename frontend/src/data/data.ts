import PWCLogo from "assets/images/logos/Logo-pwc.png";
import VMGLogo from "assets/images/logos/Logo-vmg.jpg";
import VMG2Logo from "assets/images/logos/Logo-vmg2.jpg";
import TraxrLogo from "assets/images/projects/traxr-logo.png";
import ReluLogo from "assets/images/logos/Logo-relu.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import ruby from "assets/images/skills/ruby.png";
import rails from "assets/images/skills/rails.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import postgres from "assets/images/skills/postgresql.png";
import redis from "assets/images/skills/redis.png";
import mysql from "assets/images/skills/mysql.png";
import heroku from "assets/images/skills/heroku.png";
import docean from "assets/images/skills/digital-ocean.png";
import aws from "assets/images/skills/aws.png";
import nginx from "assets/images/skills/nginx.png";
import { MetaData } from "./types/types";

export const metaData: MetaData = {
  title: "Kristoffer Tølbøll - Software Engineer, Entrepeneur, Philantropist",
  meta: {
    description: "This site is a personal portfolio for Kristoffer Tølbøll",
    keywords: [
      "Softeware",
      "Programming",
      "Business",
      "Kristoffer",
      "Tølbøll",
      "Entrepeneur",
    ],
  },
};

export const companies = [
  {
    title: "CTO - Co-Founder",
    alt: "Relu Solutions",
    role: "Relu Solutions",
    skills: [
      "Project Managment",
      "Enterprise IT Solutions",
      "Cloud Computing",

      "Cloud Security and Migration",
      "Managing IT budgets",
      "Talent Acquisition",
    ],
    period: "2022 - present",
    logo: ReluLogo,
    isPromotion: false,
  },
  {
    title: "Tech Lead",
    alt: "Traxr",
    role: "Traxr",
    skills: [
      "Project Managment",
      "Scrum",
      "Agile Software Development",
      "Scoping and estimations",
    ],
    period: "2022 - present",
    logo: TraxrLogo,
    isPromotion: false,
  },
  {
    title: "Senior Full-stack engineer",
    alt: "VMG",
    role: "Vita Media Group",
    skills: [
      "Angular",
      "Web Scraping",
      "Data Analysis",
      "Java",
      "Docker",
      "Dev Ops",
      "Angular",
    ],
    period: "2022 - 2022",
    logo: VMG2Logo,
    isPromotion: false,
  },
  {
    title: "Full-stack engineer",
    alt: "VMG",
    role: "Vita Media Group",
    skills: [
      "Angular",
      "Web Scraping",
      "Data Analysis",
      "Java",
      "Docker",
      "Dev Ops",
      "Angular",
    ],
    period: "2021 - 2022",
    logo: VMGLogo,
    isPromotion: true,
  },
  {
    title: "Full-stack engineer / Consultant",
    alt: "PWC",
    role: "Price Waterhouse Coopers",
    skills: ["React JS", "Java", "Docker", "Dev Ops", "Software Advisory"],
    period: "sep  2019 - feb 2021",
    logo: PWCLogo,
    isPromotion: false,
  },
];

export const institutes = [];

export const skills = [
  {
    name: "Ruby on Rails",
    description: "Web development",
    link: "https://rubyonrails.org/",
    type: "development",
    image: rails,
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react,
  },
  {
    name: "Ruby",
    description: "Web development, scrapping",
    link: "https://www.ruby-lang.org/en/",
    type: "development",
    image: ruby,
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python,
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript,
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript,
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5,
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3,
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap,
  },
  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres,
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql,
  },
  {
    name: "Redis",
    description: "Database",
    link: "https://redis.io/",
    type: "database",
    image: redis,
  },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku,
  },
  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws,
  },
  {
    name: "Digital Ocean",
    description: "Devops",
    link: "https://www.digitalocean.com/",
    type: "devops",
    image: docean,
  },
  {
    name: "Nginx",
    description: "Web server",
    link: "https://www.nginx.com/",
    type: "devops",
    image: nginx,
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode,
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: vscode,
  },
];
