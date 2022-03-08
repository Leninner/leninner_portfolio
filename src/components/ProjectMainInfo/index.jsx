import { Img, MainInfoContainer, InfoContainer, Button } from './styles';
import { Link } from 'react-router-dom';

export const ProjectMainInfo = ({ colorToUse, title, description, preview, image, id }) => {
  const validLetters = 200;

  return (
    <MainInfoContainer colorToUse={colorToUse}>
      <Img src={image} alt='' />
      <InfoContainer>
        <h1>{title}</h1>
        <p>{description.slice(0, validLetters)}...</p>
        <div>
          <Link to={`/projects/${id}`}>
            <Button details>Details</Button>
          </Link>

          <a href={preview} target='_blank' rel='noreferrer'>
            <Button>Visit</Button>
          </a>
        </div>
      </InfoContainer>
    </MainInfoContainer>
  );
};
