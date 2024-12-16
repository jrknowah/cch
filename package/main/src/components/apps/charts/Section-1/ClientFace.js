import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Table
} from 'reactstrap';
import Select from 'react-select';
import {
    allergyList
} from "../../../../data/arrayList";


const ClientFace = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label></Label>
            </Row>
            <Row>
                <Label className="text-center">Client Contact Information</Label>
                <Col md="4">
                    Phone:<Input input type="phone" id="" name="" placeholder=""/>
                </Col>
                <Col md="4">
                    Alt Phone:<Input input type="phone" id="" name="" placeholder=""/>
                </Col>
                <Col md="4">
                    Email:<Input input type="email" id="" name=""/>
                </Col>
            </Row>        
            <Row>
            <Row>
                <Label className="text-center">Emergency Contact Information</Label>
                <Col md="4">
                    Name:<Input input type="text" id="" name="" placeholder="Velma Jackson"/>
                </Col>
                <Col md="4">
                    Phone:<Input input type="text" id="" name="" placeholder="323-370-1274"/>
                </Col>
                <Col md="4">
                    Relationship:<Input input type="text" id="" name="" placeholder="Grandmother"/>
                </Col>
            </Row>  
            <Row>
                <Col md="12">
                    Address:<Input input type="text" id="" name="" placeholder="12341111 S Figueroa St, Los Angeles, CA 90015"/>
                </Col>
            </Row>
            <Row>
                <Label className="text-center">Medical Information</Label>
                <Col md="4">
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
                </Col>
                <Col md="4">
                    <FormGroup>
                        Private Carrier
                        <Input input type="text" id="" name="" placeholder=""/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        Insurance Number:<Input input type="text" id="" name="" placeholder=""/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    Physician:<Input input type="text" id="" name="" placeholder=""/>
                </Col>
                <Col md="4">
                    Facility:<Input input type="text" id="" name="" placeholder="Star Clinic"/>
                </Col>
                <Col md="4">
                    Phone Number:<Input input type="phone" id="" name="" placeholder="323-370-1274"/>
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
                <Col md="6">
                    <FormGroup>
                        <Label for="">Comments:</Label>
                        <Input type="textarea" name="" id="" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    
                </Col>
                <Col md="4">
                    
                </Col>
                <Col md="4">
                    
                </Col>
            </Row>
                <Col>
        
                    <Table className="align-middle">
                        <tr align="center">
                            <th colSpan="4"></th>
                        </tr>
                        <tbody>
                        <tr>
                            <td>
                                
                            </td>
                            <td colSpan={3}>
                                
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
