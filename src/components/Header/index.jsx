import { StyledHeader, StyledNavLink, Navigation } from './styles';

export const Header = () => {
  return (
    <StyledHeader>
      <img src='' alt='LE' />
      <Navigation>
        <StyledNavLink to='/'>HOME</StyledNavLink>
        <StyledNavLink to='#services'>SERVICES</StyledNavLink>
        <StyledNavLink to='#about'>ABOUT ME</StyledNavLink>
        <StyledNavLink to='#skills'>SKILLS</StyledNavLink>
        <StyledNavLink to='#projects'>PROJECTS</StyledNavLink>
        <StyledNavLink to='#contact'>CONTACT</StyledNavLink>
      </Navigation>
    </StyledHeader>
  );
};
