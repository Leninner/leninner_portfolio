import React from 'react';
import { HeaderComponent } from '../../components/Header';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <HeaderComponent />}
      {children}
    </>
  );
};
