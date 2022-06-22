import styled from 'styled-components';

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  width: 80%;
  justify-content: center;
  overflow: scroll;
  padding: 2rem 0;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 0px;
  }

  &::-webkit-scrollbar:horizontal {
    height: 5px;
  }

  div {
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem;
    justify-content: center;
    cursor: pointer;

    span {
      font-size: 1.2rem;
      color: #c1c1c1;
      margin-top: 1rem;
      text-align: center;
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
    width: 95%;
  }
`;
