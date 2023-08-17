import React, {useState} from "react";
import {Row, Col, Button, ModalHeader, ModalBody, ModalFooter, Modal} from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ProfileCard from '../../components/dashboard/dashboard1/ProfileCard';
import ProjectTable from '../../components/dashboard/dashboard2/ProjectTable';
import NewClient from "./NewClient";

const Dashboard3 = () => {
    const [newClientModal, setNewClientModalToggle] = useState(false);
    const newClientModalToggle = () => {
        setNewClientModalToggle(!newClientModal);
    };

    return (
    <>
      <BreadCrumbs />
      {/*<ProgressCards />*/}
      <Row>
        <Col lg="2">
          {/*<RevenueStatistics />*/}

            <Button block color="primary" onClick={newClientModalToggle}>
                Create New Client
            </Button>
            <Modal isOpen={newClientModal} fade={false} toggle={newClientModalToggle.bind(null)} size="lg">
                <ModalHeader toggle={newClientModalToggle.bind(null)}>Client Demographics</ModalHeader>
                <ModalBody>
                    <NewClient/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={newClientModalToggle.bind(null)}>
                        Create New Client
                    </Button>
                    <Button color="secondary" onClick={newClientModalToggle.bind(null)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </Col>
        <Col lg="4">
          {/*<UserViews />*/}
        </Col>
        <Col lg="4">
          {/*<Map />*/}
        </Col>
      </Row>

      <Row>
        <Col lg="6"></Col>
        <Col lg="6"></Col>
      </Row>
      <Row>
        <Col lg="8">
          <ProjectTable />
        </Col>
        <Col lg="4">
          <ProfileCard />
        </Col>
      </Row>
      {/*<Row>
      <Col lg="4">
        <BandwidthUsage />
        <Downloads />
      </Col>
      <Col lg="4">
        <Feeds />
      </Col>
      <Col lg="4">
        <MyContact />
      </Col>
      </Row>*/}
      {/*********************Chat & comment ***********************
      <Row>
        <Col lg="6">
          <RecentComments />
        </Col>
        <Col lg="6">
          <TaskList />
        </Col>
      </Row>*/}
    </>
  );
};

export default Dashboard3;
