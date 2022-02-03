import { StyledServicesContainer, Title, ServicesBoxContainer } from './styles';
import { ServiceBox } from '../ServiceBox';
import { servicesData } from '../../data/servicesData';

export const Services = () => {
  return (
    <StyledServicesContainer id='services'>
      <Title>
        <span>Ser</span>vices
      </Title>
      <ServicesBoxContainer>
        {servicesData.map((value) => (
          <ServiceBox key={value} {...value} />
        ))}
      </ServicesBoxContainer>
    </StyledServicesContainer>
  );
};
