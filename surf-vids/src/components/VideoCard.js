import React, { Component } from 'react';
import Video from './Video';
import VideoDetail from './VideoDetail';

export default class VideoCard extends Component {

  static defaultProps = {
  };

  state = {
  };


  _handleChange = evt => {

  }

  render() {
    return (
      <div className="sv--vid-card">
        <Video></Video>
        <VideoDetail></VideoDetail>
      </div>
    );
  }
}
