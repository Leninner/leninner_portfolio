import styled from 'styled-components';

export const StyledSectionContainer = styled.section`
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
`;
