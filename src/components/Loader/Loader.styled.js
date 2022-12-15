import styled, { keyframes } from 'styled-components';

const shadowRolling = keyframes`

  0% {
      box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0),
        0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    12% {
      box-shadow: 100px 0 #3f51b5, 0px 0 rgba(255, 255, 255, 0),
        0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 110px 0 #3f51b5, 100px 0 #3f51b5,
        0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    36% {
      box-shadow: 120px 0 #3f51b5, 110px 0 #3f51b5,
        100px 0 #3f51b5, 0px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 130px 0 #3f51b5, 120px 0 #3f51b5,
        110px 0 #3f51b5, 100px 0 #3f51b5;
    }
    62% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 #3f51b5,
        120px 0 #3f51b5, 110px 0 #3f51b5;
    }
    75% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
        130px 0 #3f51b5, 120px 0 #3f51b5;
    }
    87% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
        200px 0 rgba(255, 255, 255, 0), 130px 0 #3f51b5;
    }
    100% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
        200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
    }
`;

export const Spinner = styled.span`
  position: relative;
  left: -100px;
  display: block;
  box-sizing: border-box;
  width: ${p => p.theme.sizes.loader};
  height: ${p => p.theme.sizes.loader};
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-right: auto;
  margin-left: auto;
  color: white;
  border-radius: ${p => p.theme.radii.circle};
  animation-name: ${shadowRolling};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;
