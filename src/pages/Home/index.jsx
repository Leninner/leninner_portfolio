import { Header } from '../../components/Header';
import { MainView } from '../../components/MainView';
import { Achievements } from '../../components/Achievements';
import { Services } from '../../components/Services';
import { SectionContainer } from '../../containers/SectionContainer';
import { AboutMe } from '../../components/AboutMe';

export const Home = () => {
  return (
    <>
      <Header />
      <MainView />
      <Achievements />
      <SectionContainer id='services'>
        <Services />
      </SectionContainer>
      <SectionContainer id='about'>
        <AboutMe />
      </SectionContainer>
    </>
  );
};
