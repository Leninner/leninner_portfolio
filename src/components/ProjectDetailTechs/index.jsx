import { ProjectDetailTechsContainer, TechItem } from './styles'
import { TechItemComponent } from '../TechItemComponent'
import { Description, Title } from '../ProjectTechInfo/styles'

export const ProjectDetailTechs = ({ techInfo }) => {
  return (
    <ProjectDetailTechsContainer>
      <Title>Techs Info</Title>
      <Description>
        {techInfo.map((tech) => (
          <TechItemComponent TechItem={TechItem} {...tech} />
        ))}
      </Description>
    </ProjectDetailTechsContainer>
  )
}
