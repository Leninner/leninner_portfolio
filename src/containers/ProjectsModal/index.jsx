import { ProjectsContainer } from './styles';
import { createPortal } from 'react-dom';
import { projectsData } from '../../assets/data/projectsData';
import { ProjectDetails } from '../../components/ProjectDetails';

const Projects = () => {
  return (
    <ProjectsContainer>
      <section>
        <span className='back'>Back</span>
        {projectsData.map((project) => (
          <ProjectDetails {...project} key={project.id} />
        ))}
      </section>
    </ProjectsContainer>
  );
};

export const ProjectsModal = () => createPortal(<Projects />, document.getElementById('projects'));
