import React from 'react';
import { FooterComponent } from '../../components/Footer';
import { HireMeComponent } from '../../components/HireMe';
import { BackMainComponent } from '../../components/BackMain';

export const Home = () => {
  return (
    <div>
      <HireMeComponent />
      <FooterComponent />
      <BackMainComponent />
    </div>
  );
};
