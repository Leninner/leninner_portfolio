import styled from 'styled-components';

export const ContactContainer = styled.section`
  width: 60%;
  height: 400px;
  background-color: #1d2024;
  position: relative;
  top: -200px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    height: auto;
  }
`;

const inputSyles = `
  width: 100%;
  height: 50px;
  border: none;
  background: #363b42;
  outline: none;
  padding: 0 1rem;
  color: #ccc;

  &::placeholder {
    color: #ccc;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const AsideContact = styled.aside`
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }

  form {
    padding: 50px 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    @media (max-width: 768px) {
      padding: 1rem;
    }

    .error {
      border: 1px solid #f44336;

      &::placeholder {
        color: #f44336;
      }
    }

    input {
      ${inputSyles}
    }

    div {
      display: flex;
      width: 100%;
      justify-content: space-between;

      input {
        width: 49%;
      }
    }

    textarea {
      ${inputSyles}
      resize: none;
      padding-top: 1rem;
      max-height: 100px;
      min-height: 100px;
    }

    button {
      width: 100%;
      height: 50px;
      border: none;
      background: #0acf97;
      outline: none;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: #07b382;
      }
    }
  }
`;
