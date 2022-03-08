import { ProjectDetailTechs } from '../ProjectDetailTechs';
import { ProjectDetailsContainer } from './styles';
import { ProjectDetailOverview } from '../ProjectDetailOverview';

export const ProjectDetails = (props) => {
  const { techInfo } = props;
  return (
    <ProjectDetailsContainer>
      <ProjectDetailOverview {...props} />
      <ProjectDetailTechs techInfo={techInfo} />
    </ProjectDetailsContainer>
  );
};
