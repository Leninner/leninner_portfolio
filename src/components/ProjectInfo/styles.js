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
    flex-direction: row-reverse;
  }
`;
export const Container = styled.div`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  @media (max-width: 768px) {
    width: 0 auto;
    overflow: auto;
    flex-direction: row-reverse;

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    &::-webkit-scrollbar:horizontal {
      height: 0px;
    }
  }
`;
