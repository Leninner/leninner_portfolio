import styled from 'styled-components';

export const StyledProjectInfo = styled.div`
  width: 584px;
  background: #ffffff10;
  border-radius: 24px;
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid #cccd;
  height: 546px;

  @media (max-width: 768px) {
    width: 95%;
    overflow: auto;
    flex-direction: row-reverse;

    &::-webkit-scrollbar:horizontal {
      height: 0px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  height: 100%;

  @media (max-width: 768px) {
    width: 0 auto;
    overflow: auto;
    flex-direction: row-reverse;
  }
`;
