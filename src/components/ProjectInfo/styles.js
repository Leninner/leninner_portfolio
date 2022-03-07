import styled from 'styled-components';

export const StyledProjectInfo = styled.div`
  width: 584px;
  background: #ffffff10;
  border-radius: 24px;
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid #cccd;
  display: flex;
  height: 546px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
    overflow: auto;
  }
`;
export const Container = styled.div`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  @media (max-width: 768px) {
    overflow: auto;

    &::-webkit-scrollbar:horizontal {
      height: 0px;
    }
  }
`;
