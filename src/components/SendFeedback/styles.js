import styled from 'styled-components';

export const BoxFeedback = styled.div`
  background-color: #f03e3e;
  position: fixed;
  right: 3vh;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  padding: 10px 25px;
  height: 40px;
  border-radius: 5px 5px 0 0;
  bottom: 0;
  z-index: 9999;
  transition: 200ms ease-out;
  display: flex;
  align-items: center;

  svg {
    margin-left: 10px;
  }

  &:hover {
    background-color: #e91212;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
