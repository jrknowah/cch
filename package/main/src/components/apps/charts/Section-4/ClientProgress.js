import React, { useState } from 'react';
import {
    Row,
    Col,
    Card,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {section4List} from "../../../../data/arrayList";
import EncounterNote from "./EncounterNote";
import CarePlan from "./CarePlan";

const ClientProgress = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    return (
        <>
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
                                    Timeline
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '2' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('2');
                                    }}
                                >
                                    Notes
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '3' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('3');
                                    }}
                                >
                                    Care Plan
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <div className="steamline position-relative ms-4 mt-0">
                                                <div className="sl-item my-3 pb-3">
                                                    <div className="sl-left float-start text-center rounded-circle text-white ms-n3 me-3 bg-success">
                                                    </div>
                                                    <div className="sl-right ps-4">
                                                        <div>
                                                            {section4List.map((list) => {
                                                                if (list.section4Date==="") {
                                                                    return (
                                                                        <p><i className="bi-check-circle" style={{ color: "red" }}id={list.section4Title}>{list.section4Title}</i></p>
                                                                    );
                                                                }
                                                                return (
                                                                    <p><i className="bi-check-circle" style={{ color: "green" }}id={list.section4Title}>{list.section4Title}</i></p>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <EncounterNote/>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <CarePlan />
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ClientProgress;
