import styled from 'styled-components';
import { PingAnimation } from '../../styles/Animations';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #333;

  h1 {
    font-size: 5rem;
    text-align: center;

    ::selection {
      color: black;
      background: yellow;
    }

    span {
      color: rgb(239 68 68);
      ::selection {
        color: black;
        background: yellow;
      }
    }
  }

  p {
    ::selection {
      color: black;
      background: yellow;
    }
  }

  img {
    width: 30%;
    margin-top: 1rem;
    ${PingAnimation()};

    &::selection {
      color: transparent;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 4rem;
      text-align: center;
      padding: 0;
    }

    img {
      top: -50px;
      left: calc(50% - 175px);
      width: 90%;
    }

    p {
      text-align: center;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;
