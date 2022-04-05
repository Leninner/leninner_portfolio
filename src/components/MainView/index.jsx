import {
  Me,
  AsideLeft,
  StyledMainView,
  SeeProjects,
  ButtonIcons,
  ButtonsContainer,
  ButtonLinkedIn,
  Span,
  BoxSocial,
} from './styles';
import { MdArrowRightAlt } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';
import MyImage from '../../utils/me.png';
import { motion } from 'framer-motion';

export const MainView = () => {
  return (
    <StyledMainView>
      <AsideLeft>
        <Span
          as={motion.span}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}>
          Hello, I'm
        </Span>
        <motion.h1
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100,
          }}>
          Lenin Mazabanda
        </motion.h1>
        <motion.h4
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100,
          }}>
          Front-end Developer
        </motion.h4>

        <ButtonsContainer>
          <SeeProjects to='projects' spy='true' smooth='true' offset={-70} duration={500}>
            <span>
              See Projects <MdArrowRightAlt size='32' />
            </span>
          </SeeProjects>

          <BoxSocial>
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
          </BoxSocial>
        </ButtonsContainer>
      </AsideLeft>

      <Me src={MyImage} alt='me' />
    </StyledMainView>
  );
};
