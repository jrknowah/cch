import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Table
} from 'reactstrap';
import {
    medCond,
    medCond1a,
    medCond1b,
    medCond2,
    medCond2a,
    medCond2b,
    medCond2c, medCond4, medCond6, medRisk1, medRisk2
} from "../../../../data/arrayList";


const MedScreening = () => {

    return (

        <div className="form-body">
            <Row>

                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">Do you have a primary care physician?</Label>
                        <Input type="select" id="clientPayee" name="clientPayee" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="clientPayeeName">Physician Name</Label>
                        <Input type="text" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="clientPayeePhone">Facility</Label>
                        <Input type="tel" id="clientPayeePhone" name="clientPayeePhone" />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup>
                        <Label for="clientEmployed">Phone Number:</Label>
                        <Input type="tel" id="clientEmployed" name="clientEmployed" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>

                <Col md="4">
                    <FormGroup>
                        <Label for="clientEmployed">Last Appointment</Label>
                        <Input input type="datetime-local" id="clientPayee" name="clientPayee" placeholder="Date & Time"/>
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="clientEmployer">Next Appointment</Label>
                        <Input input type="datetime-local" id="clientPayee" name="clientPayee" placeholder="Date & Time"/>
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="clientEmpIntr">Are you interested in obtaining employment?</Label>
                        <Input type="select" id="clientEmpIntr" name="clientEmpIntr" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="5">
                    <FormGroup>
                        <Label for="clientDebt">Do you have transportation to you next appointment?</Label>
                        <Input type="select" id="clientDebt" name="clientDebt" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="clientBankrupt">Specify means of transporation:</Label>
                        <Input type="text" id="clientBankrupt" name="clientBankrupt" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="5">
                    <FormGroup>
                        <Label for="clientDebt">Do you like your current physician?</Label>
                        <Input type="select" id="clientDebt" name="clientDebt" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="clientBankrupt">If no would you like to change your Primary Care Physician?</Label>
                        <Input type="select" id="clientDebt" name="clientDebt" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="clientBankrupt">Do you see any specialists for medical care?</Label>
                        <Input type="select" id="clientDebt" name="clientDebt" >
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
                            <th>PCP/Specialty Type</th>
                            <th>Doctor&apos;s Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="PCP/Specialty Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Address"/></td>
                            <td><Input input type="tel" id="clientPayee" name="clientPayee" placeholder="Phone Number"/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="PCP/Specialty Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Address"/></td>
                            <td><Input input type="tel" id="clientPayee" name="clientPayee" placeholder="Phone Number"/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="PCP/Specialty Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Address"/></td>
                            <td><Input input type="tel" id="clientPayee" name="clientPayee" placeholder="Phone Number"/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="PCP/Specialty Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Address"/></td>
                            <td><Input input type="tel" id="clientPayee" name="clientPayee" placeholder="Phone Number"/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="PCP/Specialty Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Address"/></td>
                            <td><Input input type="tel" id="clientPayee" name="clientPayee" placeholder="Phone Number"/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="clientBankrupt">Are You allergic to any food?</Label>
                        <Input type="select" id="clientDebt" name="clientDebt" >
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="clientBankrupt">Are you allergic to any medication?</Label>
                        <Input type="select" id="clientDebt" name="clientDebt" >
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
                            <th>Allergy/Intolerance Hx</th>
                            <th>Type of Reaction</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Allergy/Intolerance Hx"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Type of Reaction"/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Allergy/Intolerance Hx"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Type of Reaction"/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Allergy/Intolerance Hx"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Type of Reaction"/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Allergy/Intolerance Hx"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Type of Reaction"/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Allergy/Intolerance Hx"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Type of Reaction"/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="text-center">
                <Label for="clientContactInfo">Medical Conditions</Label>
            </Row>
            <Row>
                <Label for="clientContactInfo">Does the individual have any of the following medical conditions?</Label>
            </Row>
            <Row>
                <Col md="3">
                    {medCond.map((item) => (
                        <div>
                            <span>{item}</span>
                            <Input type="select" >
                                <option> </option>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </div>
                    ))}
                </Col>
                <Col md="3">
                    {medCond1a.map((item) => (
                        <div>
                            <span>{item}</span>
                            <Input type="select" >
                                <option> </option>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </div>
                    ))}
                </Col>
                <Col md="3">
                    {medCond1b.map((item) => (
                        <div>
                            <span>{item}</span>
                            <Input type="select" >
                                <option> </option>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </div>
                    ))}
                </Col>
            </Row>
            <Row>
                <Label for="clientContactInfo">Does the individual utilize any of the following medical devices and/or need extra assistance by staff?</Label>
            </Row>
            <Row>
                <Col md="3">
                    {medCond2.map((item) => (
                        <div>
                            <span>{item}</span>
                            <Input type="select" >
                                <option> </option>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </div>
                    ))}
                </Col>
                <Col md="3">
                    {medCond2a.map((item) => (
                        <div>
                            <span>{item}</span>
                            <Input type="select" >
                                <option> </option>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </div>
                    ))}
                </Col>
                <Col md="3">
                    {medCond2b.map((item) => (
                        <div>
                            <span>{item}</span>
                            <Input type="select" >
                                <option> </option>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </div>
                    ))}
                </Col>
                <Col md="3">
                    {medCond2c.map((item) => (
                        <div>
                            <span>{item}</span>
                            <Input type="select" >
                                <option> </option>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </div>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col md="5">
                    <Label for="clientContactInfo">Are you at risk for alcohol withdrawal or seizures (If Yes, answer next question)?</Label>
                    <Input type="select" id="clientDebt" name="clientDebt" >
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="5">
                    <Label for="clientContactInfo">Were you getting medications in the hospital with alcohol withdrawal?</Label>
                    <Input type="select" id="clientDebt" name="clientDebt" >
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="5">
                    <Label for="">Have you ever been diagnosis with Hepatitis?</Label>
                    <Input type="select" id="" name="" >
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3">
                    <Label for="">If YES, all that apply:</Label><br/>
                    <Input type="checkbox" id="" name="" />
                    <Label for="">Hepatitis B</Label><br/>
                    <Input type="checkbox" id="" name="" />
                    <Label for="">Hepatitis C</Label><br/>
                </Col>
            </Row>
            <Row>
                <Label for="">Other (any other medical condition not mentioned above and/or family history of medical conditions):</Label>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Other Medical Conditions(Not Mention)</th>
                            <th>Type</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Input input type="text" id="" name="" placeholder=""/></td>
                                <td>
                                    <Input type="select" id="" name="" >
                                        <option> </option>
                                        <option>Self</option>
                                        <option>Family Hx</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td><Input input type="text" id="" name="" placeholder=""/></td>
                                <td>
                                    <Input type="select" id="" name="" >
                                        <option> </option>
                                        <option>Self</option>
                                        <option>Family Hx</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td><Input input type="text" id="" name="" placeholder=""/></td>
                                <td>
                                    <Input type="select" id="" name="" >
                                        <option> </option>
                                        <option>Self</option>
                                        <option>Family Hx</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td><Input input type="text" id="" name="" placeholder=""/></td>
                                <td>
                                    <Input type="select" id="" name="" >
                                        <option> </option>
                                        <option>Self</option>
                                        <option>Family Hx</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td><Input input type="text" id="" name="" placeholder=""/></td>
                                <td>
                                    <Input type="select" id="" name="" >
                                        <option> </option>
                                        <option>Self</option>
                                        <option>Family Hx</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td><Input input type="text" id="" name="" placeholder=""/></td>
                                <td>
                                    <Input type="select" id="" name="" >
                                        <option> </option>
                                        <option>Self</option>
                                        <option>Family Hx</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td><Input input type="text" id="" name="" placeholder=""/></td>
                                <td>
                                    <Input type="select" id="" name="" >
                                        <option> </option>
                                        <option>Self</option>
                                        <option>Family Hx</option>
                                    </Input>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="5">
                    <Label for="">When was your last TB skin test (PPD) or chest x-ray:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
                <Col md="2">
                    <Label for="">Results:</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Positive</option>
                        <option>Negative</option>
                        <option>Unknown</option>
                    </Input>
                </Col>
                <Col md="3">
                    <Label for="">If positive did you receive treatment:</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="2">
                    <Label for="">Outcome of Treatment:</Label><br/>
                    <Input type="textarea" id="" name="" />
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label for="">A. Do you have a cough lasting longer than 3 wks?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label for="">B. Are you coughing up blood?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Label for="">If yes to either above, please complete the following questions:</Label><br/>
                </Col>
                <Col md="3">
                    <Label for="">Have you had new severe night sweats in the last month?</Label><br/>
                    <Input type="text" id="" name="" />
                </Col>
                <Col md="3">
                    <Label for="">Have you had weight loss without reason in the last couple months?</Label><br/>
                    <Input type="text" id="" name="" />
                </Col>
                <Col md="3">
                    <Label for="">Have you had high fevers without reason in the last few weeks?</Label><br/>
                    <Input type="text" id="" name="" />
                </Col>
            </Row>
            <Row>
                <Label for=""><b>(If yes to A AND one of the questions in B then, member needs a CXR)</b></Label>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>MEDICATION</Label></b>
                </Col>
            </Row>
            <Row>
                <Col className="text-center" >
                    <b><Label>Prescription Medications</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Are you currently taking prescribed medications (If Yes, provide further information below)</Label><br/>
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
                <Col md="4">
                    <Label>Have you currently been prescribed a medication that you are not currently taking (If Yes, provide further information below)</Label><br/>
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
                <Col md="4">
                    <Label>SURGICAL / HOSPITALIZATION HISTORY</Label><br/>
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
                            <th>Past Surgeries</th>
                            <th>Past Hospitalizations</th>
                        </tr>
                        <tr>
                            <th>Type of Surgery</th>
                            <th>Date</th>
                            <th>Previous Hospitalizations</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Input input type="text" id="" name=""/></td>
                                <td><Input input type="date" id="" name=""/></td>
                                <td><Input input type="text" id="" name=""/></td>
                                <td><Input input type="date" id="" name=""/></td>
                            </tr>
                            <tr>
                                <td><Input input type="text" id="" name=""/></td>
                                <td><Input input type="date" id="" name=""/></td>
                                <td><Input input type="text" id="" name=""/></td>
                                <td><Input input type="date" id="" name=""/></td>
                            </tr>
                            <tr>
                                <td><Input input type="text" id="" name=""/></td>
                                <td><Input input type="date" id="" name=""/></td>
                                <td><Input input type="text" id="" name=""/></td>
                                <td><Input input type="date" id="" name=""/></td>
                            </tr>
                            <tr>
                                <td><Input input type="text" id="" name=""/></td>
                                <td><Input input type="date" id="" name=""/></td>
                                <td><Input input type="text" id="" name=""/></td>
                                <td><Input input type="date" id="" name=""/></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>SURGICAL / HOSPITALIZATION HISTORY</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Label>Are you currently on birth control?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="2">
                    <Label>Name of Birth Control:</Label><br/>
                    <Input type="text" id="" name="" />
                </Col>
                <Col md="2">
                    <Label>Date of last dose:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
                <Col md="3">
                    <Label>Location Receiving Birth Control</Label><br/>
                    <Input type="Text" id="" name="" />
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Label>Total # of Pregnancies?</Label><br/>
                    <Input type="text" id="" name=""/>
                </Col>
                <Col md="3">
                    <Label>Date of last pregnancy:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
                <Col md="3">
                    <Label>Date of Last Pap smear:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
                <Col md="3">
                    <Label>Date of last Mammogram:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
            </Row>
            <Row className="text-center">
                <b><Label for="clientContactInfo">SEXUAL HISTORY</Label></b>
            </Row>
            <Row>
                <Col md="4">
                    <Label>How many sexual partners have you had in the past year?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>None</option>
                        <option>One</option>
                        <option>2-5</option>
                        <option>6-10</option>
                        <option>11 or more</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>How many sexual partners have you had in the past month?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>None</option>
                        <option>One</option>
                        <option>2-5</option>
                        <option>6-10</option>
                        <option>11 or more</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>When was the last time you had sex?</Label><br/>
                    <Input type="date" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Label>Have you had sexual relations with:</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Men</option>
                        <option>Women</option>
                        <option>Both</option>
                        <option>N/A-None</option>
                    </Input>
                </Col>
                <Col md="2">
                    <Label>Risk factors (Do you have any of the following):</Label><br/>
                </Col>
                <Col md="3">
                    <Input type="checkbox" id="" name="" /><Label>Sex without a condom</Label><br/>
                    <Input type="checkbox" id="" name="" /><Label>Sex with a prostitute</Label><br/>
                    <Input type="checkbox" id="" name="" /><Label>Sex for drugs/money</Label><br/>
                    <Input type="checkbox" id="" name="" /><Label>Non-monogamous</Label><br/>
                    <Input type="checkbox" id="" name="" /><Label>Men having sex with men</Label><br/>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Label>Date last tested for a sexually transmitted infection?</Label><br/>
                    <Input type="date" id="" name=""/>
                </Col>
                <Col md="3">
                    <Label>Date last tested for a HIV?</Label><br/>
                    <Input type="date" id="" name=""/>
                </Col>
                <Col md="3">
                    <Label for="">Have you ever had a sexually transmitted disease (If yes, check all that apply below)::</Label><br/>
                    {medCond4.map((item) => (
                        <div>
                            <input value={item} type="checkbox" />
                            <span>{item}</span>
                        </div>
                    ))}
                </Col>
                <Col md="3">
                    <Label for="">Have you ever had a sexually transmitted disease (If yes, check all that apply below)::</Label><br/>
                    {medCond6.map((item) => (
                        <div>
                            <input value={item} type="checkbox" />
                            <span>{item}</span>
                        </div>
                    ))}
                </Col>
            </Row>
            <Row className="text-center">
                <Label for="clientContactInfo">Do you have any of the following Risk Factors and Preventing Sexually Transmitted Diseases?</Label>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Risk Factors</th>
                        </tr>
                        </thead>
                        <tbody>
                                {medRisk1.map((t) => (
                                    <tr>
                                        <td>
                                            <span>{t}</span>
                                        </td>
                                        <td>
                                            <Input type="select" id="" name="" >
                                                <option> </option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </Input>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Col>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Preventing Sexually Transmitted Diseases</th>
                        </tr>
                        </thead>
                        <tbody>
                        {medRisk2.map((risk) => (
                            <tr>
                                <td>
                                    <span>{risk}</span>
                                </td>
                                <td>
                                    <Input type="select" id="" name="" >
                                        <option> </option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>

                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
};

export default MedScreening;
