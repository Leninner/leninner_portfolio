import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #212428;
  }

  &::-webkit-scrollbar {
      -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
      width:10px;
  }

  &::-webkit-scrollbar-button:increment,&::-webkit-scrollbar-button {
      display: none;
  }

  &::-webkit-scrollbar:horizontal {
      height: 10px;
  }

  &::-webkit-scrollbar-thumb {
      background-color: #414141;
      border-radius: 20px;
      border: 2px solid transparent;
  }

  &::-webkit-scrollbar-track {
      border-radius: 10px;
  }
`;
