import { ProjectDetailOverviewContainer, Img, ProjectInfo, ProjectTitle, Button, ButtonContainer } from './styles';
import { GoRepo } from 'react-icons/go';
import { AiOutlineLink } from 'react-icons/ai';

export const ProjectDetailOverview = () => {
  return (
    <ProjectDetailOverviewContainer>
      <Img src='https://natanaelexe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdkdec5eni%2Fimage%2Fupload%2Fv1629847772%2FScreen_Shot_2021_08_24_at_15_48_12_fb2f9ce34e.png&w=1920&q=75' />

      <ProjectInfo>
        <ProjectTitle>
          <h1>
            <span>Shoppingify </span>List
          </h1>
          <ButtonContainer>
            <Button repo to='/'>
              Repository <GoRepo />
            </Button>
            <Button to='/'>
              Visit <AiOutlineLink />
            </Button>
          </ButtonContainer>
        </ProjectTitle>

        <p>
          This project is an Airbnb clone, this clone includes the following features: Search stays by location, Choose
          Check-in and Check-out date, Show the price per night for each stay on a Map base on their location, Show
          popup with stay details when you click on a marker on the Map, and a details page for each stay. I build this
          project to show my ability with React, Tailwind, Mapbox, APIs and show how I pay a lot of attention to
          details.
        </p>
      </ProjectInfo>
    </ProjectDetailOverviewContainer>
  );
};
