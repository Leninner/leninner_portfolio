import { StyledSectionContainer } from './styles'

export const SectionContainer = ({ children, id, bgColor }) => (
  <StyledSectionContainer id={id} bgColor={bgColor}>
    {children}
  </StyledSectionContainer>
)
