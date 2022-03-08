import { Header } from '../../components/Header';
import { MainView } from '../../components/MainView';
import { Achievements } from '../../containers/Achievements';
import { Services } from '../../containers/Services';
import { SectionContainer } from '../../containers/SectionContainer';
import { AboutMe } from '../../containers/AboutMe';
import { Skills } from '../../containers/Skills';
import { ProjectsContainer } from '../../containers/ProjectsContainer';
import { Blog } from '../../containers/Blog';

export const Home = () => {
  return (
    <>
      <Header />
      <MainView />
      <Achievements />
      <SectionContainer id='about' bgColor='#1c1e20'>
        <AboutMe />
      </SectionContainer>

      <SectionContainer id='services' bgColor='#212428'>
        <Services />
      </SectionContainer>

      <SectionContainer id='skills' bgColor='#212428'>
        <Skills />
      </SectionContainer>

      <SectionContainer id='projects' bgColor='#212428'>
        <ProjectsContainer />
      </SectionContainer>

      <SectionContainer id='blog' bgColor='#212428'>
        <Blog />
      </SectionContainer>

      <SectionContainer id='contact' bgColor='#212428'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1>Contact</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt
                consectetur, nisi nunc consequat nunc, eget congue nisl nunc euismod nunc. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod, nisi eget congue consectetur,
                nisi nunc consequat nunc, eget congue nisl nunc euismod nunc.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};
