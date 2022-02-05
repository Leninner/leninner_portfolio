import styled from 'styled-components';

export const StyledAboutMe = styled.div`
  width: 50%;
  display: flex;

  img {
    width: 50%;
    margin: 0 5vh 0 0;
    object-fit: cover;
  }

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
`;
