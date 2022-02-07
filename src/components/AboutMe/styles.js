import styled from 'styled-components';

export const StyledAboutMe = styled.div`
  width: 70%;
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

  p {
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 0 0.2rem #03bd9a);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 1.5rem;

    tr {
      border-bottom: 1px solid #ccc;
    }

    td {
      padding: 10px;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;
    text-align: center;

    h1 {
      margin-top: 1.5rem;
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 75%;
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
    width: 100%;
    margin: 0;
    height: 300px;
  }
`;
