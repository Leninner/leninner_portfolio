import { TechsInfo } from './techsInfo';
import shoppingifyList from '../../utils/projectsPhotos/shoppingifyList.png';
import battleship from '../../utils/projectsPhotos/battleship.png';
import ropaShop from '../../utils/projectsPhotos/ropaShop.png';
import mini from '../../utils/projectsPhotos/mini.png';
import advice from '../../utils/projectsPhotos/advice.png';
import calculator from '../../utils/projectsPhotos/calculator.png';
import githubJobs from '../../utils/projectsPhotos/githubJobs.png';
import catWiki from '../../utils/projectsPhotos/catWiki.png';
import alameda from '../../utils/projectsPhotos/alameda.png';

const {
  React,
  Redux,
  StyledComponents,
  ReactRouter,
  TailwindCSS,
  Sass,
  JavaScript,
  HTML,
  TypeScript,
  CSS3,
} = TechsInfo;

export const projectsData = [
  {
    id: 9,
    title: 'Alameda Ecommerce',
    description:
      'This project is an ecommerce website inspired in a SquareSpace site. It is a ReactJS application with a Redux store. It is a responsive website that works on mobile, tablet and desktop.',
    image: alameda,
    userStories: [
      '✅ User story: I can see the information of diferents clothes.',
      '✅ User story: I can click on the pictures of the clothes and see the information of the clothes.',
      '✅ User story: I can select the size and quantity of the clothes and see the total price of the clothes.',
      '✅ User story: I can update the quantity of the clothes and see the total price of the clothes in the cart and checkout page',
      '✅ User story: I can see beautiful effects when I hover over the clothes images in the main page',
    ],
    techInfo: [React, TypeScript, Redux, StyledComponents, ReactRouter, CSS3],
    preview: 'https://alameda-khaki.vercel.app/',
    repo: 'https://github.com/Leninner/alameda-ecommerce',
  },
  {
    id: 1,
    title: 'Cat Wiki',
    description:
      'The purpose of this project is to show the information of cat breeds in a very cool way. The user can search for a cat breed and see the information of the breed. The user can also see the pictures of the breed and the videos of the breed.',
    image: catWiki,
    userStories: [
      '✅ User story: I can search for cat breeds and select a breed of my choice',
      '✅ User story: I can see the most popular searched cat breeds summary on the homepage',
      '✅ User story: I can see the top 10 most searched cat breeds',
      '✅ User story: I can see the breed details including description, temperament, origin, life span,adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly',
      '✅ User story: I can see more photo of the breed',
      '✅ User story: On mobile, when I select the search option, a modal for breed search should pop up',
    ],
    techInfo: [React, StyledComponents, ReactRouter, JavaScript],
    preview: 'https://the-cat-wiki.vercel.app/',
    repo: 'https://github.com/Leninner/cat-wiki',
  },
  {
    id: 2,
    title: 'GitHub Jobs',
    description:
      'This project is really simple. It`s a web app that shows you the latest jobs from Jooble.com. You can use it to find the best job for you. The Demo is hosted on Vercel, it´s free to try. Look out for the Demo and the Solution. The experince with this project was really good. I learned a lot about pagination, how to use the API and how to use the React framework. I advice you to try it out.',
    image: githubJobs,
    userStories: [
      '✅ User story: I can see a list of jobs in a city by default',
      '✅ User story: I can search for jobs with a given keyword',
      '✅ User story: I can search for jobs with a city name, zip code, or other location',
      '✅ User story: I can select one option from at least 4 pre-defined options',
      '✅ User story: I can search for a full-time job only',
      '✅ User story: I can see a list of jobs with their logo, company name, location, and posted time.',
      '✅ User story: When I select a job, I can see job descriptions and how to apply like the given design.',
      '✅ User story: When I am on the job details page, I can go back to the search page',
      '✅ User story (optional): I can see a list of jobs in the closest city from my location by default',
      '✅ User story (optional): I can see jobs on different pages, 5 items on each page',
    ],
    techInfo: [React, StyledComponents, ReactRouter, TypeScript, JavaScript],
    preview: 'https://github-jobs-tech.vercel.app/',
    repo: 'https://github.com/Leninner/github-jobs',
  },
  {
    id: 3,
    title: 'Shoppingify List',
    description:
      'Shoppingify List allows you to take your shopping list wherever you go. You can add items to your list and also, you can see the history of your shopping list. All your data is stored in your browser, so you can always come back to it.',
    image: shoppingifyList,
    userStories: [
      'When I select the items tab, I can see a list of items under different categories.',
      'I can add a new item with name, category, note, and image.',
      'When I add a new item, I can select one from the existing categories or add a new one if the category does not exist',
      'When I select an item, I can see its details and I can choose to add the current list or delete the item.',
      'I can add items to the current list',
      'I can increase the number of item in the list',
      'I can remove the item from the list',
      'I can save/update the list with a name (user can have only one active list at a time)',
      'I can toggle between editing state and completing state',
      'When I am at completing state, I can save my progress by selecting the item',
      'I can cancel the active list',
      'When I try to cancel a list, I can see a confirmation notification',
      'I can see my shopping history and I can see the details of it',
      'I can see some statistics: top items, top categories, and monthly comparison. (Tips: use libraries like recharts for the graph)',
      'The user can access his information thanks to Redux Persist and Local Storage',
    ],
    techInfo: [React, Redux, StyledComponents, ReactRouter],
    preview: 'https://shoppingify-project.vercel.app/',
    repo: 'https://github.com/Leninner/shoppingify-list',
  },
  {
    id: 4,
    title: 'Battleship Game',
    description:
      'BattleShip is a game where you try to destroy your opponent’s fleet. You can play with the computer and see who is the best player.',
    image: battleship,
    userStories: [
      'The user can place their pieces horizontally or vertically',
      'The user can see the movements made with a super cool style',
      'The user can see which ship has been defeated with a feedback message.',
      'The user can see the winner and have the option to play again.',
    ],
    techInfo: [JavaScript, Sass, HTML],
    preview: 'https://leninner.github.io/battleship/',
    repo: 'https://github.com/Leninner/battleship',
  },
  {
    id: 5,
    title: 'Ropa Shop',
    description:
      'This site is built with the atomic design pattern that allows to have a correct organization of directories. The technologies used in this project are highly efficient with the system requirements.',
    image: ropaShop,
    userStories: [
      'The user can see an initial list of trending products',
      'The user can mouse over each card and see more photos about that product',
      'The user can add products to their shopping cart',
      'The user can see the summary of the purchase before proceeding to the payment',
      'The user can increase or decrease the number of products',
    ],
    techInfo: [React, Redux, ReactRouter, StyledComponents],
    preview: 'https://ropa-shop.vercel.app/',
    repo: 'https://github.com/Leninner/e-anime-shop',
  },
  {
    id: 6,
    title: 'Mini|Big Challenges',
    description:
      'This project consists of 3 great little projects to improve and increase my development skills with a to-do app, a music player and a Gif finder.',
    image: mini,
    userStories: [
      'The user can choose between any app',
      'The user can search for Gifs which are stored in local storage for the next visit',
      'User can add to-do´s, edit and delete them',
      'The user can search all and in the search view can edit, complete or delete the task',
      'User can search for song snippets that play automatically',
      'User can pause or mute the song',
    ],
    techInfo: [React, ReactRouter, TailwindCSS],
    preview: 'https://mini-challenges.vercel.app/',
    repo: 'https://github.com/Leninner/mini_challenges_react_platzi',
  },
  {
    id: 7,
    title: 'Advice Generator',
    description: 'This project gives you a random advice from a list of advices',
    image: advice,
    userStories: [
      'Tthe user can reload the page to get a new advice',
      'The user can see an advice in a cool way',
    ],
    techInfo: [React, TypeScript, TailwindCSS],
    preview: 'https://advice-generator-ts.vercel.app/',
    repo: 'https://github.com/Leninner/advice-generator-ts',
  },
  {
    id: 8,
    title: 'Cool Calculator',
    description: 'In this project you can find the result of any operation you want',
    image: calculator,
    userStories: [
      'The user can see the result of any operation',
      'The User can see the result in a cool way',
      "The user can't see the result of the operation if the input is empty",
      "The user can't see the result of the operation if the input is not a number",
      'The user can change the colors of the calculator',
    ],
    techInfo: [JavaScript, HTML, CSS3],
    preview: 'https://leninner.github.io/calculator/',
    repo: 'https://github.com/Leninner/calculator',
  },
];
