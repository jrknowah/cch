import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input
} from 'reactstrap';
import Select from "react-select";
import {
    medCond,
} from "../../../../data/arrayList";

const AssessmentDiagnosis = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>Assessment/Diagnosis</Label>
            </Row>
            <Row className="text-center">
                <Col md="12">
                    <FormGroup>
                        <Select id="clientMedConditions" name="clientMedConditions"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond}
                        />
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
        </div>
    );
};

export default AssessmentDiagnosis;
