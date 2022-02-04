import styled from 'styled-components';

export const AchievementsContainer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #343a40;
  border-bottom: 1px solid #343a40;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AchievmentsData = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    overflow: auto;
  }
`;

export const AchievmentTitle = styled.div`
  width: 22%;
  color: #03bd9a;
  font-weight: bold;

  h3 {
    font-size: 2rem;
  }

  span {
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;

    h3 {
      width: 80%;
      margin: 0 auto;
      text-align: center;
    }
  }
`;

export const AchievementItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 15px;

  ${({ middle }) =>
    middle &&
    `
    border-left: 1px solid #343a40;
    border-right: 1px solid #343a40;
  `}

  div {
    margin: 0px 10px;

    p {
      font-size: 11px;
      color: #c4c4c4;
    }
  }

  svg {
    margin-right: 10px;
  }
`;
