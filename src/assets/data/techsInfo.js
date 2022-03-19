import {
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiHtml5,
  SiSass,
  SiReact,
  SiTypescript,
  SiCss3,
  SiGithub,
} from 'react-icons/si';

const SIZE = 50;

export const TechsInfo = {
  React: {
    name: 'React',
    Icon: <SiReact size={SIZE} />,
    link: 'https://es.reactjs.org/',
    description: 'A JavaScript library for building user interfaces',
  },
  Redux: {
    name: 'Redux',
    Icon: <SiRedux size={SIZE} />,
    link: 'https://es.redux.js.org/',
    description: 'Redux is a predictable wrapper of JavaScript application state.',
  },
  StyledComponents: {
    name: 'Styled Components',
    Icon: <SiStyledcomponents size={SIZE} />,
    link: 'https://styled-components.com/',
    description:
      'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress ',
  },
  ReactRouter: {
    name: 'React Router',
    Icon: <SiReactrouter size={SIZE} />,
    link: 'https://reactrouter.com/',
    description:
      'React Router v6 takes the best features from previous versions—and its sister project, Reach Router—in our smallest and most powerful package yet.',
  },
  TailwindCSS: {
    name: 'Tailwind CSS',
    Icon: <SiTailwindcss size={SIZE} />,
    link: 'https://tailwindcss.com/',
    description:
      'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
  },
  Sass: {
    name: 'Sass',
    Icon: <SiSass size={SIZE} />,
    link: 'https://sass-lang.com/',
    description:
      'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
  },
  JavaScript: {
    name: 'JavaScript',
    Icon: <SiJavascript size={SIZE} />,
    link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
    description:
      'JavaScript (JS) is a lightweight, interpreted or compiled just-in-time (just-in-time) programming language with first-class functions.',
  },
  HTML: {
    name: 'HTML',
    Icon: <SiHtml5 size={SIZE} />,
    link: 'https://developer.mozilla.org/es/docs/Web/HTML',
    description:
      'HTML (HyperText Markup Language) is the most basic component of the Web. Defines the meaning and structure of web content.',
  },
  TypeScript: {
    name: 'TypeScript',
    Icon: <SiTypescript size={SIZE} />,
    link: 'https://www.typescriptlang.org/',
    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  CSS3: {
    name: 'CSS3',
    Icon: <SiCss3 size={SIZE} />,
    link: 'https://developer.mozilla.org/es/docs/Web/CSS',
    description:
      'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
  },
  Github: {
    name: 'Github',
    Icon: <SiGithub size={SIZE} />,
    link: 'https://github.com/',
    description:
      'GitHub is a web-based hosting service for version control using Git. It is often used to host source code for open source projects.',
  },
};
