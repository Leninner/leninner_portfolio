import { Header } from '../../components/Header'
import { MainView } from '../../components/MainView'
import { Achievements } from '../../containers/Achievements'
import { Services } from '../../containers/Services'
import { SectionContainer } from '../../containers/SectionContainer'
import { AboutMe } from '../../containers/AboutMe'
import { Skills } from '../../containers/Skills'
import { ProjectsContainer } from '../../containers/ProjectsContainer'
import { Blog } from '../../containers/Blog'
import Helmet from 'react-helmet'

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="
          My name is Lenin Mazabanda, I am a software developer with a passion for building software that is easy to use and easy to maintain.
        "
        />
      </Helmet>
      <Header />

      <MainView />

      <Achievements />

      <SectionContainer id="about" bgColor="#1c1e20">
        <AboutMe />
      </SectionContainer>

      <SectionContainer id="services" bgColor="#212428">
        <Services />
      </SectionContainer>

      <SectionContainer id="skills" bgColor="#212428">
        <Skills />
      </SectionContainer>

      <SectionContainer id="projects" bgColor="#212428">
        <ProjectsContainer />
      </SectionContainer>

      <SectionContainer id="blog" bgColor="#212428">
        <Blog />
      </SectionContainer>
    </>
  )
}
