import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Table
} from 'reactstrap';

const MedFaceSheet = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>MEDICAL FACE SHEET</Label>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Input type="text" id="" name="" placeholder="Diagnosis 1" /><br/>
                        <Input type="text" id="" name="" placeholder="Diagnosis 2"/><br/>
                        <Input type="text" id="" name="" placeholder="Diagnosis 3"/><br/>
                        <Input type="text" id="" name="" placeholder="Diagnosis 4"/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for=""></Label>
                        <Input type="text" id="" name="" placeholder="Diagnosis 5"/><br/>
                        <Input type="text" id="" name="" placeholder="Diagnosis 6"/><br/>
                        <Input type="text" id="" name="" placeholder="Diagnosis 7"/><br/>
                        <Input type="text" id="" name="" placeholder="Diagnosis 8"/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">Addtional Medical History</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeePhone">Pertinent Information</Label>
                        <Input type="textarea" id="clientPayeePhone" name="clientPayeePhone" />
                    </FormGroup>
                </Col>
                <Col md="5">
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
                <Col md="4">
                    <FormGroup>
                        <Label for="clientDebt">List All Allergies</Label><br/>
                        <Input type="checkbox" id="clientDebt" name="clientDebt"/>
                        <Label for="clientDebt">No Allergies</Label>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Allergies 1"/><br/>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Allergies 2"/><br/>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Allergies 3"/><br/>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Allergies 4"/><br/>
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
