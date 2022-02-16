import styled from 'styled-components';

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0;

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: white;

    span {
      color: #03bd9a;
    }
  }

  @media (max-width: 768px) {
    h1 {
      text-align: center;
    }
  }
`;

export const SkillsItems = styled.div`
  display: flex;

  div {
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1.5rem;
    justify-content: center;

    span {
      font-size: 1.2rem;
      color: #c1c1c1;
      margin-top: 1rem;
    }

    svg {
      filter: drop-shadow(0 0 0.4rem #03bd9a);
    }

    &:hover {
      span {
        filter: drop-shadow(0 0 0.1rem #03bd9a);
        color: white;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    overflow: scroll;
  }
`;
