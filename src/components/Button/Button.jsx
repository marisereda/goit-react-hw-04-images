import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ onClick, page }) => {
  return (
    <StyledButton onClick={() => onClick(page + 1)}>Load more</StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
