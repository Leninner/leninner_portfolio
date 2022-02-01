import styled from 'styled-components';

export const AchievementsContainer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #343a40;
  border-bottom: 1px solid #343a40;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
`;

export const AchievmentsData = styled.div`
  display: flex;
  width: auto;
`;

export const AchievementItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 15px;

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
