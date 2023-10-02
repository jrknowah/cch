import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, InputGroup, InputGroupText, Form, Table
} from 'reactstrap';
import Select from 'react-select';
import {
    clientGenders, cmOb1, cmOb2, cmOb3, cmOb4, cmOb5,cmOb6,cmOb7,cmOb8,cmOb9,cmOb10,cmOb11,cmObNone,legalList,
    energyLevelList,
    gadList,
    gfp, famList, ynd,
    mhList, relList, resultInList,
    sleepPatternList, substanceAbuseOften, substanceAbuseUse, substanceList, traumaList, treatList,needsCol1
} from "../../../../data/arrayList";


const MentalHealth = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>Strengths and Challenges</Label>
            </Row>
            <Row className="text-center">
                <Col md="12">
                <FormGroup>
                    <FormGroup>
                        <center><Label check>Areas of Strengths</Label></center>
                        <Input type="textarea" name="customcheck1" />
                    </FormGroup>
                </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <center><Label>Family Origin</Label></center>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Who primarily raised you?</Label>
                    <FormGroup>
                        <Input type="select" className="custom-select" id="clientFamRaised" name="clientFamRaised" >
                            {famList.map((fam) => (
                                <option value={fam}>{fam}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <Label>Did your parents separate/divorce?</Label>
                    <FormGroup>
                        <Input type="select" className="custom-select" id="clientFamDiv" name="clientFamDiv" >
                            {ynd.map((y) => (
                                <option value={y}>{y}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <Label check>If yes, what age did this occur?</Label>
                    <FormGroup>
                    <Input type="select" className="custom-select" id="clientFamDivAge" name="clientFamDivAge" >
                        {ynd.map((y) => (
                            <option value={y}>{y}</option>
                        ))}
                    </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Label>How many siblings do you have?</Label>
                </Col>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Brother(s)</InputGroupText>
                            <Input type="text"/>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Half-Brother(s)</InputGroupText>
                            <Input type="text"/>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Step-Brother(s)</InputGroupText>
                            <Input type="text"/>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md="3">  
                </Col>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Sister(s)</InputGroupText>
                            <Input type="text"/>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Half-sister(s)</InputGroupText>
                            <Input type="text"/>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md="3">
                    <Form>
                        <InputGroup>
                            <InputGroupText>Step-sister(s)</InputGroupText>
                            <Input type="text"/>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col md="4">
                    <FormGroup >
                        <Label>What was your birth order?</Label>
                        <Input type="select" id="clientPayee" name="clientPayee" >
                            <option> </option>
                            <option>Only child</option>
                            <option>Youngest</option>
                            <option>Middle</option>
                            <option>Oldest</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup >
                        <Label>Childhood family’s economic status?</Label>
                        <Input type="select" id="clientPayee" name="clientPayee" >
                            <option> </option>
                            <option>Poverty level (on welfare)</option>
                            <option>Middle Class</option>
                            <option>Upper Middle Class</option>
                            <option>Wealthy</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup >
                        <Label>Overall, my childhood was:</Label>
                        <Input type="select" id="clientPayee" name="clientPayee" >
                            <option> </option>
                            <option>Good</option>
                            <option>Fair</option>
                            <option>Poor</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">As a child, my relationship with my mother was:</Label>
                        <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                            {relList.map((rel) => (
                                <option value={rel}>{rel}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">As a child, my relationship with my father was:</Label>
                        <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                            {relList.map((rel) => (
                                <option value={rel}>{rel}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">As a child, my relationship with my siblings was:</Label>
                        <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                            {relList.map((rel) => (
                                <option value={rel}>{rel}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">As a child, my relationship with my friends was:</Label>
                        <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                            {relList.map((rel) => (
                                <option value={rel}>{rel}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup >
                        <Label>Currently married or in relationship?</Label>
                        <Input type="select" id="" name="" >
                            <option> </option>
                            <option>Good</option>
                            <option>Fair</option>
                            <option>Poor</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">If Yes, this relationship is:</Label>
                        <Input type="select" id="" name="" >
                            <option> </option>
                            <option>Good</option>
                            <option>Fair</option>
                            <option>Poor</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="12">
                    <FormGroup>
                        <Label for="">List any other sources of emotional support</Label>
                        <Input type="textarea" id="" name="" />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Label for="clientContactInfo">Family Dynamic</Label>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup >
                        <Label>Do you have any children (If Yes, specify below)</Label>
                    </FormGroup>
                </Col>
                <Col md={{ size: 1, offset: 0}}>
                    <FormGroup>
                        <Input type="select" id="" name="" >
                            <option> </option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee"/></td>
                            <td>
                                <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                    {clientGenders.map((gen) => (
                                        <option value={gen}>{gen}</option>
                                    ))}
                                </Input>
                            </td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee"/></td>
                            <td>
                                <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                    {clientGenders.map((gen) => (
                                        <option value={gen}>{gen}</option>
                                    ))}
                                </Input>
                            </td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee"/></td>
                            <td>
                                <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                    {clientGenders.map((gen) => (
                                        <option value={gen}>{gen}</option>
                                    ))}
                                </Input>
                            </td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee"/></td>
                            <td>
                                <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                    {clientGenders.map((gen) => (
                                        <option value={gen}>{gen}</option>
                                    ))}
                                </Input>
                            </td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee"/></td>
                            <td>
                                <Input type="select" className="custom-select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                    {clientGenders.map((gen) => (
                                        <option value={gen}>{gen}</option>
                                    ))}
                                </Input>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup inline>
                        <Label for="">Do you have legal custody of your children?</Label>
                        <Input type="select" id="" name="" >
                            <option> </option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup inline>
                        <Label for="">Do you owe child support?</Label>
                        <Input type="select" id="" name="" >
                            <option> </option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup inline>
                        <Label for="">Have you ever been involved with DCFS?</Label>
                        <Input type="select" id="" name="" >
                            <option> </option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup inline>
                        <Label for="">Do you currently have an open DCFS case?</Label>
                        <Input type="select" id="" name="" >
                            <option> </option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup inline>
                        <Label for="">DCFS Workers Name</Label>
                        <Input type="text" id="" name=""/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup inline>
                        <Label for="">Phone Number</Label>
                        <Input type="text" id="" name=""/>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Label for="clientContactInfo">Supportive Services</Label>
            </Row>
            <Row>

            </Row>
            <Row>

            </Row>
            <Row>

            </Row>
            <Row>

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
                            <th>Program/Date Received Services (if known)</th>
                            <th>Name of Case Manager / Contact Person</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Mental Health History</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="">Ever been diagnosis with a mental illness?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">If YES, select one:</Label>
                    <Input type="select" className="custom-select" id="" name="" >
                        {mhList.map((mh) => (
                            <option value={mh}>{mh}</option>
                        ))}
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Mental Health Treatment History</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="">Ever utilized mental health services?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="2" >
                    <Label for="clientEmployed">Currently utilizing mental health services?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>List most current Mental Health Provider:</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="">Agency Name:</Label>
                    <Input type="text" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">MH Worker:</Label>
                    <Input type="text" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">Phone Number:</Label>
                    <Input type="tel" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">LAST APPOINTMENT:</Label>
                    <Input type="datetime-local" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">NEXT APPOINTMENT:</Label>
                    <Input type="datetime-local" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="5" >
                    <Label>Have you ever been hospitalized for mental health reason(s)?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="2" >
                    <Label>Total # hospitalizations:</Label>
                    <Input type="text" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Date Hospitalized</th>
                            <th>Location of Hospitalization (Hospital)</th>
                            <th>Reason for Hospitalization</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Input input type="date" id="" name=""/></td>
                                <td><Input input type="text" id="" name=""/></td>
                                <td><Input input type="text" id="" name=""/></td>
                            </tr>
                            <tr>
                                <td><Input input type="date" id="" name=""/></td>
                                <td><Input input type="text" id="" name=""/></td>
                                <td><Input input type="text" id="" name=""/></td>
                            </tr>
                            <tr>
                                <td><Input input type="date" id="" name=""/></td>
                                <td><Input input type="text" id="" name=""/></td>
                                <td><Input input type="text" id="" name=""/></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <Label for="">Have you ever seen a psychiatrist?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4" >
                    <Label for="">Are you current seeing a psychiatrist?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="">Psychiatrist:</Label>
                    <Input type="text" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">Facility:</Label>
                    <Input type="text" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">Phone Number:</Label>
                    <Input type="tel" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">LAST APPOINTMENT:</Label>
                    <Input type="datetime-local" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">NEXT APPOINTMENT:</Label>
                    <Input type="datetime-local" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Psychiatric Medications</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <Label for="">Have you ever taken medications for mental health?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4" >
                    <Label for="">Are you currently taking medications for mental health issues?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
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
                            <th>Name of Medication</th>
                            <th>Dose / Frequency</th>
                            <th>Effectiveness/Side Effects</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Symptom Assessment</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="">How often do you feel sad?</Label>
                    <Input type="select" id="" name="" >
                        {gadList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
                <Col md="2" >
                    <Label for="">How often do you feel anxious?</Label>
                    <Input type="select" id="" name="" >
                        {gadList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">How would you describe your sleep pattern?</Label>
                    <Input type="select" id="" name="" >
                        {sleepPatternList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">How would you describe your energy level?</Label>
                    <Input type="select" id="" name="" >
                        {energyLevelList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="">Do you find it difficult to concentrate?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">Are there ever thoughts / voices that you cannot get out of your head?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">Have you ever felt like someone was reading your mind or making you think things?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="">Do you hear voices?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">If you hear voices, specify (what do voices say, length of hearing voices, effect voices have on individual):</Label>
                </Col>
                <Col>
                    <Input type="textarea" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <Label for="">Do you ever feel like someone is following you or out to get you?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">If you feel like someone is out to get you, specify (who was out to get you and reason):</Label>
                </Col>
                <Col>
                    <Input type="textarea" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="12" >
                    <Label for="">Explore any yes items here:</Label>
                    <Input type="textarea" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <Label for="">Do you have a family history of mental health illness?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>RISK SCREENING</Label></b>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Trauma Assessment</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="5" >
                    <Label for="">Does patient report any history of abuse (Select all that apply)</Label>
                </Col>
                <Col md="3">
                    <Input type="select" multiple id="" name="" >
                        {traumaList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <Input type="checkbox" id="" name="" />
                    <Label for="">Incident reported</Label>
                </Col>
                <Col md="2" >
                    <Input type="checkbox" id="" name=""/>
                    <Label for="">Date reported:</Label>
                    <Input type="date" id="" name="" />
                </Col>
                <Col md="2" >
                    <Input type="checkbox" id="" name="" />
                    <Label for="">Report filed by:</Label>
                    <Input type="text" id="" name="" />
                </Col>
                <Col md="2" >
                    <Label for="">Status:</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Active</option>
                        <option>Case closed</option>
                        <option>Unknown</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Safety Risk Assessment (Current)</Label></b>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label>Does client currently report any “DANGER TO SELF” and/or “DANGER TO OTHERS” (check all that apply):</Label>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <Input type="checkbox" id="" name="" />
                    <Label for="">Thoughts of harming him or herself</Label>
                </Col>
                <Col md="3" >
                    <Input type="checkbox" id="" name=""/>
                    <Label for="">Thoughts of harming others</Label>
                </Col>
                <Col md="3" >
                    <Input type="checkbox" id="" name="" />
                    <Label for="">Denies thoughts</Label>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <Label>Does the client have a plan to harm him or herself or someone else?</Label>
                </Col>
                <Col md="1" >
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="2" >
                    <Label>If individual has a plan please describe:</Label>
                </Col>
                <Col md="2" >
                    <Input type="textarea" id="" name="" />
                </Col>
                <Col md="2" >
                    <Label>If yes to plan, does the client have access to the means of planned harm?</Label>
                </Col>
                <Col md="1" >
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <div>
                    Special Instructions regarding “SUICIDE ASSESSMENT”:<br/>
                    Question 1:<br/>
                    •If the individual express thoughts about harming self/others please answer Part A.
                    Question 1, Section A:<br/>
                    •If individual does not have a plan, skip to next section and notify supervisor/administration after interview.<br/>
                    •If individual answers “YES” please complete Section Band notify supervisor/administration immediately to assess if PET Team or 911 needs to be contacted.<br/>
                    Question 1, Section B:<br/>
                    •If individual answers “YES”, please determine if PETTeam or 911 needs to be contacted.<br/>
                    Resources for a psychiatrist assessment team:<br/>
                    ACCESS (PET Team)<br/>
                    1-800-854-7771<br/>
                    Private PET Teams (Individual needs to be Medi-Medi)<br/>
                    Pacific Hospital of Long Beach-------800-633-7888<br/>
                    St. Francis Hospital---------------------310-900-8256<br/>
                    Pacifica of the Valley-------------------800-522-1154<br/>
                    L.A. Metropolitan----------------------800-787-4357<br/>
                    Mission Community -------------------800-608-4624<br/>
                </div>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Safety Risk Assessment (History))</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <Label>Past thoughts of harm to self or others</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                    <Label>If yes, when was the last occurrence?</Label>
                    <Input type="text" id="" name="" />
                </Col>
                <Col md="4" >
                    <Label>Past Suicide Attempts</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                    <Label>If yes, when was the last occurrence?</Label>
                    <Input type="text" id="" name="" />
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <Label for="">Describe:</Label>
                    <Input type="textarea" id="" name="" />
                </Col>
                <Col md="4" >
                    <Label for="">Describe:</Label>
                    <Input type="textarea" id="" name="" />
                </Col>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Do you use?(Now/past)</th>
                                <th>How often?(current use)</th>
                                <th>Method/Amount Per Use?</th>
                                <th>Year started?</th>
                                <th>Year Quit?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {substanceList.map((sub) => (
                                <tr>
                                    <td><Label>{sub}</Label></td>
                                    <td>
                                        <Input type="select"id="" name="" >
                                            {substanceAbuseUse.map((subU) => (
                                                <option value={subU}>{subU}</option>
                                            ))}
                                        </Input>
                                    </td>
                                    <td>
                                        <Input type="select"id="" name="" >
                                            {substanceAbuseOften.map((subOf) => (
                                                <option value={subOf}>{subOf}</option>
                                            ))}
                                        </Input>
                                    </td>
                                    <td><Input type="text" id="" name=""/></td>
                                    <td><Input type="text" id="" name=""/></td>
                                    <td><Input type="text" id="" name=""/></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Treatment History</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Ever received help for substance use (If Yes, specify below if not skip to nextquestion)</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
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
                            <th>Program/Date Received Services (if known)</th>
                            <th>Type of Treatment</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Input type="text" id="" name=""/></td>
                                <td>
                                    <Input type="select"id="" name="" >
                                        {treatList.map((t) => (
                                            <option value={t}>{t}</option>
                                        ))}
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td><Input type="text" id="" name=""/></td>
                                <td>
                                    <Input type="select"id="" name="" >
                                        {treatList.map((t) => (
                                            <option value={t}>{t}</option>
                                        ))}
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td><Input type="text" id="" name=""/></td>
                                <td>
                                    <Input type="select"id="" name="" >
                                        {treatList.map((t) => (
                                            <option value={t}>{t}</option>
                                        ))}
                                    </Input>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <hr/>
            <Row>
                <Col className="text-center">
                    <b><Label>LEGAL</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="" className="text-center">
                    <FormGroup>
                        <Label for="">Do you currently have any pending legal issues (Select all that apply)</Label>
                        <Select id="clientLegalIssues" name="clientLegalIssues"
                            closeMenuOnSelect={false}
                            isMulti
                            options={legalList}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="">Probation</Label>
                        <Input type="text" id="clientLegalProbation" name="clientLegalProbation" />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="">Parole</Label>
                        <Input type="text" id="clientLegalParole" name="clientLegalParole" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="">Arrests</Label>
                        <Input type="text" id="clientLegalArrests" name="clientLegalArrests" />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="">Other</Label>
                        <Input type="text" id="clientLegalOther" name="clientLegalOther" />
                    </FormGroup>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="text-center">
                    <b><Label>Arrest Screening</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Have you ever been arrested for production or manufacturing of methamphetamines?</Label>
                    <Input type="select" id="arrestMeth" name="arrestMeth" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>Have you ever been arrested for any other drug and/or alcohol related crime?</Label>
                    <Input type="select" id="arrestDrugAlcohol" name="arrestDrugAlcohol" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>Have you ever been arrested for a violent crime?</Label>
                    <Input type="select" id="arrestViolent" name="arrestViolent" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Have you ever been arrested for arson?</Label>
                    <Input type="select" id="arrestArson" name="arrestArson" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>Have you ever been arrested for a sex crime?</Label>
                    <Input type="select" id="arrestSexCrime" name="arrestSexCrime" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>Are you a registered sex offender?</Label>
                    <Input type="select" id="regSexOffender" name="regSexOffender" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Have you ever been arrested for any crime whatsoever?</Label>
                    <Input type="select" id="arrestCrime" name="arrestCrime" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Arrest History</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Date/Year</th>
                            <th>Criminal Charge</th>
                            <th>Misdemeanor (M)or Felony(F):</th>
                            <th>Where did offense take place (city/state)</th>
                            <th>Time Served</th>
                            <th>Resulted In?</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td>
                                    <Input type="select"id="" name="" >
                                        {resultInList.map((r) => (
                                            <option value={r}>{r}</option>
                                        ))}
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td>
                                    <Input type="select"id="" name="" >
                                        {resultInList.map((r) => (
                                            <option value={r}>{r}</option>
                                        ))}
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td>
                                    <Input type="select"id="" name="" >
                                        {resultInList.map((r) => (
                                            <option value={r}>{r}</option>
                                        ))}
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td>
                                    <Input type="select"id="" name="" >
                                        {resultInList.map((r) => (
                                            <option value={r}>{r}</option>
                                        ))}
                                    </Input>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <hr/>
            <Row>
                <Col className="text-center">
                    <b><Label>NEEDS ASSESSMENT</Label></b>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Label></Label>
                </Col>
            </Row>
            <Row>
                <Col md="" className="text-center">
                    <FormGroup>
                        <Label for="">Patient/Family Needs: Review Section One: Bio-Social Assessment to complete.</Label>
                        <Select id="clientPatFamNeeds" name="clientPatFamNeeds"
                            closeMenuOnSelect={false}
                            isMulti
                            options={needsCol1}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="" className="text-center">
                    *For each checked needs assessment; there needs to be an objective and plan to complete objective*
                </Col>
            </Row>

            <hr/>
            <Row>
                <Col className="text-center">
                    <b><Label>CASE MANAGERS OBSERVATIONS</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Grooming & Hygiene:</Label>
                        <Select id="cmOb1" name="cmOb1"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb1}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Eye Contact:</Label>
                        <Select id="cmOb2" name="cmOb2"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb2}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Motor Activity:</Label>
                        <Select id="cmOb3" name="cmOb3"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb3}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Speech:</Label>
                        <Select id="cmOb4" name="cmOb4"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb4}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Interaction Style:</Label>
                        <Select id="cmOb5" name="cmOb5"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb5}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Mood:</Label>
                        <Select id="cmOb6" name="cmOb6"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb6}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Affect:</Label>
                        <Select id="cmOb7" name="cmOb7"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb7}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Associations:</Label>
                        <Select id="cmOb8" name="cmOb8"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb8}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Concentration:</Label>
                        <Select id="cmOb9" name="cmOb9"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb9}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Behavioral Disturbances:</Label>
                        <Select id="cmOb10" name="cmOb10"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb10}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Passive:</Label>
                        <Select id="cmOb11" name="cmOb11"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb11}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">None Apparent</Label>
                        <Select id="cmObNone" name="cmObNone"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmObNone}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <br/><Label>Diagnostic Summary: (Be sure to include assessment for risk of suicidal/homicidal behaviors, significant strengths/weaknesses, observations/descriptions, symptoms/impairments in life functioning, i.e., Work, School, Home, Community, Living Arrangements, etc.)</Label>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Input input type="textarea" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    Mental Health Assessment Completed By:<br/>
                    <Input input type="text" id="" name=""/>
                </Col>
            </Row>
        </div>
    );
};

export default MentalHealth;
