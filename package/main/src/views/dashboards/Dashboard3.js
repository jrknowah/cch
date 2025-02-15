import React, {useState} from "react";
import {Row, Col, Button, ModalHeader, ModalBody, Modal} from 'reactstrap';
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
      <Row>
        <Col lg="2">
            <Button block color="primary" onClick={newClientModalToggle}>
                Create New Client
            </Button>
            <Modal isOpen={newClientModal} fade={false} toggle={newClientModalToggle.bind(null)} size="lg">
                <ModalHeader toggle={newClientModalToggle.bind(null)}>Client Demographics</ModalHeader>
                <ModalBody>
                    <NewClient/>
                </ModalBody>
            </Modal>
        </Col>
      </Row>
      <Row>
        <Col lg="8">
          <ProjectTable />
        </Col>
        <Col lg="4">
          <ProfileCard />
        </Col>
      </Row>
      
    </>
  );
};

export default Dashboard3;
