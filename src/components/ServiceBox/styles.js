import styled from 'styled-components';

export const ServiceBoxContainer = styled.div`
  width: 350px;
  padding: 25px;
  background-color: #2a2d2e;
  margin: 15px;
  color: white;
  transition: 0.3s ease-out;
  cursor: pointer;
  border-radius: 24px;

  &:hover {
    background-color: white;
    filter: drop-shadow(0 0 0.3rem #03bd9a);

    div {
      color: #2a2d2e;
    }

    a {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const ServiceIntro = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;

  svg {
    color: #03bd9a;
    width: 20%;
    margin-right: 3vh;
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
