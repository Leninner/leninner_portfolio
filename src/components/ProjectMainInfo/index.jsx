import { Img, MainInfoContainer, InfoContainer, Button } from './styles';

export const ProjectMainInfo = ({ colorToUse, title, description, preview, image }) => {
  const validLetters = 200;

  return (
    <MainInfoContainer colorToUse={colorToUse}>
      <Img src={image} alt='' />
      <InfoContainer>
        <h1>{title}</h1>
        <p>{description.slice(0, validLetters)}...</p>
        <div>
          <Button details>Details</Button>
          <a href={preview} target='_blank' rel='noreferrer'>
            <Button>Visit</Button>
          </a>
        </div>
      </InfoContainer>
    </MainInfoContainer>
  );
};
