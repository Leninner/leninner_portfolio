import styled from 'styled-components';

export const StyledProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    h1 {
      text-align: center;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: white;

  span {
    color: #03bd9a;
  }
`;
