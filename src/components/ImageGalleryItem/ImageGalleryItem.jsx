import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [imageUrl, setImageUrl] = useState(null);

  // --------------------------------
  return (
    <Item>
      <Image
        alt={tags}
        src={webformatURL}
        onClick={() => setImageUrl(largeImageURL)}
      />
      {imageUrl && (
        <Modal largeImageURL={imageUrl} onClose={() => setImageUrl(null)} />
      )}
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
