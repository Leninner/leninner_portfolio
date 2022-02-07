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

export const MainView = () => {
  return (
    <StyledMainView>
      <AsideLeft>
        <Span>Hello, I'm</Span>
        <h1>Lenin Mazabanda</h1>
        <h4>Front-end Developer</h4>

        <ButtonsContainer>
          <SeeProjects>
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
      <Me
        src='https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=838&q=80'
        alt=''
      />
    </StyledMainView>
  );
};
