import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  stock,
  layout,
  api,
  ui,
  deeplearning,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend',
    icon: layout,
  },
  {
    title: 'RESTful API',
    icon: api,
  },
  {
    title: 'UI-UX',
    icon: ui,
  },
  {
    title: 'Machine Learning',
    icon: deeplearning,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Full-Stack Bookstore Website',
    description: 'A basic web-application featuring JWT-based authentication and secured routes for user login and book management',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'jwt',
        color: 'pink-text-gradient',
      },
    ],
    image: stock,
    repo: 'https://github.com/norman-glad/please-work',
    demo: 'https://please-work-1.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'Java Game Tracker Application',
    description:
      'A java-swing based application for storing and managing game and player data',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
      {
        name: 'sql',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: stock,
    repo: 'https://github.com/norman-glad/java-db-fx',
  },
  {
    id: 'project-3',
    name: 'Spam Comment Classifier',
    description: 'Python scikit based program to classify comments as spam or ham',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'scikit',
        color: 'green-text-gradient',
      },
    ],
    image: stock,
    repo: 'https://github.com/norman-glad',
  },
];

export { services, technologies, projects };
