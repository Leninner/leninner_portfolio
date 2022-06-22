import { keyframes, css } from 'styled-components'

const Ping = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
`

export const PingAnimation = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${Ping} ${type} infinite;
  `

const sideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`

export const SideInAnimation = ({ time = '0.3s', type = 'ease' } = {}) => css`
  animation: ${time} ${sideIn} ${type};
`
