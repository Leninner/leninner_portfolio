import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled(Link)`
  width: 350px;
  height: 450px;
  background: #ffffff10;
  color: white;
  cursor: pointer;
  border-radius: 24px;
  margin: 15px;
  backdrop-filter: blur(12px) saturate(180%);
  text-decoration: none;

  &:hover {
    #more {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    height: 400px;
  }
`;

export const PostImg = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const PostInfo = styled.div`
  padding: 2rem;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    color: #03bd9a;
    text-shadow: 0 0 0.2rem #03bd9a;
  }

  p {
    color: #ccc;
  }
`;
