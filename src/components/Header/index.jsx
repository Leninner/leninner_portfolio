import { StyledHeader, StyledNavLink, NavigationDesktop, ImgLogo, NavigationMobile } from './styles';
import Logo from '../../utils/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <ImgLogo src={Logo} alt='LE' />
      <NavigationDesktop>
        <StyledNavLink to='/home'>HOME</StyledNavLink>
        <StyledNavLink to='#services'>SERVICES</StyledNavLink>
        <StyledNavLink to='#about'>ABOUT ME</StyledNavLink>
        <StyledNavLink to='#skills'>SKILLS</StyledNavLink>
        <StyledNavLink to='#projects'>PROJECTS</StyledNavLink>
        <StyledNavLink to='#contact'>CONTACT</StyledNavLink>
      </NavigationDesktop>

      {isOpen ? <AiOutlineClose size='25' onClick={handleClick} /> : <AiOutlineMenu size='25' onClick={handleClick} />}

      <NavigationMobile onClick={handleClick} isOpen={isOpen}>
        <StyledNavLink to='/home'>HOME</StyledNavLink>
        <StyledNavLink to='#services'>SERVICES</StyledNavLink>
        <StyledNavLink to='#about'>ABOUT ME</StyledNavLink>
        <StyledNavLink to='#skills'>SKILLS</StyledNavLink>
        <StyledNavLink to='#projects'>PROJECTS</StyledNavLink>
        <StyledNavLink to='#contact'>CONTACT</StyledNavLink>
      </NavigationMobile>
    </StyledHeader>
  );
};
