import React from 'react';
import {ListGroupItem, Media} from 'react-bootstrap';

const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <ListGroupItem bsStyle="info">
      <Media className="video-list">
        <Media.Left>
          <img src={imageUrl} alt="thumbnail of video" />
        </Media.Left>
        <Media.Body>
          <Media.Heading>{video.snippet.title}</Media.Heading>
        </Media.Body>
      </Media>
    </ListGroupItem>
  );
};

export default VideoListItem;
