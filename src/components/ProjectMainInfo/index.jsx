import { Img, MainInfoContainer, InfoContainer, Button } from './styles';

export const ProjectMainInfo = ({ colorToUse }) => {
  const validLetters = 200;

  const string =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, saepe sapiente blanditiis harum hic dolorem porro similique, mollitia ipsum sequi dignissimos velit perferendis provident, perspiciatis iusto animi atque. Facere, cupiditate?';

  return (
    <MainInfoContainer colorToUse={colorToUse}>
      <Img
        src='https://natanaelexe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdkdec5eni%2Fimage%2Fupload%2Fv1629847772%2FScreen_Shot_2021_08_24_at_15_48_12_fb2f9ce34e.png&w=1920&q=80'
        alt=''
      />
      <InfoContainer>
        <h1>Shoppingify List</h1>
        <p>{string.slice(0, validLetters)}...</p>
        <div>
          <Button details>Details</Button>
          <Button>Visit</Button>
        </div>
      </InfoContainer>
    </MainInfoContainer>
  );
};