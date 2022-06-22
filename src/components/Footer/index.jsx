import { FooterContainer, FooterButtonsContainer } from './styles'
import { Contact } from '../Contact'
import { ButtonIcons, ButtonLinkedIn } from '../MainView/styles'
import { AiFillGithub } from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs'

export const Footer = () => {
  return (
    <FooterContainer>
      <Contact />

      <FooterButtonsContainer>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/leninner/" target="_blank" rel="noreferrer">
            <ButtonLinkedIn>LinkedIn</ButtonLinkedIn>
          </a>

          <a href="https://github.com/leninner" target="_blank" rel="noreferrer">
            <ButtonIcons>
              <AiFillGithub />
            </ButtonIcons>
          </a>

          <a href="https://medium.com/@leninner" target="_blank" rel="noreferrer">
            <ButtonIcons>
              <BsMedium />
            </ButtonIcons>
          </a>
        </div>

        <span>@2022 All rights reserved to Leninner</span>
      </FooterButtonsContainer>
    </FooterContainer>
  )
}
