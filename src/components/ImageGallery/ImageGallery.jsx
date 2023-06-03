import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import  '../ImageGallery/ImajeGallery.css';


class ImageGallery extends Component {
  render() {
    const { items, onImageClick } = this.props;
    return (
      <ul className="gallery">
        {items.map(item => (
          <ImageGalleryItem
            key={item.id}
            image={item}
            onImageClick={onImageClick}
          />
        ))}
      </ul>
    );
  };
}
ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};


export default ImageGallery;

