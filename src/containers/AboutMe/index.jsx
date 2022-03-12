import { StyledAboutMe, ImgContainer, MeInfo, GetCv, MySelf, MeDescription } from './styles';
import { MdArrowRightAlt } from 'react-icons/md';
import cv from '../../utils/cv.pdf';
import MyImage from '../../utils/me.png';

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <ImgContainer>
        <img src={MyImage} alt='This is me' />
      </ImgContainer>

      <MeDescription>
        <h1>
          <span>Work with a </span>problem solver
        </h1>

        <MySelf>
          <p>
            <strong>"Never stop learning" -Platzi-</strong> has been the constant that has governed my life in the last
            year, when I began to put all my effort into <strong>learning high-value skills.</strong>
          </p>
          <p>
            With a programming background, I became fascinated with <strong>Frontend development </strong>which became
            my passion.
          </p>
          <p>
            My goal is to always write and build scalable products and performant code. I like to learn new things and I
            am always <strong>looking for new challenges.</strong>
          </p>
        </MySelf>

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
              <a href='https://twitter.com/_leninner' target='_blank' rel='noreferrer'>
                <p>@_leninner</p>
              </a>
            </div>
          </section>
        </MeInfo>

        <GetCv download='Frontend_Developer_Lenin_Mazabanda.pdf' href={cv} target='_blank'>
          <p>Descargar CV</p>
          <MdArrowRightAlt size='32' />
        </GetCv>
      </MeDescription>
    </StyledAboutMe>
  );
};
