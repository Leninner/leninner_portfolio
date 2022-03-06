import { TechInfoContainer, Description, TechItem, Title } from './styles';
import { DiGithubBadge } from 'react-icons/di';
import { SiRedux, SiStyledcomponents, SiReact } from 'react-icons/si';
import { TechItemComponent } from '../TechItemComponent';

export const ProjectTechInfo = () => {
  return (
    <TechInfoContainer>
      <Title>Tech Info</Title>
      {/* Este div debe tener scroll */}
      <Description>
        <TechItemComponent TechItem={TechItem} Icon={SiReact} />
        <TechItemComponent TechItem={TechItem} Icon={SiRedux} />
        <TechItemComponent TechItem={TechItem} Icon={SiStyledcomponents} />

        <TechItem>
          <DiGithubBadge size='90' />
          <div>
            <h2>GitHub</h2>
            <p>React is the most popular UI library that allows dev. Build great UI and fast app…</p>
          </div>
        </TechItem>
      </Description>
    </TechInfoContainer>
  );
};
