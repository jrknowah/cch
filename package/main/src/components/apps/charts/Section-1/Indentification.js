import React, {useState} from "react";
import {
    Card,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent, TabPane, Form, FormGroup, Input, Button
} from 'reactstrap';
//import ComponentCard from '../../../../components/ComponentCard';
import ComponentCard from '../../../ComponentCard'
import {} from "../../../../data/arrayList";
import ClientFace from "./ClientFace";

const Indentification = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    return (
        <div>
            <Row>
                <Col xs="12" md="12" lg="12">
                    <Card>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '1' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('1');
                                    }}
                                >
                                    Client Face Sheet
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '2' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('2');
                                    }}
                                >
                                    Identification
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <ClientFace/>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col md="4">
                                        <ComponentCard title="Identification Card"  >
                                            <Form>
                                            <FormGroup>
                                                <Input type="file" name="file" id="exampleFile" />
                                            </FormGroup>
                                            </Form>
                                        </ComponentCard>
                                    </Col>
                                    <Col md="4">
                                        <ComponentCard title="Driver's License"  >
                                            <Form>
                                            <FormGroup>
                                                <Input type="file" name="file" id="exampleFile" />
                                            </FormGroup>
                                            </Form>
                                        </ComponentCard>
                                    </Col>
                                    <Col md="4">
                                        <ComponentCard title="Social Security Card"  >
                                            <Form>
                                            <FormGroup>
                                                <Input type="file" name="file" id="exampleFile" />
                                            </FormGroup>
                                            </Form>
                                        </ComponentCard>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <ComponentCard title="Permanent Resident Alien Card"  >
                                            <Form>
                                            <FormGroup>
                                                <Input type="file" name="file" id="exampleFile" />
                                            </FormGroup>
                                            </Form>
                                        </ComponentCard>
                                    </Col>
                                    <Col md="4">
                                        <ComponentCard title="Other"  >
                                            <Form>
                                            <FormGroup>
                                                <Input type="file" name="file" id="exampleFile" />
                                            </FormGroup>
                                            </Form>
                                        </ComponentCard>
                                    </Col>
                                    <Col md="4">
                                        <ComponentCard title="Medi-Cal Benefits"  >
                                            <Form>
                                            <FormGroup>
                                                <Input type="file" name="file" id="exampleFile" />
                                            </FormGroup>
                                            </Form>
                                        </ComponentCard>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <ComponentCard title="Medicare"  >
                                            <Form>
                                            <FormGroup>
                                                <Input type="file" name="file" id="exampleFile" />
                                            </FormGroup>
                                            </Form>
                                        </ComponentCard>
                                    </Col>
                                    <Col md="4">
                                        <ComponentCard title="Other"  >
                                            <Form>
                                            <FormGroup>
                                                <Input type="file" name="file" id="exampleFile" />
                                            </FormGroup>
                                            </Form>
                                        </ComponentCard>
                                    </Col>
                                    <Col md="4">
                                        <ComponentCard title="TB Clearance"  >
                                            <Form>
                                            <FormGroup>
                                                <Input type="file" name="file" id="exampleFile" />
                                            </FormGroup>
                                            </Form>
                                        </ComponentCard>
                                    </Col>   
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <ComponentCard title="Income" >
                                            <Form>
                                            <FormGroup>
                                                <Input type="file" name="file" id="exampleFile" />
                                            </FormGroup>
                                            </Form>
                                        </ComponentCard>
                                    </Col>
                                </Row>
                                <Row>
                                <Col sm="12">
                                        <div className="p-4">
                                            <Col md="4">
                                                <Button color="primary" size="sm">Upload Documents</Button>
                                            </Col>
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        
                                    </Col>
                                </Row>
                                
                            </TabPane>
                            </TabContent>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Indentification;