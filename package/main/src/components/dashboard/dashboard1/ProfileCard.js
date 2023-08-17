import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap';

import img1 from '../../../assets/images/users/user1.jpg';
import bgimg1 from '../../../assets/images/background/profile-bg.jpg';

const ProfileCard = () => {
  return (
    <Card>
      <CardImg src={bgimg1} alt="bg-img" />
      <CardBody className="text-center mt-n5">
        <img src={img1} className="rounded-circle mt-n4" width="125" alt="avatar" />
        <CardTitle className="mb-1 mt-3" tag="h4">
          Client 1
        </CardTitle>
        <CardSubtitle className="mb-3 pb-1 px-4">
         Percy 
        </CardSubtitle>
        <CardSubtitle className="mb-3 pb-1 px-4">
         12345
        </CardSubtitle>
        {/* <Button color="primary" size="lg" className="rounded-pill">
          Follow
        </Button>
        <Row className="mt-4">
          <Col xs="4">
            <h5 className="fw-bold">1M</h5>
            <span className="text-muted">Followers</span>
          </Col>
          <Col xs="4" className="border-start border-end">
            <h5 className="fw-bold">0</h5>
            <span className="text-muted">Following</span>
          </Col>
          <Col xs="4">
            <h5 className="fw-bold">1,000</h5>
            <span className="text-muted">Posts</span>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Button block color="primary">
              Message
            </Button>
          </Col>
          <Col>
            <Button block color="outline-primary">
              Share Profile
            </Button>
          </Col>
        </Row> */}
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
