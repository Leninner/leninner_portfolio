import { Title, ServicesBoxContainer } from './styles';
import { ServiceBox } from '../ServiceBox';
import { servicesData } from '../../data/servicesData';

export const Services = () => {
  return (
    <>
      <Title>
        <span>Ser</span>vices
      </Title>
      <ServicesBoxContainer>
        {servicesData.map((value, index) => (
          <ServiceBox key={index} {...value} />
        ))}
      </ServicesBoxContainer>
    </>
  );
};
