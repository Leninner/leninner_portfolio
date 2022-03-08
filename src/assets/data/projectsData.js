import { TechsInfo } from './techsInfo';

const { React, Redux, StyledComponents, ReactRouter, TailwindCSS, Sass, JavaScript, HTML } = TechsInfo;

export const projectsData = [
  {
    id: 1,
    title: 'Shoppingify List',
    description:
      'Shoppingify List allows you to take your shopping list wherever you go. You can add items to your list and also, you can see the history of your shopping list. All your data is stored in your browser, so you can always come back to it.',
    image: '',
    features: ['Latest web technology', 'Easy to scaling', 'Very user friendly'],
    techInfo: [React, Redux, StyledComponents, ReactRouter],
    preview: 'https://shoppingify-project.vercel.app/',
    repo: '',
  },
  {
    id: 2,
    title: 'Battleship Game',
    description:
      'BattleShip is a game where you try to destroy your opponent’s fleet. You can play with the computer and see who is the best player.',
    image: '',
    features: ['Modern and responsive', 'Great user experience', 'Very easy to use'],
    techInfo: [JavaScript, Sass, HTML],
    preview: 'https://leninner.github.io/battleship/',
    repo: 'https://github.com/Leninner/battleship',
  },
  {
    id: 3,
    title: 'Ropa Shop',
    description: 'The best way to grow is to help and teach other passionate people to grow.',
    image: '',
    features: ['Teach logical thinking', 'Use a workflow similar to reality', 'Use the best practices in demand'],
    techInfo: [React, Redux, ReactRouter, StyledComponents],
    preview: 'https://shoppingify-project.vercel.app/',
    repo: '',
  },
  {
    id: 4,
    title: 'Mini Big Challenges',
    description: 'The best way to grow is to help and teach other passionate people to grow.',
    image: '',
    features: ['Teach logical thinking', 'Use a workflow similar to reality', 'Use the best practices in demand'],
    techInfo: [React, ReactRouter, TailwindCSS],
    preview: 'https://shoppingify-project.vercel.app/',
    repo: '',
  },
];
