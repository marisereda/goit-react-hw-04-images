import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box } from 'components/Box';
import { ModalImage } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, largeImageURL }) => {
  // --------------------------------
  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  // --------------------------------

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // --------------------------------
  return createPortal(
    <Box
      position="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="rgba(0, 0, 0, 0.8)"
      zIndex="modal"
      onClick={handleClickBackdrop}
    >
      <Box position="relative" width="50%" paddingTop="35%">
        <ModalImage src={largeImageURL} alt="" />
      </Box>
    </Box>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
