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
  z-index: 10;

  h3 {
    font-size: 1.5rem;
    font-weight: normal;
    color: white;
    padding: 0 0 0 50px;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    .projects-li:hover div,
    div div:hover {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;
    }

    .projects:hover div,
    .projects div:hover {
      right: 26.5%;
    }

    .rrss:hover div,
    .rrss div:hover {
      right: 16.2%;
    }

    li {
      margin: 0 10px;
      color: white;
      cursor: pointer;
      padding: 0 0 10px 0;

      div {
        display: none;
        position: absolute;
        align-items: flex-end;
        justify-content: center;
        flex-direction: column;
        padding-top: 10px;

        a {
          width: 95%;
          height: 50px;
          color: #fe734f;
          background: white;
          display: flex;
          align-items: center;
          justify-content: end;
          padding: 0 10px;
          text-decoration: none;
          font-weight: 600;

          svg {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
