import {Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row, Table} from 'reactstrap';
import './notes.scss';
import React from "react";
import {behContractList} from "../../../../data/arrayList";

const BehaviorContract = () => {
    return (
        <>
            <Card>
                <CardHeader>Behavior Contract</CardHeader>
                <CardBody>
                    <Form>
                        <div className="form-body">
                            <Row className="text-center">
                                <Label for="clientContactInfo">Behavior Contract</Label>
                            </Row>
                            <Row>
                                <Col md="8">
                                    <p>
                                        Below are rules that if broken multiple times will cause the following consequences.<br/><br/>
                                        • Any behavior/action that threatens the health, safety, security, and/or welfare of other
                                        participants or staff (stealing, entering other member’s rooms, being disrespectful to staff,
                                        threats to staff or other members)<br/>
                                        • Substance use on the premises<br/>
                                        • Bringing drugs or any illegal contraband into the facility<br/>
                                        • Not returning to the facility by 8:00pm<br/>
                                        • Not receiving approval for late or overnight passes<br/>
                                        • Not contacting the facility after determining that one cannot return before curfew<br/>
                                        • Comply with medical recommendations and follow medication times (which include going to
                                        get medication from the nurse’s station)<br/>
                                    </p>
                                    <div>
                                        <p>
                                            Consequences:<br/><br/>
                                            <Table bordered responsive>
                                                <tbody>
                                                    {behContractList.map((list) => {
                                                        return (
                                                            <tr>
                                                                <td>{list.behContractListTitle}</td>
                                                                <td>{list.behContractListPun}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </Table>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="clientBehName">Client Printed Name</Label>
                                        <Input type="text" id="clientBehName" name="clientBehName">
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="clientBehSign">Client Signature</Label>
                                        <Input type="text" id="clientBehSign" name="clientBehSign">
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="staffBehName">Staff Printed Name</Label>
                                        <Input type="text" id="clientWholePersonIntakePrint" name="clientWholePersonIntakePrint">
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="staffBehSign">Staff Signature</Label>
                                        <Input type="text" id="staffBehSign" name="staffBehSign">
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </>
    );
};

export default BehaviorContract;
