import { StyledProjectsContainer, Title, Container, Description, ShowAllButton } from './styles';
import { ProjectInfo } from '../../components/ProjectInfo';
import { projectsData } from '../../assets/data/projectsData';

export const ProjectsContainer = () => {
  const projects = [...projectsData];
  const projectsToDisplay = projects.slice(0, 2);

  return (
    <StyledProjectsContainer>
      <Title>
        <span>Featured</span> Projects
      </Title>

      <Description>
        Each project was built with <strong>high value tools</strong> like React, Redux and always looking to write a
        <strong>scalable and performant code.</strong>
      </Description>

      <Container>
        {projectsToDisplay.map((project) => (
          <ProjectInfo {...project} key={project.id} />
        ))}
      </Container>

      <ShowAllButton to='/projects'>Show All</ShowAllButton>
    </StyledProjectsContainer>
  );
};
