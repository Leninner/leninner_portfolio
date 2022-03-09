import styled from 'styled-components';

export const ProjectDetailOverviewContainer = styled.div`
  width: 766px;
  background: #1c1e20;
  border-radius: 10px;
  height: 100%;
  cursor: default;
  box-shadow: 0px 0px 5px 0px rgba(4, 229, 133, 0.3);
  filter: drop-shadow(0px 0px 10px 0px rgba(0, 0, 0, 0.75));

  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 2rem;
  }
`;

export const Img = styled.img`
  width: calc(100% - 2rem);
  max-width: 766px;
  border-radius: 10px;
  margin: 1rem 1rem 0 1rem;
`;

export const ProjectInfo = styled.div`
  p {
    margin: 1rem;
    color: #ccc;
    letter-spacing: 0.02rem;
    word-spacing: 0.02rem;
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 1rem;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;

    span {
      color: #03bd9a;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 0.8rem 1.2rem;
  background: #fffff10;
  margin-left: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid #03bd9a;
  transition: 0.3s;
  display: flex;
  align-items: center;

  svg {
    margin-left: 10px;
  }

  ${(props) =>
    props.repo &&
    `
    background: #03bd9a;
    border: none;

    &:hover {
      background: #04b391;
    }
    `}

  &:hover {
    box-shadow: 0 0 0.2rem #03bd9a;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;

    span {
      display: none;
    }

    svg {
      margin: 0;
    }
  }
`;
