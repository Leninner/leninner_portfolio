import styled from 'styled-components';

export const StyledAboutMe = styled.div`
  width: 80%;
  display: flex;
  color: white;
  cursor: default;

  h1 {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1.5rem;

    span {
      color: #03bd9a;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
    align-items: center;

    h1 {
      margin-top: 1.7rem;
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.4rem;
    }
  }
`;

export const MeDescription = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 90%;
  padding: 20px 0;
  margin: 0 10vh 0 0;
  object-fit: cover;
  border: 0.35vh solid #03bd9a;
  position: relative;
  cursor: pointer;
  border-radius: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    right: -20px;
    top: -20px;
    transition: 0.3s;
    border-radius: 24px;
  }

  &:hover {
    img {
      top: -10px;
      right: -10px;
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 0;
    height: 300px;
  }

  @media (max-width: 425px) {
    width: 75%;
  }
`;

export const MeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgb(28, 30, 32);
  background: linear-gradient(0deg, rgba(28, 30, 32, 1) 60%, rgba(41, 44, 46, 1) 100%);
  border-radius: 2vh;
  padding: 2vh 4vh;

  div {
    margin: 0 0 3vh 0;
  }

  span {
    color: #03bd9a;
    filter: drop-shadow(0 0 0.2rem #03bd9a);
  }

  p {
    margin: 1vh 0 0 0;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 2vh;
    width: 95%;
    flex-direction: column;
  }

  @media (max-width: 425px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const GetCv = styled.a`
  padding: 1vh 4.5vh;
  border-radius: 24px;
  font-size: 1.1rem;
  background: #1c1e20;
  border: 0.1vh solid #03bd9a;
  color: white;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2vh;
  text-decoration: none;

  svg {
    margin-left: 1vh;
  }

  p {
    margin: 0;
  }

  &:hover {
    filter: drop-shadow(0 0 0.2rem #03bd9a);
  }

  @media (max-width: 768px) {
    width: auto;
    padding: 1vh 3vh;
    font-size: 1rem;
  }
`;

export const MySelf = styled.div`
  width: 100%;

  p {
    margin-bottom: 1.5rem;
    font-size: 18px;
    color: #ccc;

    strong {
      color: #03bd9a;
      text-shadow: 0 0 0.1rem #03bd9a;
    }
  }
`;
