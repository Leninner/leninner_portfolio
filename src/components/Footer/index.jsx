import React from 'react';
import { Footer, Img } from './styles';
import selecta from '../../utils/companies/selecta.png';

export const FooterComponent = () => {
  return (
    <Footer>
      <Img src={selecta} alt='selecta' />
    </Footer>
  );
};
