import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoCard from './VideoCard';

export default class VideoCardContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    videos: PropTypes.object,
  };

  static defaultProps = {
    videos: {},
  };

  render() {
    return (
      <div className="sv--vid-card-container">
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
      </div>
    );
  }
}
