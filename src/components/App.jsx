import React, { Component } from 'react';
import axios from 'axios';
import Button from './Button/Button';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import './App.css';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import '../styles.css';
import Notiflix from 'notiflix';

const API_KEY = '35695816-a21dc46a31ad12c59a935ea58';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
    showModal: false,
    selectedImage: null,
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, page: 1, images: [], error: null }, this.fetchImages);
  };

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    const url = `https://pixabay.com/api/?q=${encodeURIComponent(searchQuery)}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    try {
      this.setState({ loading: true });

      const response = await axios.get(url);
      const { hits } = response.data;

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({ error: 'Error while fetching images.' });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleOpenModal = selectedImage => {
    this.setState({ showModal: true, selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  render() {
    const { images, loading, error, showModal, selectedImage } = this.state;

    return (
      <div className='App'>
        <SearchBar onSearch={this.handleSearch} />
        {loading && <Loader />}
        {error && <p>{error}</p>}
        <ImageGallery items={images} onImageClick={this.handleOpenModal} />
        {showModal && (
          <Modal image={selectedImage} onClose={this.handleCloseModal} />
        )}
        {images.length > 0 && !loading && (
          <Button onClick={this.fetchImages}>Load More</Button>
        )}
      </div>
    );
  }
}

export default App;









