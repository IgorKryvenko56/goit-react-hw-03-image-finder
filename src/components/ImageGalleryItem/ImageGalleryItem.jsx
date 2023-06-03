import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

  

class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  handleImageClick = () => {
    this.setState({ showModal: true });
    this.props.onImageClick(this.props.image.largeImageURL);
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { webformatURL } = this.props.image;

    return (
      <li className="gallery-item">
        <img
          className="gallery-item-image"
          src={webformatURL}
          alt="img"
          onClick={this.handleImageClick}
        />
        {this.state.showModal && (
          <Modal
            image={this.props.image.largeImageURL}
            onClose={this.handleCloseModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
