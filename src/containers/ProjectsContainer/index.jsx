import { StyledProjectsContainer, Title } from './styles';
import { ProjectInfo } from '../../components/ProjectInfo';

export const ProjectsContainer = () => {
  return (
    <StyledProjectsContainer>
      <Title>
        <span>Featured</span> Projects
      </Title>

      <ProjectInfo />
    </StyledProjectsContainer>
  );
};
