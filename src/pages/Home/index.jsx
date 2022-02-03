import { Header } from '../../components/Header';
import { MainView } from '../../components/MainView';
import { Achievments } from '../../components/Achievments';
import { Services } from '../../components/Services';

export const Home = () => {
  return (
    <>
      <Header />
      <MainView />
      <Achievments />
      <Services />
    </>
  );
};
