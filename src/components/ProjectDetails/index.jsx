import { ProjectDetailTechs } from '../ProjectDetailTechs';
import { ProjectDetailsContainer } from './styles';
import { ProjectDetailOverview } from '../ProjectDetailOverview';

export const ProjectDetails = ({ techInfo }) => {
  return (
    <ProjectDetailsContainer>
      <ProjectDetailOverview />
      <ProjectDetailTechs techInfo={techInfo} />
    </ProjectDetailsContainer>
  );
};
