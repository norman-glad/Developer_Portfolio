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
    name: 'Bookstore',
    description: 'Full-stack e-commerce bookstore with user authentication, book catalog management, and seamless CRUD operations.',
    stack: {
      frontend: [{ name: 'React', icon: 'react' }],
      backend: [{ name: 'Node.js', icon: 'nodejs' }],
      database: [{ name: 'MongoDB', icon: 'mongodb' }],
      auth: [{ name: 'JWT', icon: 'jwt' }],
    },
    repo: 'https://github.com/norman-glad/please-work',
    demo: 'https://please-work-1.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'Todo App',
    description: 'Enterprise-grade task management system with persistent storage and full CRUD functionality.',
    stack: {
      frontend: [{ name: 'React', icon: 'react' }],
      backend: [{ name: '.NET EF', icon: 'dotnet' }],
      database: [{ name: 'PostgreSQL', icon: 'postgresql' }],
    },
    repo: 'https://github.com/norman-glad',
    demo: 'https://github.com/norman-glad',
  },
  {
    id: 'project-3',
    name: 'Caffeine Tracker',
    description: 'Native Android app for logging daily caffeine intake with real-time decay visualization and analytics.',
    stack: {
      mobile: [
        { name: 'Android', icon: 'android' },
        { name: 'Kotlin', icon: 'kotlin' },
      ],
      visualization: [{ name: 'Charts', icon: null }],
    },
    repo: 'https://github.com/norman-glad',
    demo: 'https://github.com/norman-glad',
  },
  {
    id: 'project-4',
    name: 'URL Shortener',
    description: 'High-performance URL shortening service with secure authentication and analytics tracking.',
    stack: {
      frontend: [{ name: 'React', icon: 'react' }],
      backend: [{ name: 'Fastify', icon: 'fastify' }],
      database: [{ name: 'MongoDB', icon: 'mongodb' }],
      auth: [{ name: 'JWT', icon: 'jwt' }],
    },
    repo: 'https://github.com/norman-glad',
    demo: 'https://github.com/norman-glad',
  },
  {
    id: 'project-5',
    name: 'Tic-Tac-Toe',
    description: 'Classic strategy game with sleek UI, game state management, and win detection algorithms.',
    stack: {
      frontend: [{ name: 'React', icon: 'react' }],
    },
    repo: 'https://github.com/norman-glad',
    demo: 'https://github.com/norman-glad',
  },
];

export { services, technologies, projects };
