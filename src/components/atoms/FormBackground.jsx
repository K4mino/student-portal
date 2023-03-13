import styled from 'styled-components';

import waveRight from '../../images/waveRight.png';
import waveLeft from '../../images/waveLeft.png';

const FormBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow:hidden;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url(${waveRight});
    z-index: -1;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${waveLeft});
    background-position: bottom;
    background-repeat: no-repeat;
    background-image: 100%;
    z-index: -1;
  }

  @media (max-width: 660px) {
    &:after,
    &:before {
      background-size: 200%;
    }
  }
`;

export {FormBackground};
