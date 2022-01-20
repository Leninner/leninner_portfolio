import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Preview } from '../pages/Preview';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes>
        <Route path='/' element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
};
