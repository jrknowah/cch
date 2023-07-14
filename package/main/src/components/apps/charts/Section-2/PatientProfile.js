import React, {useState} from "react";
import {
    Card,
    Col, Nav, NavItem, NavLink,
    Row, TabContent, TabPane,
} from 'reactstrap';
import {PatientProfileList} from "../../../../data/arrayList";
import EncounterNote from "../Section-4/EncounterNote";
import CarePlan from "../Section-4/CarePlan";
import BehaviorContract from "../Section-4/BehaviorContract";

const PatientProfile = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    return (
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
                                Encounter
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
                        <NavItem>
                            <NavLink
                                className={activeTab === '4' ? 'active bg-transparent' : 'cursor-pointer'}
                                onClick={() => {
                                    toggle('4');
                                }}
                            >
                                Behavior Contract
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
                                                        {PatientProfileList.map((list) => {
                                                            if (list.patientProfileDate==="") {
                                                                return (
                                                                    <p><i className="bi-check-circle-fill" id={list.patientProfileTitle}>{list.patientProfileTitle}</i></p>
                                                                );
                                                            }
                                                            return (
                                                                <p><i className="bi-check-circle" id={list.patientProfileTitle}>{list.patientProfileTitle}</i></p>
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
                                        {/*<EncounterNote/>*/}
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <div className="p-4">
                                        {/*<CarePlan />*/}
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col>
                                    {/*<BehaviorContract />*/}
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Card>
            </Col>
        </Row>
        /*<div className="p-4">
            <Row>
                {PatientProfileList.map((list) => {
                    if (list.patientProfileDate==="") {
                        return (
                            <i className="bi-check-circle-fill" id={list.patientProfileTitle}>{list.patientProfileTitle}</i>
                        );
                    }
                    return (
                        <i className="bi-check-circle" id={list.patientProfileTitle}>{list.patientProfileTitle}</i>
                    );
                })}
            </Row>
        </div>*/
    );
};
export default PatientProfile;