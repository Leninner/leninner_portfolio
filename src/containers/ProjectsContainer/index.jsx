import { StyledProjectsContainer, Title, Container, Description } from './styles';
import { ProjectInfo } from '../../components/ProjectInfo';

export const ProjectsContainer = () => {
  return (
    <StyledProjectsContainer>
      <Title>
        <span>Featured</span> Projects
      </Title>
      <Description>
        Each project was built with specific tools, technology, and design patterns based on the client's needs and the
        type of project
      </Description>
      <Container>
        <ProjectInfo />
        <ProjectInfo />
      </Container>
    </StyledProjectsContainer>
  );
};
