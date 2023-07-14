import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Table
} from 'reactstrap';
import {
    allergyList
} from "../../../../data/arrayList";


const ClientFace = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>CLIENT FACE SHEET</Label>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <tr align="center">
                            <th colSpan="4"  >Contact Information</th>
                        </tr>
                        <tbody>
                        <tr>
                            <td>
                                <FormGroup>
                                    <Label>How are you able to be contacted?</Label>
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup>
                                    <Input type="select" placeholder="">
                                        <option value=""></option>
                                        <option value="">No Contact Info Given</option>
                                        <option value="">Individual refused to provide contact info</option>
                                    </Input>
                                </FormGroup>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Phone:<Input input type="phone" id="" name="" placeholder=""/></td>
                            <td>Alt Phone:<Input input type="phone" id="" name="" placeholder=""/></td>
                            <td>Email:<Input input type="email" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                    <Table className="align-middle">
                        <tr align="center">
                            <th colSpan="4"  >Emergency Contact Information</th>
                        </tr>
                        <tbody>
                        <tr>
                            <td>Name:<Input input type="text" id="" name="" placeholder=""/></td>
                            <td>Relationship:<Input input type="text" id="" name="" placeholder=""/></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan={4}>Address:<Input input type="text" id="" name="" placeholder=""/></td>
                        </tr>
                        <tr>
                            <td>City:<Input input type="text" id="" name="" placeholder=""/></td>
                            <td>State:<Input input type="text" id="" name="" placeholder=""/></td>
                            <td>Zip Code:<Input input type="text" id="" name="" placeholder=""/></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Phone:<Input input type="phone" id="" name="" placeholder=""/></td>
                            <td>Alt Phone:<Input input type="phone" id="" name="" placeholder=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                    <Table className="align-middle">
                        <tr align="center">
                            <th colSpan="4"  >Medical Information</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>
                                    <FormGroup>
                                        Type of Health Insurance:
                                        <Input type="select" placeholder="">
                                            <option value=""></option>
                                            <option value="">Medi-Cal</option>
                                            <option value="">Medi-Care</option>
                                            <option value="">HMO</option>
                                            <option value="">Private (specify carrier)</option>
                                        </Input>
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup>
                                        Private Carrier
                                        <Input input type="text" id="" name="" placeholder="Private Carrier"/>
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup>
                                        Insurance Number:<Input input type="text" id="" name="" placeholder=""/>
                                    </FormGroup>
                                </td>
                            </tr>
                            <tr>
                                <td>Physician:<Input input type="text" id="" name="" placeholder=""/></td>
                                <td>Facility:<Input input type="text" id="" name="" placeholder=""/></td>
                                <td>Phone Number:<Input input type="phone" id="" name="" placeholder=""/></td>
                                <td>Alt Number:<Input input type="phone" id="" name="" placeholder=""/></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table className="align-middle">
                        <tr align="center">
                            <th colSpan="4">Allergy/Intolerance History</th>
                        </tr>
                        <tbody>
                        <tr>
                            <td>
                                <FormGroup>
                                    <Label for="">List ALL allergies:</Label>
                                    <Input type="select" className="custom-select" id="" name="" >
                                        {allergyList.map((al) => (
                                            <option value={al}>{al}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </td>
                            <td colSpan={3}>
                                <FormGroup>
                                    <Label for="">Comments:</Label>
                                    <Input type="textarea" name="" id="" />
                                </FormGroup>
                            </td>
                            <td>

                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
};

export default ClientFace;
