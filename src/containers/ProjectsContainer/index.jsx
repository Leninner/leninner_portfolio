import { StyledProjectsContainer, Title, Container, Description, ShowAllButton } from './styles';
import { ProjectInfo } from '../../components/ProjectInfo';
import { projectsData } from '../../assets/data/projectsData';

export const ProjectsContainer = () => {
  const projectsToDisplay = projectsData.splice(0, 2);

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
        {projectsToDisplay.map((project) => (
          <ProjectInfo {...project} key={project.id} />
        ))}
      </Container>

      <ShowAllButton to='/'>Show All</ShowAllButton>
    </StyledProjectsContainer>
  );
};
