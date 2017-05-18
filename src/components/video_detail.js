import React from 'react';
import {Col, ResponsiveEmbed} from 'react-bootstrap';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;

  return (
    <Col className="video-detail" md={8}>
      <ResponsiveEmbed a16by9>
        <iframe src={url}></iframe>
      </ResponsiveEmbed>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </Col>
  );
};

export default VideoDetail;
