import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 27px 140px;
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 16px;
  font-size: 11px;
  letter-spacing: 0.5px;
  color: #c0c0c0;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;
