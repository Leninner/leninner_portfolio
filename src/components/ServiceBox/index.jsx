import { ServiceBoxContainer } from './styles';

export const ServiceBox = ({ title, description, image }) => {
  return (
    <ServiceBoxContainer>
      {image}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </ServiceBoxContainer>
  );
};
