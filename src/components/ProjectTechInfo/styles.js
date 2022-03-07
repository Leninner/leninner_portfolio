import styled from 'styled-components';

export const TechInfoContainer = styled.div`
  display: flex;
  cursor: default;
  flex-direction: column;
  color: white;
  align-items: center;
  margin: 0 0.5rem 0 1rem;
  height: 100%;

  svg {
    color: white;
    margin: 0 10px;
    position: relative;
    filter: drop-shadow(0 0 0.4rem #03bd9a);
  }

  @media (max-width: 768px) {
    min-width: 50%;
  }
`;

export const Description = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  font-size: 14px;

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const TechItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 0 15px 0;
  margin: 10px 0;
  position: relative;

  div {
    color: white;

    h2 {
      width: 100%;
      border-bottom: 2px solid #03bd9a;
      filter: drop-shadow(0 0 0.2rem #03bd9a);
      font-size: 16px;
      padding: 0 0 5px 0;

      a {
        color: white;
        text-decoration: none;
      }
    }

    p {
      margin: 10px 0;
      color: #ccc;
      letter-spacing: 0.02rem;
      word-spacing: 0.02rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 0.2rem #03bd9a);
`;
