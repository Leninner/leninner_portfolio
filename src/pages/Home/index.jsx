import { Header } from '../../components/Header';
import { MainView } from '../../components/MainView';
import { Achievements } from '../../containers/Achievements';
import { Services } from '../../containers/Services';
import { SectionContainer } from '../../containers/SectionContainer';
import { AboutMe } from '../../containers/AboutMe';
import { Skills } from '../../containers/Skills';

import { ProjectsContainer } from '../../containers/ProjectsContainer';

export const Home = () => {
  return (
    <>
      <Header />
      <MainView />
      <Achievements />
      <SectionContainer id='services' bgColor='#212428'>
        <Services />
      </SectionContainer>
      <SectionContainer id='about' bgColor='#1c1e20'>
        <AboutMe />
      </SectionContainer>
      <SectionContainer id='skills' bgColor='#212428'>
        <Skills />
      </SectionContainer>
      <SectionContainer id='projects' bgColor='#212428'>
        <ProjectsContainer />
      </SectionContainer>
    </>
  );
};
