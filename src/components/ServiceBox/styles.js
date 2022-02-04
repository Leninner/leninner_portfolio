import styled from 'styled-components';

export const ServiceBoxContainer = styled.div`
  width: 350px;
  padding: 30px 25px;
  background-color: #2a2d2e;
  margin: 5px;
  color: white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    color: #03bd9a;
    width: 80%;
  }

  h3 {
    margin: 5px 0;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    color: #c1c1c1;
  }

  &:hover {
    background-color: #03bd9a;

    svg {
      color: white;
    }

    p {
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;
