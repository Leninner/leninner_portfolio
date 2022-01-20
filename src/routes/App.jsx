import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Projects } from '../pages/projects';
import { Home } from '../pages/Home';
import { Preview } from '../pages/Preview';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Preview />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
