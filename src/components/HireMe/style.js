import styled from 'styled-components';

export const HireMe = styled.a`
  position: absolute;
  width: 150px;
  text-decoration: none;
  height: 150px;
  border-radius: 50%;
  background-color: #f9ede9;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  margin-left: -75px;
  margin-top: -75px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }
`;

export const HireMeText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fe734f;
  text-align: center;
  transform: rotate(-20deg);
`;
