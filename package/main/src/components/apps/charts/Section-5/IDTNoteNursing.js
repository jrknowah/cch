import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Button
} from 'reactstrap';

const IDTNoteNursing = () => {
    return (
        <div className="form-body">
            <Row className="text-center">
                <b><Label>IDT NOTE - Nursing</Label></b>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="idtNursingAppointYN">Has the Member been able to attend appointments?</Label>
                        <Input type="textarea" id="idtNursingAppointYN" name="idtNursingAppointYN" />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="idtNursingAppoint">Specific appointment(s) Member would like to focus on attending?</Label>
                        <Input type="textarea" id="idtNursingAppoint" name="idtNursingAppoint" placeholder=""/><br/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="idtNursingProb">Specific problems the member is experiencing that are barriers to independent functioning?</Label>
                        <Input type="textarea" id="idtNursingProb" name="idtNursingProb" />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="idtNursingGoal">What is the Member’s goal? Has it changed since initial eval/previous appointments?</Label>
                        <Input type="textarea" id="idtNursingGoal" name="idtNursingGoal" />
                    </FormGroup>
                </Col>
                
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="idtNursingCompliant">Is Member compliant with meds/therapy?</Label>
                        <Input type="textarea" id="idtNursingCompliant" name="idtNursingCompliant" placeholder=""/><br/>
                    </FormGroup>
                </Col>

            </Row>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <center><Label for="idtNursingInfo">ADDITIONAL INFO:</Label></center>
                        <Input type="textarea" id="idtNursingInfo" name="idtNursingInfo" />
                    </FormGroup>
                </Col>

            </Row>
            <Button color="primary" size="lg">Save</Button>
        </div>
    );
};

export default IDTNoteNursing;
