import { StyledAboutMe, ImgContainer, MeInfo, GetCv } from './styles';
import { MdArrowRightAlt } from 'react-icons/md';
import cv from '../../utils/cv.pdf';

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <ImgContainer>
        <img
          src='https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=838&q=80'
          alt=''
        />
      </ImgContainer>

      <div>
        <h1>
          <span>About</span> Me
        </h1>
        <p>
          I am Lenin, passionate Frontend Developer based in Ecuador. I enjoy creating beautiful and powerful websites
          for the internet.
        </p>
        <p>My goal is to always write and build scalable products and performant code.</p>
        <p>I always Like to learn new things and I am always looking for new challenges.</p>
        <MeInfo>
          <section>
            <div>
              <span>Prefered name:</span>
              <p>Lenin</p>
            </div>
            <div>
              <span>Email:</span>
              <a href='/'>
                <p>mazabandalenin180@gmail.com</p>
              </a>
            </div>
          </section>
          <section>
            <div>
              <span>Phone:</span>
              <p>+593 979424062</p>
            </div>
            <div>
              <span>Twitter:</span>
              <a href='/'>
                <p>@_leninner</p>
              </a>
            </div>
          </section>
        </MeInfo>
        <GetCv download='Frontend_Developer_Lenin_Mazabanda.pdf' href={cv} target='_blank'>
          <p>Descargar CV</p>
          <MdArrowRightAlt size='32' />
        </GetCv>
      </div>
    </StyledAboutMe>
  );
};
