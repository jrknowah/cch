import React, {useState} from "react";
import {
    Card,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent, TabPane,
} from 'reactstrap';
import {acpList} from "../../../data/arrayList";
import BioSocial from "../../../components/apps/charts/Section-3/BioSocial";
import MentalHealth from "../../../components/apps/charts/Section-3/MentalHealth";

const Section3 = () => {
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
                                    Bio-Social Assessment
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '3' ? 'active bg-transparent' : 'cursor-pointer'}
                                    onClick={() => {
                                        toggle('3');
                                    }}
                                >
                                    Mental Health Assessment
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
                                                            {acpList.map((list) => {
                                                                if (list.acpListDate==="") {
                                                                    return (
                                                                        <p><i className="bi-check-circle" style={{ color: "red" }} id={list.acpListTitle}>{list.acpListTitle}</i></p>
                                                                    );
                                                                }
                                                                return (
                                                                    <p><i className="bi-check-circle" style={{ color: "green" }} id={list.acpListTitle}>{list.acpListTitle}</i></p>
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
                                            <BioSocial />
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="12">
                                        <div className="p-4">
                                            <MentalHealth />
                                        </div>
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

export default Section3;
