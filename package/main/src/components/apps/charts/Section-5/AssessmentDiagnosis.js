import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input
} from 'reactstrap';

const AssessmentDiagnosis = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>Assessment/Diagnosis</Label>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Input type="text" id="" name="" placeholder="Diagnosis 1" /><br/>
                        <Input type="text" id="" name="" placeholder="Diagnosis 2"/><br/>
                        <Input type="text" id="" name="" placeholder="Diagnosis 3"/><br/>
                        <Input type="text" id="" name="" placeholder="Diagnosis 4"/><br/>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Input type="text" id="" name="" placeholder="Diagnosis 5"/><br/>
                        <Input type="text" id="" name="" placeholder="Diagnosis 6"/><br/>
                        <Input type="text" id="" name="" placeholder="Diagnosis 7"/><br/>
                        <Input type="text" id="" name="" placeholder="Diagnosis 8"/><br/>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Label>Plan</Label>
            </Row>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <Input type="textarea"  rows="10" id="" name="" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <Label for="">RTC:</Label><br/>
                        <Input type="text" id="clientDebt" name="clientDebt"/>

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

export default AssessmentDiagnosis;
