import {
  Me,
  AsideLeft,
  StyledMainView,
  SeeProjects,
  ButtonIcons,
  ButtonsContainer,
  ButtonLinkedIn,
  Span,
} from './styles';
import { MdArrowRightAlt } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';
import MyImage from '../../utils/me.png';

export const MainView = () => {
  return (
    <StyledMainView>
      <AsideLeft>
        <Span>Hello, I'm</Span>
        <h1>Lenin Mazabanda</h1>
        <h4>Front-end Developer</h4>

        <ButtonsContainer>
          <SeeProjects to='projects' spy='true' smooth='true' offset={-70} duration={500}>
            <span>
              See Projects <MdArrowRightAlt size='32' />
            </span>
          </SeeProjects>

          <a href='https://www.linkedin.com/in/leninner/' target='_blank' rel='noreferrer'>
            <ButtonLinkedIn>LinkedIn</ButtonLinkedIn>
          </a>

          <a href='https://github.com/leninner' target='_blank' rel='noreferrer'>
            <ButtonIcons>
              <AiFillGithub />
            </ButtonIcons>
          </a>

          <a href='https://medium.com/@leninner' target='_blank' rel='noreferrer'>
            <ButtonIcons>
              <BsMedium />
            </ButtonIcons>
          </a>
        </ButtonsContainer>
      </AsideLeft>

      <Me src={MyImage} alt='me' />
    </StyledMainView>
  );
};
