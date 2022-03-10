import { ProjectsContainer, Span } from './styles';
import { projectsData } from '../../assets/data/projectsData';
import { ProjectDetails } from '../../components/ProjectDetails';
import { BiArrowBack } from 'react-icons/bi';
import Helmet from 'react-helmet';

export const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Lenin Mazabanda</title>
        <meta name='description' content='Projects of my portfolio' />
      </Helmet>

      <ProjectsContainer>
        <header>
          <Span className='back' to='/home'>
            <p>
              <BiArrowBack />
              Back
            </p>
          </Span>
        </header>

        <section>
          {projectsData.map((project) => (
            <ProjectDetails {...project} key={project.id} />
          ))}
        </section>
      </ProjectsContainer>
    </>
  );
};
