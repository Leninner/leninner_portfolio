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
    setIsOpen(!isOpen);
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
        <StyledLink to='skills' spy={true} smooth={true} offset={-70} duration={500}>
          SKILLS
        </StyledLink>
        <StyledLink to='projects' spy={true} smooth={true} offset={-70} duration={500}>
          PROJECTS
        </StyledLink>
        <StyledLink to='contact' spy={true} smooth={true} offset={-70} duration={500}>
          CONTACT
        </StyledLink>
      </NavigationDesktop>

      {isOpen ? <AiOutlineClose size='25' onClick={handleClick} /> : <AiOutlineMenu size='25' onClick={handleClick} />}

      <NavigationMobile isOpen={isOpen}>
        <StyledNavLink to='/home' onClick={handleScroll}>
          HOME
        </StyledNavLink>
        <StyledLink to='services' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClick}>
          SERVICES
        </StyledLink>
        <StyledLink to='about' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClick}>
          ABOUT ME
        </StyledLink>
        <StyledLink to='skills' onClick={handleClick}>
          SKILLS
        </StyledLink>
        <StyledLink to='projects' onClick={handleClick}>
          PROJECTS
        </StyledLink>
        <StyledNavLink to='contact' onClick={handleClick}>
          CONTACT
        </StyledNavLink>
      </NavigationMobile>
    </StyledHeader>
  );
};
