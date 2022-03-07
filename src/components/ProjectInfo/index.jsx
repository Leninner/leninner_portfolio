import { ProjectMainInfo } from '../ProjectMainInfo';
import { ProjectTechInfo } from '../ProjectTechInfo';
import { StyledProjectInfo, Container } from './styles';

export const ProjectInfo = () => {
  const posiblesColors = ['#00b4d8', '#0091ad', '#ff7d00', '#ff0054'];

  const colorToUse = posiblesColors[Math.floor(Math.random() * posiblesColors.length)];

  return (
    <StyledProjectInfo>
      <Container>
        <ProjectTechInfo colorToUse={colorToUse} />
        <ProjectMainInfo colorToUse={colorToUse} />
      </Container>
    </StyledProjectInfo>
  );
};
