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
import {section6List} from "../../../../data/arrayList";
import PersonalInventory from "./PersonalInventory";
import IDTNoteNursing from './IDTNoteNursing';
import IDTNoteCM from './IDTNoteCM';
import IDTNoteProvider from './IDTNoteProvider';


const Section6 = () => {
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
                                    Face Sheet
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '2' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('2');
                                    }}
                                >
                                    IDT Note - Provider
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '3' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('3');
                                    }}
                                >
                                    IDT Note - Case Manager
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '4' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('4');
                                    }}
                                >
                                    IDT Note - Nursing
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '5' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('5');
                                    }}
                                >
                                    Personal Inventory
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
                                                            {section6List.map((list) => {
                                                                if (list.section6Date==="") {
                                                                    return (
                                                                        <p><i className="bi-check-circle" style={{ color: "red" }} id={list.section6Title}>{list.section6Title}</i></p>
                                                                    );
                                                                }
                                                                return (
                                                                    <p><i className="bi-check-circle-fill" style={{ color: "green" }} id={list.section6Title}>{list.section6Title}</i></p>
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
                                            <IDTNoteProvider/>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <IDTNoteCM/>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <IDTNoteNursing/>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="5">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <PersonalInventory/>
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

export default Section6;
