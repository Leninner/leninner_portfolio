import styled from 'styled-components';

export const BlogContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ShowAllButton = styled.a`
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  padding: 0.7rem 1.5rem;
  background: #03bd9a;
  border-radius: 8px;
  border: 1px solid #03bd9a;
  transition: 0.3s;
  margin-top: 2.5rem;

  &:hover {
    background: #03bd9a10;
    color: #03bd9a;
    box-shadow: 0px 0px 10px #03bd9a;
  }
`;
