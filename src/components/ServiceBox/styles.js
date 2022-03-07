import styled from 'styled-components';

export const ServiceBoxContainer = styled.div`
  width: 350px;
  padding: 25px;
  background: #ffffff10;
  margin: 15px;
  color: white;
  cursor: pointer;
  border-radius: 24px;
  backdrop-filter: blur(12px) saturate(180%);

  &:hover {
    background-color: white;
    filter: drop-shadow(0 0 0.3rem #03bd9a);

    div {
      color: #2a2d2e;
    }

    li {
      font-weight: bold;
    }

    a {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const ServiceIntro = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  svg {
    color: #03bd9a;
    margin: 0 15px 0 10px;
  }
`;

export const Description = styled.div`
  width: 100%;
  padding: 2vh;
  font-size: 1rem;
  color: #c1c1c1;
  line-height: 1.4;
`;

export const Features = styled.div`
  padding: 2vh;
  color: #c1c1c1;

  ul {
    list-style: none;

    li {
      margin: 0 0 2vh 0;
      display: flex;
      align-items: center;

      svg {
        margin-right: 1vh;
        color: #03bd9a;
      }
    }

    li:last-child {
      border-bottom: 0.2vh solid #03bd9a;
      padding: 0 0 5vh 0;
      margin-bottom: 0;
    }
  }
`;

export const KnowMore = styled.div`
  padding: 2vh;
  font-size: 1rem;
  color: #c1c1c1;

  a {
    color: #03bd9a;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 1vh;

    svg {
      margin-left: 1vh;
    }
  }
`;
