import { ProjectDetailOverviewContainer, Img, ProjectInfo, ProjectTitle, Button, ButtonContainer } from './styles';
import { GoRepo } from 'react-icons/go';
import { AiOutlineLink } from 'react-icons/ai';

export const ProjectDetailOverview = ({ title, preview, description, image, repo }) => {
  const titleProject = title.split(' ');

  return (
    <ProjectDetailOverviewContainer>
      <Img src={image} />

      <ProjectInfo>
        <ProjectTitle>
          <h1>
            <span>{titleProject[0]}</span> {titleProject[1]}
          </h1>
          <ButtonContainer>
            <Button repo href={repo} target='_blank' rel='noreferrer'>
              <span>Repository</span> <GoRepo />
            </Button>
            <Button href={preview} target='_blank' rel='noreferrer'>
              <span>Visit </span>
              <AiOutlineLink />
            </Button>
          </ButtonContainer>
        </ProjectTitle>

        <p>{description}</p>
      </ProjectInfo>
    </ProjectDetailOverviewContainer>
  );
};
