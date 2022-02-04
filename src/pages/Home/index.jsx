import { Header } from '../../components/Header';
import { MainView } from '../../components/MainView';
import { Achievements } from '../../components/Achievements';
import { Services } from '../../components/Services';
import { SectionContainer } from '../../components/SectionContainer';

export const Home = () => {
  return (
    <>
      <Header />
      <MainView />
      <Achievements />
      <SectionContainer id='services'>
        <Services />
      </SectionContainer>
    </>
  );
};
