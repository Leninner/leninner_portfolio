import { TechInfoContainer, Description, TechItem, Title } from './styles';
import { SiRedux, SiStyledcomponents, SiReact } from 'react-icons/si';
import { TechItemComponent } from '../TechItemComponent';

export const ProjectTechInfo = ({ colorToUse }) => {
  return (
    <TechInfoContainer>
      <Title>Tech Info</Title>
      {/* Este div debe tener scroll */}
      <Description>
        <TechItemComponent TechItem={TechItem} Icon={SiReact} />
        <TechItemComponent TechItem={TechItem} Icon={SiRedux} />
        <TechItemComponent TechItem={TechItem} Icon={SiStyledcomponents} />
        <TechItemComponent TechItem={TechItem} Icon={SiStyledcomponents} />
      </Description>
    </TechInfoContainer>
  );
};
