import React from "react";
// import {BrowserRouter} from "react-router-dom";
import {
    Col,
    Form, FormGroup,
    Input, Label,
    Row
} from 'reactstrap';
import { } from "../../../../data/arrayList";


const CalAim = () => {
    return (
        <div>
            <Row className="text-center">
                <Label><b>Agreement to Participate in the Medi-Cal Whole Person Care-Los Angeles Program</b></Label>
            </Row>
            <Form>

                <p>

                    Los Angeles (LA) County has a new program called CalAIM that will help expand housing/services that
                    are available to unhoused individuals. We invite you to participate in this program.
                    If you participate in CalAIM, you may receive additional services. In some cases, the CalAIM program
                    covers the cost of services you are already receiving or may receive in the future.
                    Your participation in CalAIM is voluntary. You have the right to refuse services or opt out any time.
                    Enrollment in CalAIM will NOT impact the housing/services you currently receive or might receive in the
                    future. LA County will determine if you are eligible and will complete all the necessary requirements.
                    DHS will not charge you for the extra services. You will not be paid to participate.

                     Do you acknowledge we have explained the CalAIM program to you?
                     Do you understand the terms of voluntary participation?
                     Do you agree to participate in the CalAIM [indicate program name: Housing Navigation, Tenancy
                    and Sustaining Services, or Recuperative Care]?
                     If you agree to the CalAIM Housing Navigation participation, do you also agree to participate in
                    [indicate program name: Housing Navigation, Tenancy and
                </p>

                <p>
                    Your participation in Whole Person Care is voluntary. You have the right to refuse
                    services at any time. You may opt out of Whole Person Care at any time.<br/><br/>

                    LA County will determine if you are eligible. We will determine the support available to
                    you. We can terminate or change the services available to you through Whole Person
                    Care at any time.<br/><br/>

                    We will not charge you for the extra services. You will not be paid to participate.
                    <br/><br/>

                    By signing this form:<br/><br/>
                    1. You acknowledge that we have explained its contents to you.<br/>
                    2. You acknowledge that you understand the terms of this agreement.<br/>
                    3. You agree to participate in the Whole Person Care-Los Angeles Program.<br/>
                </p>

                <div className="form-body">
                    <Row>
                        <Col md="4">
                            <FormGroup>
                                <Label for="">Signature of participant</Label>
                                <Input type="text" id="" name=""></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="">If this agreement is signed by a person other than the patient, please indicate the relationship:</Label>
                                <br/>
                                <Label for="">Signature of Patient’s Representative</Label>
                                <Input type="text" id="" name=""/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="">Intake Worker Signature</Label>
                                <Input type="text" id="" name=""/>
                            </FormGroup>
                        </Col>
                    </Row>

                </div>
            </Form>
        </div>
    )
};
export default CalAim;