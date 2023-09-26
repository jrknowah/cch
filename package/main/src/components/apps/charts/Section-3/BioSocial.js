import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, InputGroup, InputGroupText, Form, Table
} from 'reactstrap';
import Select from 'react-select';
import {assistList, finList, gfp, ynd, housingList} from "../../../../data/arrayList";
import Profile from "../../../widgets/Profile";


const BioSocial = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>Bio-Social Assessment</Label>
            </Row>
            <Row>
                <Col md="4">
                
                </Col>
                <Col md="4">
                    <Profile/>
                </Col>
                <Col md="4">
                
                </Col>
            </Row>
            <Row className="text-center">
                <Label>FINANCIAL SCREENING</Label>
            </Row>
            <Row>
                {finList.map((list) => (
                <Col sm="12" md="4">
                    <Form>
                        <InputGroup>
                            <InputGroupText>{list.finListTile}</InputGroupText>
                            <Input type="text" id={list.finListTile} />
                        </InputGroup>
                    </Form>
                </Col>
                    ))}
            </Row>
            <Row className="text-center">
                <Label>Payee Information</Label>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for=" ">Do you have a payee?</Label>
                        <Input type="select" id="payeeChoice" name=" " >
                            {ynd.map((list) => {
                                return (
                                   <option>{list}</option>
                                );
                            })}
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for=" Name">Payee Name</Label>
                        <Input type="text" id="payeeName" name=" Name" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for=" Phone">Payee Phone</Label>
                        <Input type="tel" id="payeePhone" name=" Phone" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Label className="text-center">Employment History</Label>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientBeenEmployed">Have you ever been employed?</Label>
                        <Input type="select" id="clientBeenEmployed" name="clientBeenEmployed" >
                            {ynd.map((list) => {
                                return (
                                   <option>{list}</option>
                                );
                            })}
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientEmpIntr">Are you interested in obtaining employment?</Label>
                        <Input type="select" id="clientEmpIntr" name="clientEmpIntr" >
                            {ynd.map((list) => {
                                return (
                                   <option>{list}</option>
                                );
                            })}
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientEmployed">Are you currently employed?</Label>
                        <Input type="select" id="clientEmployed" name="clientEmployed" >
                            {ynd.map((list) => {
                                return (
                                   <option>{list}</option>
                                );
                            })}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientEmployer">Name of Employer</Label>
                        <Input type="text" name="clientEmployer" id="clientEmployer" />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Label>Debt</Label>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientDebt">Owe any debt to a public agency?</Label>
                        <Input type="select" id="clientDebt" name="clientDebt" >
                            {ynd.map((list) => {
                                return (
                                   <option>{list}</option>
                                );
                            })}
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4" sm="12">
                    <FormGroup>
                        <Label for="clientBankrupt">Ever filed for bankruptcy?</Label>
                        <Input type="select" id="clientBankrupt" name="clientBankrupt" >
                            {ynd.map((list) => {
                                return (
                                   <option>{list}</option>
                                );
                            })}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Label for="clientContactInfo">Housing Screening</Label>
            </Row>
            <Row>
                <Col md="4" >
                    <Label for="clientGovSponProgram">Ever applied for government housing?
                        <FormGroup>
                            <Select
                                closeMenuOnSelect={false}
                                isMulti
                                options={housingList}
                            />
                        </FormGroup>
                    </Label>
                </Col>
                <Col md="4" >
                    <Label for="clientContactInfo">Ever lived in government housing?
                        <FormGroup>
                            <Select
                                closeMenuOnSelect={false}
                                isMulti
                                options={housingList}
                            />
                        </FormGroup>
                    </Label>
                </Col>
                <Col md="4" >
                    <Label for="clientEmployed">Ever rented before?</Label>
                    <Input type="select" id="clientEmployed" name="clientEmployed" >
                        {ynd.map((list) => {
                            return (
                                <option>{list}</option>
                            );
                        })}
                    </Input>
                </Col>
            </Row>
            <Row>
                
                <Col md="4" >
                    <Label for="clientEmployed">Ever been served a late notice?</Label>
                    <Input type="select" id="clientEmployed" name="clientEmployed" >
                        {ynd.map((list) => {
                            return (
                                <option>{list}</option>
                            );
                        })}
                    </Input>
                </Col>
                <Col md="4" >
                    <Label for="clientEmployed">Ever been evicted?</Label>
                    <Input type="select" id="clientEmployed" name="clientEmployed" >
                        {ynd.map((list) => {
                            return (
                                <option>{list}</option>
                            );
                        })}
                    </Input>
                </Col>
                <Col md="4" >
                    <Label for="clientEmployed">Ever had problems with previous landlords?</Label>
                    <Input type="select" id="clientEmployed" name="clientEmployed" >
                        {ynd.map((list) => {
                            return (
                                <option>{list}</option>
                            );
                        })}
                    </Input>
                </Col>
            </Row>
            <Row>       
                <Col md="4" >
                    <Label for="clientEmployed">Do you have any outstanding utility bills?</Label>
                    <Input type="select" id="clientEmployed" name="clientEmployed" >
                        {ynd.map((list) => {
                            return (
                                <option>{list}</option>
                            );
                        })}
                    </Input>
                </Col>
                <Col md="4" >
                    <Label for="clientEmployed">Rate your credit?</Label>
                    <Input type="select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                        {gfp.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <FormGroup>
                        <Label for="clientNumOfHousehold">Total Number in Household</Label>
                        <Input type="text" name="clientNumOfHousehold" id="clientNumOfHousehold" />
                    </FormGroup>
                </Col>
                <Col md="4" >
                    <FormGroup>
                        <Label for="clientNumOfAdultsHoused">Number of adults to be housed?</Label>
                        <Input type="text" name="clientNumOfAdultsHoused" id="clientNumOfAdultsHoused" />
                    </FormGroup>
                </Col>
                <Col md="4" >
                    <FormGroup>
                        <Label for="clientEmployed">Number of children to be housed?</Label>
                        <Input type="text" name="clientNumOfChildrenHoused" id="clientNumOfChildrenHoused" />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Label for="clientContactInfo">Medical</Label>
            </Row>         
            <Row>
                <Col  md="2">
                    <Label for="clientContactInfo">Physician</Label>
                    <Input type="text" name="customcheck1" />
                </Col>
                <Col  md="2">
                    <Label for="clientContactInfo">Facility</Label>
                    <Input type="text" name="customcheck1" />
                </Col>
                <Col  md="2">
                    <Label for="clientContactInfo">Address</Label>
                    <Input type="text" name="customcheck1" />
                </Col>
                <Col  md="1">
                    <Label for="clientContactInfo">State</Label>
                    <Input type="text" name="customcheck1" />
                </Col>
                <Col  md="2">
                    <Label for="clientContactInfo">Zip Code</Label>
                    <Input type="text" name="customcheck1" />
                </Col>
                <Col  md="1">
                    <Label for="clientContactInfo">Phone </Label>
                    <Input type="tel" name="customcheck1" />
                </Col>
            </Row>
            <Row>
                <Col  md="4">
                    <Label for="clientAppointment">LAST APPOINTMENT</Label>
                    <Input type="datetime-local" id="clientLastAppt" name="clientLastAppt" />
                </Col>
                <Col  md="4">
                    <Label for="clientAppointment">NEXT APPOINTMENT</Label>
                    <Input type="datetime-local"id="clientNextAppt" name="clientNextAppt" />
                </Col>

            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>PCP/Specialty Type</th>
                            <th>Doctor’s Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                            <td><Input input type="text" id=" " name=" "/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>FUNCTIONAL SCREENING</Label></b>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label>Ambulatory Status</Label>
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <Label for="clientContactInfo">Walking (If assistance is needed specify below ifnot skip to next section: Activities of Daily Living)

                    </Label>
                </Col>
                <Col md="2">
                    <FormGroup>
                        <Input type="select" id="clientEmployed" name="clientEmployed" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="12" >
                    <FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Limb Braces</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Cane</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Walker</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Wheel Chair (If Yes, please answer question below):</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Medicare</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Other (If yes, specify)</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Private</Label>
                        </FormGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={{ size: 2, offset: 3}}>
                    <Label>Needs assistance in transferring in & out of bed?</Label>
                </Col>
                <Col md="1">
                    <Input type="select" id="clientEmployed" name="clientEmployed" >
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md={{ size: 2, offset:2}}>
                    <Input type="text" id="clientEmployed" name="clientEmployed"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label>Activities of Daily Living</Label>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Eating</InputGroupText>
                                <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                    {assistList.map((a) => (
                                        <option value={a}>{a}</option>
                                    ))}
                                </Input>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Bathing / Showering</InputGroupText>
                            <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                {assistList.map((a) => (
                                    <option value={a}>{a}</option>
                                ))}
                            </Input>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Brushing Teeth</InputGroupText>
                            <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                {assistList.map((a) => (
                                    <option value={a}>{a}</option>
                                ))}
                            </Input>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Toileting</InputGroupText>
                            <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                {assistList.map((a) => (
                                    <option value={a}>{a}</option>
                                ))}
                            </Input>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Cooking</InputGroupText>
                            <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                {assistList.map((a) => (
                                    <option value={a}>{a}</option>
                                ))}
                            </Input>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Cleaning</InputGroupText>
                            <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                {assistList.map((a) => (
                                    <option value={a}>{a}</option>
                                ))}
                            </Input>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Laundry</InputGroupText>
                            <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                {assistList.map((a) => (
                                    <option value={a}>{a}</option>
                                ))}
                            </Input>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Taking Medication</InputGroupText>
                            <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                {assistList.map((a) => (
                                    <option value={a}>{a}</option>
                                ))}
                            </Input>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
            <Row>
                <br/>
            </Row>
            <Row>
                <Col md="3">
                    If any assistance (Partial and/or Complete) please specify:
                </Col>
                <Col md="3">
                    <Input type="textarea" name="clientEnrollWhere" id="clientEnrollWhere" />
                </Col>
            </Row>
            <Row>
                <br/>
            </Row>
            <Row>
                <Col>
                    <Label>Communication & Language</Label>
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <Label for="clientContactInfo">Does patient communicate / express self “VERBALLY” (If no, please answerquestions below)

                    </Label>
                </Col>
                <Col md="2">
                    <FormGroup>
                        <Input type="select" id="clientEmployed" name="clientEmployed" >
                            <option> </option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="12" >
                    <FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Expresses by facial expressions or gestures</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Expresses by sounds or movements</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Uses a talking device</Label>
                        </FormGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="12" >
                    <FormGroup>
                        <FormGroup>
                            <Label check>Bio-Social Summary Notes</Label>
                            <Input type="textarea" name="customcheck1" />
                        </FormGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <FormGroup>
                        <FormGroup>
                            <Label check>Bio-Social Assessment Completed By:</Label>
                            <Input type="text" name="customcheck1" />
                        </FormGroup>
                    </FormGroup>
                </Col>
                <Col md="6">

                </Col>
            </Row>
        </div>
);
};

export default BioSocial;
