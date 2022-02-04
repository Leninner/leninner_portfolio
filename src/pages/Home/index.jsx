import { Header } from '../../components/Header';
import { MainView } from '../../components/MainView';
import { Achievements } from '../../components/Achievements';
import { Services } from '../../components/Services';

export const Home = () => {
  return (
    <>
      <Header />
      <MainView />
      <Achievements />
      <Services />
    </>
  );
};
