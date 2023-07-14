import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input
} from 'reactstrap';

const OrderForm = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>ORDER FORM</Label>
            </Row>
            <Row>
                <Col md="12">
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Label sm="3">Name:</Label>
                                    <Col sm="5">
                                        <Input/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label sm="3">DOB:</Label>
                                    <Col sm="5">
                                        <Input/>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Label sm="3">Date of Admission:</Label>
                                    <Col sm="5">
                                        <Input type="date"/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label sm="3">Allergies:</Label>
                                    <Col sm="5">
                                        <Input type="textarea" rows="2"/>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label check>
                                    <Input type="checkbox" name="" /> Admit to Serenity Recuperative Care
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label sm="2">Diagnosis</Label>
                                    <Col sm="5">
                                        <Input/>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label >
                                    Diet<br/>
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label check>
                                    <Input type="checkbox" name="" />Regular
                                </Label>
                                <Label check>
                                    <Input type="checkbox" name="" />Low fat
                                </Label>
                                <Label check>
                                    <Input type="checkbox" name="" />Low Salt
                                </Label>
                                <Label check>
                                    <Input type="checkbox" name="" />Increased Calorie Intake
                                </Label>
                                <Label check>
                                    <Input type="checkbox" name="" />Diabetic
                                </Label>
                                <Label check>
                                    <Input type="checkbox" name="" />Pureed
                                </Label><br/>
                                <Label check>
                                    <Input type="checkbox" name="" />Other
                                    <Input type="text" name="" />
                                </Label>
                            </FormGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Label>Nursing Orders</Label>
            </Row>
            <Row>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Administer medications as ordered on prescription bottles
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Activity
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />No restrictions
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />No weight bearing
                        <Input sm="1"  type="text" id="" name="" />x
                        <Input type="text" id="" name="" />
                        <Label>days/wks/months</Label>
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />No lifting
                        <Input sm="1"  type="text" id="" name="" />lbs. x
                        <Input type="text" id="" name="" />
                        <Label>days/wks/months</Label>
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup >
                        <Input type="checkbox" id="" name="" />Elevate<br/>
                        <Input type="checkbox" id="" name="" />Right Arm<br/>
                        <Input type="checkbox" id="" name="" />Left Arm<br/>
                        <Input type="checkbox" id="" name="" />Right Leg<br/>
                        <Input type="checkbox" id="" name="" />Left Leg<br/>
                        <Input type="text" id="" name="" /><Label>hrs per day</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Take vitals (frequency)
                        <Input type="text" id="" name="" />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Weight<br/>
                        <Input type="checkbox" id="" name="" />Admission Weight:
                        <Input type="text" id="" name="" />
                        <Input type="checkbox" id="" name="" />Daily Weight<br/>
                        <Input type="checkbox" id="" name="" />Weekly Weight:
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Oxygen<br/>
                        <Input type="checkbox" id="" name="" />
                        <Input type="text" id="" name="" />L via Nasal Cannula or Face Mask <br/>
                        <b>If patient O2 Sats less than 93%, please notify On-Call provider.</b><br/>
                        <Input type="checkbox" id="" name="" />Intravenous access<br/>
                        Location<Input type="text" id="" name="" /><br/>
                        <Input type="checkbox" id="" name="" />Monitor for signs and symptoms of infiltration/phlebitis: redness, swelling,
                        drainage and/or pain at site<br/>
                        <Input type="checkbox" id="" name="" />Flush with 3cc of NS Q shift to maintain patency
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Hygiene<br/>
                        <Input type="checkbox" id="" name="" />No Restrictions (ok to shower) <br/>
                        <Input type="checkbox" id="" name="" />No Soaking in Water<br/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>

            </Row>
            <Row>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Wound Care<br/>
                        <Input type="checkbox" id="" name="" />Frequency:<br/>
                        <Input type="text" id="" name="" /><br/>
                        <Input type="checkbox" id="" name="" />Directions:<br/>
                        <Input type="textarea" id="" name="" /><br/>
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Blood Sugar (BS) check<br/>
                        <Input type="checkbox" id="" name="" />Frequency:<br/>
                        <Input type="text" id="" name="" /><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Administer Sliding Scale Insulin as follows:<br/>
                        <Input type="checkbox" id="" name="" />
                        <Input type="text" id="" name="" />300-350 – instruct member to self administer ___units of Regular or Humalog
                        Insulin<br/>
                        <b>If patient O2 Sats less than 93%, please notify On-Call provider.</b><br/>
                        <Input type="checkbox" id="" name="" />Intravenous access<br/>
                        Location<Input type="text" id="" name="" /><br/>
                        <Input type="checkbox" id="" name="" />Monitor for signs and symptoms of infiltration/phlebitis: redness, swelling,
                        drainage and/or pain at site<br/>
                        <Input type="checkbox" id="" name="" />Flush with 3cc of NS Q shift to maintain patency
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Hygiene<br/>
                        <Input type="checkbox" id="" name="" />No Restrictions (ok to shower) <br/>
                        <Input type="checkbox" id="" name="" />No Soaking in Water<br/>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Label>Medical Assessment Completed By:</Label>
            </Row>
            <Row>
                <Col md="6">
                    <Label for="">Signature</Label>
                    <Input type="text" id="" name="" /><br/>
                    <Label for="">Type Name</Label>
                    <Input type="text" id="" name="" /><br/>
                </Col>
                <Col>
                    <Label for="">Date</Label>
                    <Input type="date" id="" name="" /><br/>
                    <Label for="">Title</Label>
                    <Input type="text" id="" name="" /><br/>
                </Col>
            </Row>
        </div>
    );
};

export default OrderForm;
