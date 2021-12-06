import React from 'react';
import { GlobalStyles } from '../GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Projects } from '../pages/projects';
import { Home } from '../pages/Home';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
