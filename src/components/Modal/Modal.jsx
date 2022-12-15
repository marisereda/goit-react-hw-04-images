import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Box } from 'components/Box';
import { ModalImage } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  // --------------------------------
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // --------------------------------
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // --------------------------------
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  // --------------------------------
  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  // --------------------------------
  render() {
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
        onClick={this.handleClickBackdrop}
      >
        <Box position="relative" width="50%" paddingTop="35%">
          <ModalImage src={this.props.largeImageURL} alt="" />
        </Box>
      </Box>,
      modalRoot
    );
  }
}
