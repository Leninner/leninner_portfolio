import { keyframes, css } from 'styled-components';

const Ping = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
`;

export const PingAnimation = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${Ping} ${type} infinite;
  `;
