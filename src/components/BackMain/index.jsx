import React from 'react';
import { BackMain, BackMainBoxes, Img } from './styles';
import me from '../../utils/me.png';

export const BackMainComponent = () => {
  return (
    <BackMain>
      <BackMainBoxes divColor='#fd9175'>
        <div>
          <h1>Lenin</h1>
          <h1>Mazabanda</h1>
          <h4>Frontend Developer</h4>
          <p>
            <strong>Passionate about technology</strong>, innovation and the future. I enjoy every line of code that I
            write. <strong>This is my passion!</strong>
          </p>
        </div>
      </BackMainBoxes>
      <BackMainBoxes divColor='#fe734f'>
        <Img src={me} alt='' />
      </BackMainBoxes>
    </BackMain>
  );
};
