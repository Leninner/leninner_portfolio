import { Title, ServicesBoxContainer } from './styles';
import { ServiceBox } from '../../components/ServiceBox';
import { servicesData } from '../../assets/data/servicesData';

export const Services = () => {
  return (
    <>
      <Title>
        <span>What I </span>am do
      </Title>
      <ServicesBoxContainer>
        {servicesData.map((value, index) => (
          <ServiceBox key={index} {...value} />
        ))}
      </ServicesBoxContainer>
    </>
  );
};
