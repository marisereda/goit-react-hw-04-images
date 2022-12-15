import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${p => p.theme.sizes.form};
  background-color: ${p => p.theme.colors.bgPrimary};
  border-radius: ${p => p.theme.radii.primary};
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: ${p => p.theme.sizes.buttonIcon};
  height: ${p => p.theme.sizes.buttonIcon};
  border: 0;
  background-repeat: no-repeat;
  background-position: center;
  opacity: ${p => p.theme.styles.opacity};
  transition: opacity ${p => p.theme.styles.transition};
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.input};
  border: none;
  outline: none;
`;
