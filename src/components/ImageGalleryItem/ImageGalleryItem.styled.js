import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  padding-top: 75%;
  box-shadow: ${p => p.theme.shadows.primary};
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
