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

  const navItems = [
    {
      name: 'About Me',
      link: 'about',
    },
    {
      name: 'Services',
      link: 'services',
    },
    {
      name: 'Skills',
      link: 'skills',
    },
    {
      name: 'Projects',
      link: 'projects',
    },
    {
      name: 'Blog',
      link: 'blog',
    },
    {
      name: 'Contact',
      link: 'contact',
    },
  ];

  return (
    <StyledHeader>
      <ImgLogo src={Logo} alt='LE' onClick={handleScroll} />
      <NavigationDesktop>
        <StyledNavLink to='/' onClick={handleScroll}>
          HOME
        </StyledNavLink>
        {navItems.map(({ name, link }, index) => (
          <StyledLink to={link} spy='true' smooth='true' offset={-70} duration={500} key={index}>
            {name.toUpperCase()}
          </StyledLink>
        ))}
      </NavigationDesktop>

      {isOpen ? <AiOutlineClose size='25' onClick={handleClick} /> : <AiOutlineMenu size='25' onClick={handleClick} />}

      <NavigationMobile isOpen={isOpen}>
        <StyledNavLink to='/' onClick={handleScroll}>
          HOME
        </StyledNavLink>
        {navItems.map(({ name, link }, index) => (
          <StyledLink to={link} spy='true' smooth='true' offset={-70} duration={500} onClick={handleClick} key={index}>
            {name.toUpperCase()}
          </StyledLink>
        ))}
      </NavigationMobile>
    </StyledHeader>
  );
};
