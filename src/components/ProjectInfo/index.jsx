import { ProjectMainInfo } from '../ProjectMainInfo';
import { ProjectTechInfo } from '../ProjectTechInfo';
import { StyledProjectInfo, Container } from './styles';

export const ProjectInfo = ({ title, description, image, techInfo, preview }) => {
  const posiblesColors = ['#00b4d8', '#0091ad', '#ff7d00', '#ff0054'];

  const colorToUse = posiblesColors[Math.floor(Math.random() * posiblesColors.length)];

  console.log(techInfo);

  return (
    <StyledProjectInfo>
      <Container>
        <ProjectTechInfo techInfo={techInfo} />
        <ProjectMainInfo
          colorToUse={colorToUse}
          title={title}
          description={description}
          image={image}
          preview={preview}
        />
      </Container>
    </StyledProjectInfo>
  );
};
