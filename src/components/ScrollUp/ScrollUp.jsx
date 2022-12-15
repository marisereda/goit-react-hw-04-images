import PropTypes from 'prop-types';

import { ScrollUpBtn } from './ScrollUp.styled';
import { ImArrowUp } from 'react-icons/im';

export const ScrollUp = ({ onClick }) => (
  <ScrollUpBtn onClick={onClick}>
    <ImArrowUp />
  </ScrollUpBtn>
);

ScrollUp.propTypes = {
  onClick: PropTypes.func.isRequired,
};
