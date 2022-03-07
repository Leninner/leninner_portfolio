import styled from 'styled-components';

export const AchievementsContainer = styled.div`
  width: 100%;
  border-top: 1px solid #343a40;
  border-bottom: 1px solid #343a40;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5vh 0;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AchievementsData = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    overflow: auto;

    &::-webkit-scrollbar:horizontal {
      height: 0px;
    }
  }
`;

export const AchievementTitle = styled.div`
  width: 22%;
  color: #03bd9a;
  font-weight: bold;
  cursor: default;

  h3 {
    font-size: 2rem;
    position: relative;

    svg {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(25deg);
      width: 80%;
    }
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

      svg {
        top: -10vh;
        left: 1vh;
        width: 40%;
      }
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
