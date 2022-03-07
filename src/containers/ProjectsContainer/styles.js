import styled from 'styled-components';

export const StyledProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-top: -90px;
  margin-bottom: 25px;
  font-size: 2.5rem;
  color: white;

  span {
    color: #03bd9a;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    /* centrar */
    justify-items: center;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  width: 60%;
  text-align: center;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
