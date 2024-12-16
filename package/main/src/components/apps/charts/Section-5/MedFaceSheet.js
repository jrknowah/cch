import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Table
} from 'reactstrap';
import Select from "react-select"
import {
    allergyList, medCond,
} from "../../../../data/arrayList";

const MedFaceSheet = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>FACE SHEET</Label>
            </Row>
            {/* <MedicalDiagnosis /> */}
            <Row>
                <Col md="6">
                    <Label for="">Medical Conditions</Label>
                    <FormGroup>
                        <Select id="clientMedConditions" name="clientMedConditions"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond}
                        />
                    </FormGroup>                   
                </Col>
                <Col md="6" className="text-center">
                    <FormGroup>
                        <Label for="clientAddMedHistory">Addtional Medical History</Label>
                        <Input type="textarea" id="clientAddMedHistory" name="clientAddMedHistory" />
                    </FormGroup>
                </Col>
                
            </Row>
            <Row>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="clientPayeePhone">Pertinent Information</Label>
                        <Input type="textarea" id="clientPayeePhone" name="clientPayeePhone" />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="clientEmployed">Review of Charts/Previous Lab Work</Label>
                        <Input type="textarea" id="clientEmployed" name="clientEmployed" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Label className="text-center">Allergy/Intolerance History</Label>
                <Col md="6">
                    <FormGroup>
                        <Label for="">List ALL allergies:</Label>
                        <Select id="clientAllergy" name="clientAllergy"
                            closeMenuOnSelect={false}
                            isMulti
                            options={allergyList}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type of Appointment</th>
                        <th>Transportation Provided?</th>
                    </tr>
                    </thead>
                        <tbody>
                        <tr>
                            <td><Input input type="datetime-local" id="clientPayee" name="clientPayee" placeholder="Date & Time"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="checkbox" id="clientPayee" name="clientPayee"/>  Yes/No?</td>
                        </tr>
                        <tr>
                            <td><Input input type="datetime-local" id="clientPayee" name="clientPayee" placeholder="Date & Time"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="checkbox" id="clientPayee" name="clientPayee"/>  Yes/No?</td>
                        </tr>
                        <tr>
                            <td><Input input type="datetime-local" id="clientPayee" name="clientPayee" placeholder="Date & Time"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="checkbox" id="clientPayee" name="clientPayee"/>  Yes/No?</td>
                        </tr>
                        <tr>
                            <td><Input input type="datetime-local" id="clientPayee" name="clientPayee" placeholder="Date & Time"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="checkbox" id="clientPayee" name="clientPayee"/>  Yes/No?</td>
                        </tr>
                        <tr>
                            <td><Input input type="datetime-local" id="clientPayee" name="clientPayee" placeholder="Date & Time"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="checkbox" id="clientPayee" name="clientPayee"/>  Yes/No?</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
};

export default MedFaceSheet;
