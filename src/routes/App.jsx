import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Preview } from '../pages/Preview';
import { Home } from '../pages/Home';
import { Layout } from '../containers/Layout';
import { Projects } from '../pages/Projects';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Preview />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
