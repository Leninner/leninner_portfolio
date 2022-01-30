import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SideInAnimation } from '../../styles/Animations';

export const StyledHeader = styled.header`
  padding: 25px 140px 25px 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;

  svg {
    color: white;
    display: none;
  }

  @media (max-width: 768px) {
    padding: 5%;

    svg {
      display: block;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 16px;
  font-size: 11px;
  letter-spacing: 0.5px;
  color: #c0c0c0;

  @media (max-width: 768px) {
    font-size: 20px;
    width: 100%;
    padding: 20px;
    margin: 0;
    text-align: center;
  }
`;

export const NavigationDesktop = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImgLogo = styled.img`
  width: 35px;
`;

export const NavigationMobile = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    position: absolute;
    top: 100%;
    width: 100%;
    height: 100vh;
    background: #212428;
    transition: all 0.3s ease-in-out;
    z-index: 1;
    opacity: 0.5;
    ${SideInAnimation()};
  }
`;
