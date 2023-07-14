import {Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from 'reactstrap';
import React from "react";
import {gadDifList, gadList} from "../../../../data/arrayList";


const PHQ = () => {
    return (
        <>
            <Card>
                <CardHeader>PATIENT HEALTH QUESTIONNAIRE (PHQ-9)</CardHeader>
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
                                    <Label for="clientPHQ1">1. Little interest or pleasure in doing things</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="PHQ1" >
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
                                    <Label for="clientGAD2">2. Feeling down, depressed, or hopeless</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="PHQ2" >
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
                                    <Label for="clientPHQ3">3. Trouble falling or staying asleep, or sleeping too much</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="PHQ3" >
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
                                    <Label for="clientPHQ4">4. Feeling tired or having little energy</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="PHQ4" >
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
                                    <Label for="clientPHQ5">5. Poor appetite or overeating</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="PHQ5" >
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
                                    <Label for="clientPHQ6">6. Feeling bad about yourself or that you are a failure or have letyourself or your family down</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="PHQ6" >
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
                                    <Label for="clientPHQ7">7. Trouble concentrating on things, such as reading the newspaper or watching television</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="PHQ7" >
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
                                    <Label for="clientPHQ8">8. Moving or speaking so slowly that other people could have noticed. Or the opposite being so fidgety or restless that you have been moving around a lot more than usual</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="PHQ8" >
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
                                    <Label for="clientPHQ9">9. Thoughts that you would be better off dead, or of hurting yourself</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="PHQ9" >
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
                                <Label for="clientPHQTot">Total Score (Sum of Column Scores)</Label>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="6">
                                    <Label for="clientPHQProb">If any of the above problems were identified, how difficult have these made it for you to do your work, take care of things at home, or get along with other people?</Label>
                                </Col>
                                <Col>

                                    <Input type="select" id="clientPHQProb" >
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

export default PHQ;
