import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectsContainer = styled.div`
  width: 100%;
  background: #212428;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    background: #212428;
    display: flex;
    justify-content: center;
    z-index: 100;
    box-shadow: 0px 0px 1px 0px rgba(4, 229, 133, 0.6);
    margin-bottom: 2rem;

    .back {
      color: white;
      height: 85px;
      max-width: 1200px;
      width: 100%;
      display: flex;
      align-items: center;

      p {
        cursor: pointer;
        display: flex;
        align-items: center;

        svg {
          margin-right: 10px;
        }

        &:hover {
          color: #03bd9a;
          text-shadow: 0 0 0.2rem #03bd9a;
        }
      }
    }

    @media (max-width: 768px) {
      padding-left: 1.5rem;
    }
  }

  section {
    max-width: 1200px;
    width: 100%;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Span = styled(Link)`
  text-decoration: none;
`;
