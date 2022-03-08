import { Img, MainInfoContainer, InfoContainer, Button } from './styles';

export const ProjectMainInfo = ({ colorToUse, title, description, preview }) => {
  const validLetters = 200;

  return (
    <MainInfoContainer colorToUse={colorToUse}>
      <Img
        src='https://natanaelexe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdkdec5eni%2Fimage%2Fupload%2Fv1629847772%2FScreen_Shot_2021_08_24_at_15_48_12_fb2f9ce34e.png&w=1920&q=80'
        alt=''
      />
      <InfoContainer>
        <h1>{title}</h1>
        <p>{description.slice(0, validLetters)}...</p>
        <div>
          <Button details>Details</Button>
          <Button>
            <a href={preview} target='_blank' rel='noreferrer'>
              Visit
            </a>
          </Button>
        </div>
      </InfoContainer>
    </MainInfoContainer>
  );
};
