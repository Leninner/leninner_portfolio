import styled from 'styled-components';

export const MainInfoContainer = styled.div`
  background: ${(props) => props.colorToUse};
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 18px;
  max-width: 317px;
  min-width: 317px;
  height: 100%;
  cursor: default;
  margin: 0 1rem 0 0.5rem;
`;

export const InfoContainer = styled.div`
  padding: 1.5rem;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;

  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    margin: 1rem 0;
    font-size: 16px;
    overflow: auto;
  }
`;

export const Img = styled.img`
  width: 100%;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  min-height: 184px;
  object-fit: cover;
`;

export const Button = styled.button`
  transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 8px;
  font-size: 16px;
  width: 121.42px;
  height: 40px;
  cursor: pointer;
  background-color: ${({ details }) => (details ? 'rgba(255, 255, 255, 0.3);' : 'rgba(0, 0, 0, 0.3)')};
  color: rgba(255, 255, 255, 1);

  &:hover {
    background: ${({ details }) => (details ? 'rgba(255, 255, 255, 0.4);' : 'rgba(0, 0, 0, 0.4)')};
  }
`;
