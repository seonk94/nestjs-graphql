import { keyframes } from 'styled-components';

export const wave = keyframes`
  0% {
    background-position: left 0px top 0px;
  }
  50% { 
    background-position: left 100% top 100%;
  }
  100% {
    background-position: left 0px top 0px;
  } 
`;

export const infiniteWave = keyframes`
  0% {
      background-position: left 0px bottom -80px;
  }
  100% { 
      background-position: left 1500px bottom 20px;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const drift = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
`;
export const tinDownOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(1, 1) translateY(900%);
  }

`;
export const tinUpOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(1, 1) translateY(-900%);
  }

`;
