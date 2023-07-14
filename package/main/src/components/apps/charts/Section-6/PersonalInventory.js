import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Table
} from 'reactstrap';
import {inventoryAssistList, inventoryClothingList, inventorySpecList} from "../../../../data/arrayList";


const PersonalInventory = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>MEDICAL FACE SHEET</Label>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">Diagnosis</Label>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Diagnosis 1" /><br/>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Diagnosis 2"/><br/>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Diagnosis 3"/><br/>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Diagnosis 4"/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee"></Label>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Diagnosis 5"/><br/>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Diagnosis 6"/><br/>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Diagnosis 7"/><br/>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Diagnosis 8"/><br/>
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
                <Col md="10">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>QTY</th>
                            <th>ARTICLES</th>
                            <th>DATE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {inventoryClothingList.map((list) => {

                            return (
                                <tr>
                                    <td><Input input type="text" id={list.qty} name={list.qty} /></td>
                                    <td>{list.name}</td>
                                    <td><Input input type="text" id={list.date} name={list.date} /></td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="10">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>QTY</th>
                            <th>ITEMS OF SPECIFIC VALUE</th>
                            <th>DATE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {inventorySpecList.map((list) => {

                            return (
                                <tr>
                                    <td><Input input type="text" id={list.qty} name={list.qty} /></td>
                                    <td>{list.name}</td>
                                    <td><Input input type="text" id={list.date} name={list.date} /></td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="10">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>QTY</th>
                            <th>ASSISTIVE DEVICES</th>
                            <th>DATE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {inventoryAssistList.map((list) => {

                            return (
                                <tr>
                                    <td><Input input type="text" id={list.qty} name={list.qty} /></td>
                                    <td>{list.name}</td>
                                    <td><Input input type="text" id={list.date} name={list.date} /></td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="5">
                    <FormGroup>
                        <Label for="clientPayeePhone">NOTES ON ARTICLES (Listing of items damaged. Etc.)</Label>
                        <Input type="textarea" id="clientPayeePhone" name="clientPayeePhone" />
                    </FormGroup>
                </Col>
                <Col md="5">
                    <FormGroup>
                        <Label for="clientEmployed">REMARKS</Label>
                        <Input type="textarea" id="clientPayeePhone" name="clientPayeePhone" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Label for="clientPayeePhone">MEMBER NAME</Label>
                </Col>
                <Col md="3">
                    <Label for="clientPayeePhone">ROOM #</Label>
                </Col>
                <Col md="3">
                    <Label for="clientPayeePhone">DATE</Label>
                </Col>
                <Col md="3">
                    <Label for="clientPayeePhone">HFH #</Label>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <FormGroup>
                        <Input type="text" id="clientPayeePhone" name="clientPayeePhone" />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Input type="text" id="clientPayeePhone" name="clientPayeePhone" />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Input type="text" id="clientPayeePhone" name="clientPayeePhone" />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Input type="text" id="clientPayeePhone" name="clientPayeePhone" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>

                    <Col md="3">
                        <FormGroup>
                            <Input type="text" id="clientPayeePhone" name="clientPayeePhone" placeholder="Patient Signature" />
                        </FormGroup>
                    </Col>
                    <Col md={{ size: 3, offset: 6 }}>
                        <FormGroup>
                            <Input type="text" id="clientPayeePhone" name="clientPayeePhone" placeholder="Staff Signature" />
                        </FormGroup>
                    </Col>

            </Row>
        </div>
    );
};

export default PersonalInventory;
