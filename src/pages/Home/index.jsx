import { Header } from '../../components/Header';
import { MainView } from '../../components/MainView';
import { Achievements } from '../../components/Achievements';
import { Services } from '../../components/Services';
import { SectionContainer } from '../../containers/SectionContainer';
import { AboutMe } from '../../components/AboutMe';
import { Skills } from '../../components/Skills';
import { Projects } from '../../components/Projects';

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
        <Projects />
      </SectionContainer>
    </>
  );
};
