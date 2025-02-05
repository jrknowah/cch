import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Table,
    Button
} from 'reactstrap';
import Select from "react-select"
import {
    allergyList, medCond, medicationData
} from "../../../../data/arrayList";
import ComponentCard from "../../../ComponentCard";

const MedFaceSheet = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>FACE SHEET</Label>
            </Row>
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
                <Col md="12">
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
                {/*--------------------------------------------------------------------------------*/}
                {/* Hospitalizations Table                                                  */}
                {/*--------------------------------------------------------------------------------*/}
        
                <ComponentCard
                title="Client Appointments"
                subtitle={
                    <Button color="primary" size="sm">Add Appointment</Button>
                }
                >
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Appointment</th>
                        <th>Location</th>
                        <th>Provider</th>
                        <th>Provider</th>
                    </tr>
                    </thead>
                    <tbody>
                    {medicationData.map((item) => (
                        <tr key={item.id}>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td>{item[2]}</td>
                            <td>{item[3]}</td>
                        </tr>
                        ))}
                
                    </tbody>
                </Table>
                </ComponentCard>  
            </Row>
            
            <Button color="primary" className="mt-3">Save</Button>
        </div>
    );
};

export default MedFaceSheet;
