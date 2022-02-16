import { Header } from '../../components/Header';
import { MainView } from '../../components/MainView';
import { Achievements } from '../../components/Achievements';
import { Services } from '../../components/Services';
import { SectionContainer } from '../../containers/SectionContainer';
import { AboutMe } from '../../components/AboutMe';
import { Skills } from '../../components/Skills';

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
      <Skills />
    </>
  );
};
