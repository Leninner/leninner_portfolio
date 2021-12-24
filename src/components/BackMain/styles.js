import styled from 'styled-components';

export const BackMain = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const BackMainBoxes = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.divColor || 'palevioletred'};

  div {
    position: absolute;
    top: 27%;
    left: calc(10% - 50px);
    font-size: 2rem;
    color: white;

    h4 {
      font-weight: normal;
      &:first-letter {
        font-weigth: bold;
      }
    }

    p {
      margin-top: 10px;
      width: 40%;
      font-size: 1rem;
    }
  }
`;

export const Img = styled.img`
  width: 350px;
  left: calc(50% + 175px);
  bottom: 114px;
  position: absolute;
`;
