import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 100;
  overflow: scroll;
  display: flex;
  justify-content: center;

  section {
    max-width: 1200px;
    width: 100%;
    padding-top: 3rem;

    .back {
      color: white;
    }
  }
`;
