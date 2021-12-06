import React from 'react';
import { HeaderComponent } from '../../components/Header';

export const Layout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
    </>
  );
};
