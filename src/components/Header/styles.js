import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 4px;
  background-color: transparent;
  position: fixed;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    li {
      margin: 0 10px;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;
