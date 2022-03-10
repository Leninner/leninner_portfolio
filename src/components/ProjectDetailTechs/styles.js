import styled from 'styled-components';

export const ProjectDetailTechsContainer = styled.div`
  width: 384px;
  display: flex;
  cursor: default;
  flex-direction: column;
  color: white;
  align-items: center;
  padding: 2rem 1rem;
  filter: drop-shadow(0px 0px 10px 0px rgba(0, 0, 0, 0.75));
  background: #1c1e20;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(4, 229, 133, 0.3);

  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 3rem;
  }
`;

export const TechItem = styled.div`
  display: flex;
  padding: 0 0 15px 0;
  justify-content: space-between;
  margin: 10px;
  position: relative;

  svg {
    margin: 0 15px 0 10px;
  }

  div {
    color: white;
    width: 100%;

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
