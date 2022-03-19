import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ProjectsCounterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  margin: 2rem 0;
`;

export const ProjectCounter = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  color: #03bd9a;
  filter: drop-shadow(0px 0px 5px #03bd9a);
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

  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: 900px) {
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

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

export const ShowAllButton = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  padding: 0.7rem 1.5rem;
  background: #03bd9a;
  border-radius: 8px;
  border: 1px solid #03bd9a;
  transition: 0.3s;
  margin-top: 2.5rem;

  &:hover {
    background: #03bd9a10;
    color: #03bd9a;
    box-shadow: 0px 0px 10px #03bd9a;
  }
`;
