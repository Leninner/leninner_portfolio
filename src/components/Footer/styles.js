import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  background-color: #17191c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 300px;

  @media (max-width: 768px) {
    margin-top: 200px;
  }
`

export const FooterButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  position: relative;
  top: -50px;

  .buttons {
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 20px;
    color: #cccc;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    span {
      margin: 0;
      margin-top: 2rem;
    }
  }
`
