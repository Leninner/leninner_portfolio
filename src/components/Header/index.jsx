import { StyledHeader, StyledNavLink, NavigationDesktop, ImgLogo, NavigationMobile, StyledLink } from './styles';
import Logo from '../../utils/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { animateScroll } from 'react-scroll/modules';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    animateScroll.scrollToTop({
      duration: 500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <StyledHeader>
      <ImgLogo src={Logo} alt='LE' />
      <NavigationDesktop>
        <StyledNavLink to='/home' onClick={handleScroll}>
          HOME
        </StyledNavLink>
        <StyledLink to='services' spy={true} smooth={true} offset={-70} duration={500}>
          SERVICES
        </StyledLink>
        <StyledLink to='about' spy={true} smooth={true} offset={-70} duration={500}>
          ABOUT ME
        </StyledLink>
        <StyledLink to='skills'>SKILLS</StyledLink>
        <StyledLink to='projects'>PROJECTS</StyledLink>
        <StyledLink to='contact'>CONTACT</StyledLink>
      </NavigationDesktop>

      {isOpen ? <AiOutlineClose size='25' onClick={handleClick} /> : <AiOutlineMenu size='25' onClick={handleClick} />}

      <NavigationMobile onClick={handleClick} isOpen={isOpen}>
        <StyledNavLink to='/home'>HOME</StyledNavLink>
        <StyledLink to='services' spy={true} smooth={true} offset={-70} duration={500}>
          SERVICES
        </StyledLink>
        <StyledLink to='about' spy={true} smooth={true} offset={-70} duration={500}>
          ABOUT ME
        </StyledLink>
        <StyledLink to='#skills'>SKILLS</StyledLink>
        <StyledLink to='#projects'>PROJECTS</StyledLink>
        <StyledNavLink to='#contact'>CONTACT</StyledNavLink>
      </NavigationMobile>
    </StyledHeader>
  );
};
