import { ProjectMainInfo } from '../ProjectMainInfo';
import { ProjectTechInfo } from '../ProjectTechInfo';
import { StyledProjectInfo } from './styles';

export const ProjectInfo = () => {
  return (
    <StyledProjectInfo>
      <ProjectTechInfo />
      <ProjectMainInfo />
    </StyledProjectInfo>
  );
};
