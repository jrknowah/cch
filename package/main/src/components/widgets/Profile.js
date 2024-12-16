import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import img1 from '../../assets/images/users/user2.jpg';

const Profile = () => {
  return (
    <Card>
      <CardBody className="text-center p-4 border-bottom">
        <img src={img1} className="rounded-circle" width="120" alt="avatar" />
        <CardTitle tag="h4" className="fw-bold mt-3 mb-0">
          Jared Crest
        </CardTitle>
        <CardSubtitle className="text-muted">Client ID: 12345</CardSubtitle>
        <div className='d-flex align-items-center justify-content-center mt-4 gap-2'>
            {/* <a href='/' className='badge bg-primary text-white rounded-pill text-decoration-none'>Dashboard</a> */}
            <a href='/' className='badge bg-light text-dark rounded-pill text-decoration-none'>2/27/1989, 34</a>
            <a href='/' className='badge bg-light text-dark rounded-pill text-decoration-none'>Male</a>
            <a href='/' className='badge bg-light text-dark rounded-pill text-decoration-none'>White</a>

        </div>
      </CardBody>
      {/* <CardBody>
        <Row>
          <Col xs="6" className="text-center border-end">
            <a
              href="/"
              className="text-dark d-flex align-items-center justify-content-center text-decoration-none fw-bold"
            >
              <i className="bi bi-chat-left-fill text-muted me-2"></i>
              Message
            </a>
          </Col>
          <Col xs="6" className="text-center">
            <a
              href="/"
              className="text-dark d-flex align-items-center justify-content-center text-decoration-none fw-bold"
            >
              <i className="bi bi-columns text-muted me-2"></i>
              Portfolio
            </a>
          </Col>
        </Row>
      </CardBody> */}
    </Card>
  );
};

export default Profile;
