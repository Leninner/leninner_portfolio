import { TechInfoContainer, Description, TechItem, Title } from './styles'
import { TechItemComponent } from '../TechItemComponent'

export const ProjectTechInfo = ({ techInfo }) => {
  console.log(techInfo)
  return (
    <TechInfoContainer>
      <Title>Tech Info</Title>
      {/* Este div debe tener scroll */}
      <Description>
        {techInfo.map((tech, index) => (
          <TechItemComponent TechItem={TechItem} {...tech} key={index} />
        ))}
      </Description>
    </TechInfoContainer>
  )
}
