import styled from 'styled-components';

export const MainInfoContainer = styled.div`
  background: #03bd9a;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 18px;
  max-width: 317px;
  cursor: default;
`;

export const InfoContainer = styled.div`
  padding: 1.5rem;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;

  p {
    margin: 1rem 0;
    font-size: 18px;
    overflow: auto;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 8px;
    font-size: 16px;
    width: 121.42px;
    height: 40px;
    cursor: pointer;

    &:hover {
      background: #03bd9a;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  min-height: 184px;
  object-fit: cover;
`;
