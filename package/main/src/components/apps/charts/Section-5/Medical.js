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
import {section5List} from "../../../../data/arrayList";
import MedFaceSheet from "./MedFaceSheet";
import MedScreening from "./MedScreening";
import MentalHealthScreen from "./MentalHealthScreen";
import PhysicalExam from "./PhysicalExam";
import AssessmentDiagnosis from "./AssessmentDiagnosis";
import OrderForm from "./OrderForm";
import NursingAdmission from "./NursingAdmission";
import ProgressNote from "./ProgressNote";
import IDTNoteNursing from './IDTNoteNursing';

const Medical = () => {
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
                                    Main
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '2' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('2');
                                    }}
                                >
                                    Face Sheet
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '3' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('3');
                                    }}
                                >
                                    Nursing Screening
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '4' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('4');
                                    }}
                                >
                                    Mental Health Screening
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '5' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('5');
                                    }}
                                >
                                    NP/Nurse Exam
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '6' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('6');
                                    }}
                                >
                                    LVN Assessment
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '7' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('7');
                                    }}
                                >
                                    Order Form
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '8' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('8');
                                    }}
                                >
                                    Nursing Assessment
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '9' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('9');
                                    }}
                                >
                                    Progress Notes
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '9' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('10');
                                    }}
                                >
                                    Nursing IDT
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
                                                            {section5List.map((list) => {
                                                                if (list.section5Date==="") {
                                                                    return (
                                                                        <p><i className="bi-check-circle" style={{ color: "red" }} id={list.section5Title}>{list.section5Title}</i></p>
                                                                    );
                                                                }
                                                                return (
                                                                    <p><i className="bi-check-circle-fill" style={{ color: "green" }} id={list.section5Title}>{list.section5Title}</i></p>
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
                                            <MedFaceSheet/>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <MedScreening/>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <MentalHealthScreen/>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                             <TabPane tabId="5">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <PhysicalExam/>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="6">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <AssessmentDiagnosis/>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="7">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <OrderForm/>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="8">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <NursingAdmission />
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="9">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <ProgressNote/>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="10">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <IDTNoteNursing/>
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

export default Medical;
