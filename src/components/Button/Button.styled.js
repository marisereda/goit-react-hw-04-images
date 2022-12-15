import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  min-width: ${p => p.theme.sizes.buttonWidth};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.button};
  font-weight: 500;
  font-style: normal;
  line-height: ${p => p.theme.fontSizes.input};
  text-decoration: none;
  text-align: center;

  color: ${p => p.theme.colors.textPrimary};
  background-color: ${p => p.theme.colors.bgButton};
  border: 0;
  border-radius: ${p => p.theme.radii.primary};
  box-shadow: ${p => p.theme.shadows.primary};
  transition: all ${p => p.theme.styles.transition};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.bgButtonHover};
  }
`;
