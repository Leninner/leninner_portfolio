import { ProjectDetailTechs } from '../ProjectDetailTechs';
import { ProjectDetailsContainer, Return } from './styles';
import { ProjectDetailOverview } from '../ProjectDetailOverview';
import { useParams } from 'react-router-dom';
import { projectsData } from '../../assets/data/projectsData';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect } from 'react';

export const ProjectDetails = (props) => {
  const { techInfo } = props;
  const { id } = useParams();

  const project = projectsData.find((project) => project.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {id ? (
        <>
          <Return to='/home'>
            <span>
              <BiArrowBack />
              <p>Back</p>
            </span>
          </Return>

          <ProjectDetailsContainer ids={id}>
            <ProjectDetailOverview {...project} />
            <ProjectDetailTechs techInfo={project.techInfo} />
          </ProjectDetailsContainer>
        </>
      ) : (
        <ProjectDetailsContainer>
          <ProjectDetailOverview {...props} />
          <ProjectDetailTechs techInfo={techInfo} />
        </ProjectDetailsContainer>
      )}
    </>
  );
};
