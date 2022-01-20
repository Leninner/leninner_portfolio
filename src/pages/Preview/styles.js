import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 4rem;
      text-align: center;
      padding: 0;
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
