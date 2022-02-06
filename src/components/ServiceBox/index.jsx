import { ServiceBoxContainer, ServiceIntro, Description, Features, KnowMore } from './styles';
import { AiFillCheckCircle, AiOutlineArrowRight } from 'react-icons/ai';

export const ServiceBox = ({ title, description, image, features }) => {
  return (
    <ServiceBoxContainer>
      <ServiceIntro>
        {image}
        <h3>{title}</h3>
      </ServiceIntro>
      <Description>{description}</Description>
      <Features>
        <ul>
          {features.map((value, index) => (
            <li key={index}>
              <AiFillCheckCircle />
              {value}
            </li>
          ))}
        </ul>
      </Features>
      <KnowMore>
        <h3>Want to know more ?</h3>
        <a href='/'>
          Contact me <AiOutlineArrowRight />
        </a>
      </KnowMore>
    </ServiceBoxContainer>
  );
};
