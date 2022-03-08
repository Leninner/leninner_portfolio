import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Preview } from '../pages/Preview';
import { Home } from '../pages/Home';
import { Layout } from '../containers/Layout';
import { ProjectsModal } from '../containers/ProjectsModal';
import { ProjectDetails } from '../components/ProjectDetails';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Preview />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={ProjectsModal()} />
          <Route path='/projects/:id' element={<ProjectDetails info />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
