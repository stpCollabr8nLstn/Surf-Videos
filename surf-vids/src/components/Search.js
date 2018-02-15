import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="sv--search">
        <label htmlFor='search' className="sv--search__label"></label>
        <input className="sv--search__input" placeholder='Search'/>
      </div>
    );
  }
}

export default Search;
