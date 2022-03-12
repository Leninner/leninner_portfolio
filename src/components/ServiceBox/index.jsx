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
        <a href='https://api.whatsapp.com/send?phone=593979424062&text=Hi%20Lenin%20I%20would%20like%20to%20know%20more%20about%20the%20things%20you%20do'>
          Contact me <AiOutlineArrowRight />
        </a>
      </KnowMore>
    </ServiceBoxContainer>
  );
};
