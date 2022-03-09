import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  height: 100%;
  max-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-height: none;
  }

  ${({ ids }) =>
    ids &&
    `
    max-width: 1200px;
    margin: 0 auto;
    `}
`;

export const Return = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  text-decoration: none;
  height: 100%;
  color: white;

  span {
    display: flex;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    color: white;

    &:hover {
      color: #03bd9a;
      text-shadow: 0 0 0.2rem #03bd9a;
    }

    p {
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    padding-left: 1.5rem;
  }
`;
