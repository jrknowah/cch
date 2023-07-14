import {Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from 'reactstrap';
import React from "react";
import {gadDifList, gadList} from "../../../../data/arrayList";


const GAD = () => {
    return (
        <>
            <Card>
                <CardHeader>Generalized Anxiety Disorder 7-Item (GAD-7) Scale</CardHeader>
                <CardBody>
                    <Form>
                        <div className="form-body">
                            <Row>
                                <p>
                                    Over the last 2 weeks, how often have you been bothered by the following problems?
                                </p>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Label for="clientGAD1">1. Feeling nervous, anxious, or on edge</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="gad1" >
                                    {gadList.map((list) => {
                                        return (
                                            <option id={list.id} value={list.value}>{list.id}</option>
                                        );
                                    })}
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Label for="clientGAD2">2. Not being able to stop or control worrying</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="gad2" >
                                        {gadList.map((list) => {
                                            return (
                                                <option id={list.id} value={list.value}>{list.id}</option>
                                            );
                                        })}
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Label for="clientGAD3">3. Worrying too much about different things</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="gad3" >
                                        {gadList.map((list) => {
                                            return (
                                                <option id={list.id} value={list.value}>{list.id}</option>
                                            );
                                        })}
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Label for="clientGAD4">4. Trouble relaxing</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="gad4" >
                                        {gadList.map((list) => {
                                            return (
                                                <option id={list.id} value={list.value}>{list.id}</option>
                                            );
                                        })}
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Label for="clientGAD5">5. Being so restless that it’s hard to sit still</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="gad5" >
                                        {gadList.map((list) => {
                                            return (
                                                <option id={list.id} value={list.value}>{list.id}</option>
                                            );
                                        })}
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Label for="clientGAD6">6. Becoming easily annoyed or irritable</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="gad6" >
                                        {gadList.map((list) => {
                                            return (
                                                <option id={list.id} value={list.value}>{list.id}</option>
                                            );
                                        })}
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Label for="clientGAD7">7. Feeling afraid as if something awful might happen</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="gad7" >
                                        {gadList.map((list) => {
                                            return (
                                                <option id={list.id} value={list.value}>{list.id}</option>
                                            );
                                        })}
                                    </Input>
                                </Col>
                            </Row>
                            <br/><br/>
                            <Row>
                                <Label for="clientGADTot">Total Score (Sum of Column Scores)</Label>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="6">
                                    <Label for="clientGADProb">If any of the above problems were identified, how difficult have these made it for you to do your work, take care of things at home, or get along with other people?</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="clientGADProb" >
                                        {gadDifList.map((list) => {
                                            return (
                                                <option id={list} value={list} >{list}</option>
                                            );
                                        })}
                                    </Input>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </>
    );
};

export default GAD;
