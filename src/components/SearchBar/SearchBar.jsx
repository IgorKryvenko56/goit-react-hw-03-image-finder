import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import { ReactComponent as SearchIcon } from '../icons8-search.svg';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    this.props.onSearch(query);
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;

    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">
              <SearchIcon className="search-icon" size = {25} />
               Search
            </span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
  SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
 };

export default SearchBar;

