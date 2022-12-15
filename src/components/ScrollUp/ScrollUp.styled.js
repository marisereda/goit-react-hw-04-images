import styled from 'styled-components';

export const ScrollUpBtn = styled.button`
  position: fixed;
  bottom: ${p => p.theme.space[5]}px;
  right: ${p => p.theme.space[5]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.sizes.buttonScrollUp};
  height: ${p => p.theme.sizes.buttonScrollUp};

  color: ${p => p.theme.colors.textPrimary};
  background-color: ${p => p.theme.colors.bgButton};
  border: none;
  border-radius: ${p => p.theme.radii.circle};
  cursor: pointer;

  svg {
    width: ${p => p.theme.sizes.iconScrollUp};
    height: ${p => p.theme.sizes.iconScrollUp};
    fill: currentColor;
  }
`;
