import { StyledAboutMe, ImgContainer, MeInfo, CvButton } from './styles';
import { MdArrowRightAlt } from 'react-icons/md';

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
        <p>I am Lenin, Frontend Developer based in Ecuador. I enjoy creating beautiful websites for the internet.</p>
        <p>My goal is to always build scalable products and performant code.</p>
        <MeInfo>
          <section>
            <div>
              <span>Name:</span>
              <p>Lenin Mazabanda</p>
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
        <CvButton>
          <p>Descargar CV</p>
          <MdArrowRightAlt size='32' />
        </CvButton>
      </div>
    </StyledAboutMe>
  );
};
