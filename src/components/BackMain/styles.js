import styled from 'styled-components';

export const BackMain = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const BackMainBoxes = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.divColor || 'palevioletred'};
`;
