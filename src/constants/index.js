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
    name: 'Full-Stack Bookstore',
    description: 'A full-stack bookstore web application built with Node.js and React. Features user authentication, book browsing, and CRUD operations with MongoDB as the database.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    repo: 'https://github.com/norman-glad/please-work',
    demo: 'https://please-work-1.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'Todo App',
    description: 'A task management application built with React frontend and .NET Entity Framework backend. Utilizes PostgreSQL for data persistence with full CRUD functionality.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: '.net',
        color: 'green-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'pink-text-gradient',
      },
    ],
    repo: 'https://github.com/norman-glad',
    demo: 'https://github.com/norman-glad',
  },
  {
    id: 'project-3',
    name: 'Caffeine Tracker',
    description: 'An Android application built with Android Studio that allows users to log and track their daily caffeine consumption. Visualizes caffeine decay over time with interactive graphs.',
    tags: [
      {
        name: 'android',
        color: 'blue-text-gradient',
      },
      {
        name: 'kotlin',
        color: 'green-text-gradient',
      },
      {
        name: 'charts',
        color: 'pink-text-gradient',
      },
    ],
    repo: 'https://github.com/norman-glad',
    demo: 'https://github.com/norman-glad',
  },
];

export { services, technologies, projects };
