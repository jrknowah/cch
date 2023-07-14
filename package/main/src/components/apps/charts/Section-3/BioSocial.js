import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, InputGroup, InputGroupText, Form, Table
} from 'reactstrap';
import {assistList, finList, gfp} from "../../../../data/arrayList";


const BioSocial = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>Bio-Social Assessment</Label>
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

                <Col md="3">
                    <FormGroup>
                        <Label for=" ">Do you have a payee?</Label>
                        <Input type="select" id=" " name=" " >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for=" Name">Payee Name</Label>
                        <Input type="text" id=" Name" name=" Name" />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for=" Phone">Payee Phone</Label>
                        <Input type="tel" id=" Phone" name=" Phone" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Label className="text-center">Employment History</Label>
            </Row>
            <Row>
                <Col md="3">
                    <FormGroup>
                        <Label for="clientEmployed">Have you ever been employed?</Label>
                        <Input type="select" id="clientEmployed" name="clientEmployed" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="clientEmployed">Are you currently employed?</Label>
                        <Input type="select" id="clientEmployed" name="clientEmployed" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup>
                        <Label for="clientEmployer">Name of Employer</Label>
                        <Input type="text" name="clientEmployer" id="clientEmployer" />
                    </FormGroup>
                </Col>
                <Col md="4" sm="12">
                    <FormGroup>
                        <Label for="clientEmpIntr">Are you interested in obtaining employment?</Label>
                        <Input type="select" id="clientEmpIntr" name="clientEmpIntr" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Label>Debt</Label>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="clientDebt">Do you owe any debt to a public agency?</Label>
                        <Input type="select" id="clientDebt" name="clientDebt" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="clientBankrupt">Have you ever filed for bankruptcy?</Label>
                        <Input type="select" id="clientBankrupt" name="clientBankrupt" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Label for="clientContactInfo">Housing Screening</Label>
            </Row>
            <Row>
                <Col md="4" >
                    <Label for="clientContactInfo">Have you ever applied for government-sponsoring housing? (If Yes, specify)
                    <FormGroup>
                        <FormGroup check inline>
                            <Input type="radio" name="customcheck1" />
                            <Label check>Yes</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="radio" name="customcheck1" />
                            <Label check>No</Label>
                        </FormGroup>
                    </FormGroup></Label>
                </Col>
                <Col md="4" >
                    <FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Section 8</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Shelter Plus Care</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>SRO</Label>
                        </FormGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <Label for="clientContactInfo">Have you lived in government sponsored housing? (If Yes, specify)
                        <FormGroup>
                            <FormGroup check inline>
                                <Input type="radio" name="customcheck1" />
                                <Label check>Yes</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input type="radio" name="customcheck1" />
                                <Label check>No</Label>
                            </FormGroup>
                        </FormGroup></Label>
                </Col>
                <Col md="4" >
                    <FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Section 8</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Shelter Plus Care</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>SRO</Label>
                        </FormGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="clientEmployed">Have you ever rented before?</Label>
                    <Input type="select" id="clientEmployed" name="clientEmployed" >
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="clientEmployed">Have you ever been served a late notice before?</Label>
                    <Input type="select" id="clientEmployed" name="clientEmployed" >
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="2" >
                    <Label for="clientEmployed">Have you ever been evicted?</Label>
                    <Input type="select" id="clientEmployed" name="clientEmployed" >
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="clientEmployed">Have you had problems with previous landlords?</Label>
                    <Input type="select" id="clientEmployed" name="clientEmployed" >
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="2" >
                    <Label for="clientEmployed">Do you have any outstanding utility bills?</Label>
                    <Input type="select" id="clientEmployed" name="clientEmployed" >
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <Label for="clientEmployed">How would you rate your credit?</Label>
                    <Input type="select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                        {gfp.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <Label for="clientEmployed">Total Number in Household</Label>
                </Col>
                <Col md="4" >
                    <Label for="clientEmployed"># of adults to be housed in addition to applicant?</Label>
                </Col>
                <Col md="4" >
                    <Label for="clientEmployed"># of children to be housed?</Label>
                </Col>
            </Row>
            <Row>
                <Col md={{ size: 2, offset: 3}} >
                    <FormGroup>
                        <FormGroup>
                            <Input type="text" id="clientEmployed" name="clientEmployed" />
                        </FormGroup>
                    </FormGroup>
                </Col>
                <Col md={{ size: 2, offset: 2}} >
                    <FormGroup>
                        <FormGroup>
                            <Input type="text" id="clientEmployed" name="clientEmployed" />
                        </FormGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Label for="clientContactInfo">Medical</Label>
            </Row>
            <Row>
                <Col md="4" >
                    <Label for="clientContactInfo">Does individual have health Insurance?(If Yes, specify)
                        <FormGroup>
                            <FormGroup check inline>
                                <Input type="radio" name="customcheck1" />
                                <Label check>Yes</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input type="radio" name="customcheck1" />
                                <Label check>No</Label>
                            </FormGroup>
                        </FormGroup></Label>
                </Col>
                <Col md="4" >
                    <FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Medi-Cal</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Medicare</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>HMO</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input type="checkbox" name="customcheck1" />
                            <Label check>Private</Label>
                        </FormGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <FormGroup>
                        <Label for="clientContactInfo">Health Insurance Provider (e.g. HealthNet/LA Care):</Label>
                    </FormGroup>
                </Col>
                <Col md="4" >
                    <Input type="text" name="customcheck1" />
                </Col>
            </Row>
            <Row className="text-center">
                <Label for="clientContactInfo">Medical Provider Information</Label>
            </Row>
            <Row>
                <Col md="6" >
                    <Label for="clientContactInfo">Do you have a primary care physician?(If Yes, specify)
                        <FormGroup>
                            <FormGroup check inline>
                                <Input type="radio" name="customcheck1" />
                                <Label check>Yes</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input type="radio" name="customcheck1" />
                                <Label check>No</Label>
                            </FormGroup>
                        </FormGroup></Label>
                </Col>
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
                <Col  md="1">
                    <Label for="clientContactInfo">Zip Code</Label>
                    <Input type="text" name="customcheck1" />
                </Col>
                <Col  md="1">
                    <Label for="clientContactInfo">Phone </Label>
                    <Input type="tel" name="customcheck1" />
                </Col>
            </Row>
            <Row>
                <Col  md="3">
                    <Label for="clientContactInfo">LAST APPOINTMENT</Label>
                    <Input type="datetime-local" name="customcheck1" />
                </Col>
                <Col  md="3">
                    <Label for="clientContactInfo">NEXT APPOINTMENT</Label>
                    <Input type="datetime-local" name="customcheck1" />
                </Col>

            </Row>
            <Row>
                <Col>
                    *If client agrees, sign release of information to coordinate treatment*
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label for="clientContactInfo">Do you have a primary care physician?(If Yes, specify)</Label>
                </Col>
                <Col md="1">
                    <Input type="select" id="clientEmployed" name="clientEmployed" >
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
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
