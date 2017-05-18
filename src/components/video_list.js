import React from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <Grid>
      <Row className="show-grid">
        <Col md={4}>
          <ListGroup>
            {videoItems}
          </ListGroup>
        </Col>
      </Row>
    </Grid>

  );
}

export default VideoList;
