import { Footer } from '../../components/Footer'
import { SendFeedback } from '../../components/SendFeedback'
import styled from 'styled-components'

export const Layout = ({ children }) => {
  return (
    <Container>
      {children}
      <SendFeedback />
      <Footer />
    </Container>
  )
}

const Container = styled.div``
