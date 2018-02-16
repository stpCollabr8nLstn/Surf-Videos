import React, { Component } from 'react';
import Search from './Search';
import VideoCardContainer from './VideoCardContainer';

export default class Content extends Component {
  render() {
    return (
      <div className="sv--content">
        <Search></Search>
        <VideoCardContainer></VideoCardContainer>
      </div>
    );
  }
}
