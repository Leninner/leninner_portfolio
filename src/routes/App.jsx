import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Preview } from '../pages/Preview';
import { Home } from '../pages/Home';
import { Layout } from '../containers/Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Preview />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
