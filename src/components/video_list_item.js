import React from 'react';
import {ListGroupItem, Media, Image} from 'react-bootstrap';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <ListGroupItem onClick={() => onVideoSelect(video)} bsStyle="info">
      <Media className="video-list">
        <Media.Left>
          <Image src={imageUrl} alt="thumbnail of video" rounded />
        </Media.Left>
        <Media.Body>
          <Media.Heading>{video.snippet.title}</Media.Heading>
        </Media.Body>
      </Media>
    </ListGroupItem>
  );
};

export default VideoListItem;
