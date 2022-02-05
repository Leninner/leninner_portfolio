import { StyledSectionContainer } from './styles';

export const SectionContainer = ({ children, id }) => (
  <StyledSectionContainer id={id}>{children}</StyledSectionContainer>
);
