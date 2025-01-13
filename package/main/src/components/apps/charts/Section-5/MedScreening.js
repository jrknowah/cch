import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Table
} from 'reactstrap';
import Select from 'react-select';
import {
    allergyList,
    medCond,
    medCond2, medCond3,
    medRisk2, medCond4, medCond5
} from "../../../../data/arrayList";
// import TableAdd from "./Table";

const MedScreening = () => {

    return (

        <div className="form-body">
            <Row>

                <Col md="4">
                    <FormGroup>
                        <Label for="clientPCP">Do you have a Primary Care Physician(PCP)?</Label>
                        <Input type="select" id="clientPCP" name="clientPCP" >
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPCPName">Physician Name</Label>
                        <Input type="text" id="clientPCPName" name="clientPCPName" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPCPFacility">Facility</Label>
                        <Input type="tel" id="clientPCPFacility" name="clientPCPFacility" />
                    </FormGroup>
                </Col>
                
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPCPPhone">Phone Number:</Label>
                        <Input type="tel" id="clientPCPPhone" name="clientPCPPhone" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPCPLastAppt">Last Appointment</Label>
                        <Input input type="datetime-local" id="clientPCPLastAppt" name="clientPCPLastAppt" placeholder="Date & Time"/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPCPNextAppt">Next Appointment</Label>
                        <Input input type="datetime-local" id="clientPCPNextAppt" name="clientPCPNextAppt" placeholder="Date & Time"/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientEmpIntr">Are you interested in obtaining employment?</Label>
                        <Input type="select" id="clientEmpIntr" name="clientEmpIntr" >
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientApptTransport">Transportation to you next appointment?</Label>
                        <Input type="select" id="clientApptTransport" name="clie<ntApptTransport" >
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientApptTransportMeans">Specify means of transporation:</Label>
                        <Input type="text" id="clientApptTransportMeans" name="clientApptTransportMeans" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientLikePCP">Do you like your current Physician?</Label>
                        <Input type="select" id="clientLikePCP" name="clientLikePCP" >
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientDisikePCP">If no, would you like to change your PCP?</Label>
                        <Input type="select" id="clientDisikePCP" name="clientDisikePCP" >
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientSpecialists">Do you see any specialists for medical care?</Label>
                        <Input type="select" id="clientSpecialists" name="clientSpecialists" >
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>                
            </Row>
            <Row>
                <Col md="12">
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
                <Col md="4">
                    <FormGroup>
                        <Label for="">List ALL allergies:</Label>
                        <Select id="clientAllergy" name="clientAllergy"
                            closeMenuOnSelect={false}
                            isMulti
                            options={allergyList}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <Label for="">Medical Conditions</Label>
                    <FormGroup>
                        <Select id="clientMedConditions" name="clientMedConditions"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond}
                        />
                    </FormGroup>                   
                </Col>
                <Col md="4">
                    <Label for="">Use any of the following medical devices and/or need extra assistance by staff?</Label>
                    <FormGroup>
                        <Select id="clientMedConditions2" name="clientMedConditions2"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond2}
                        />
                    </FormGroup>                   
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label for="">Are you at risk for alcohol withdrawal or seizures?</Label>
                    <Input type="select" id="clientAlcoholRisk" name="clientAlcoholRisk" >
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label for="">Were you getting medications in the hospital with alcohol withdrawal?</Label>
                    <Input type="select" id="clientAlcoholRiskMed" name="clientAlcoholRiskMed" >
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label for="">Have you ever been diagnosis with following?</Label>
                    <FormGroup>
                        <Select id="clientHepAB" name="clientHepAB"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond3}
                        />
                    </FormGroup>  
                </Col>                
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
                                        <option>Family History</option>
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

            <hr/>
            <Row>
                <Col className="text-center">
                    <b><Label>Tuberculosis Clearance</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label for="">Your last TB skin test (PPD) or chest x-ray:</Label><br/>
                    <Input type="date" id="clientLastTBTest" name="clientLastTBTest" />
                </Col>
                <Col md="4">
                    <Label for="">Results:</Label><br/>
                    <Input type="select" id="clientLastTBTestResults" name="clientLastTBTestResults" >
                        <option> </option>
                        <option>Positive</option>
                        <option>Negative</option>
                        <option>Unknown</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label for="">If positive, did you receive treatment:</Label><br/>
                    <Input type="select" id="clientLastTBTestResultsTreatment" name="clientLastTBTestResultsTreatment" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>

            </Row>
            <Row>
                <Col md="4">
                    <Label for="">Outcome of Treatment:</Label><br/>
                    <Input type="textarea" id="clientLastTBTestResultsTreatmentOutcome" name="clientLastTBTestResultsTreatmentOutcome" />
                </Col>                

            </Row>
            <Row>
                <Col md="4">
                    <Label for="">Do you have a cough lasting longer than 3 wks?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label for="">Are you coughing up blood?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>                
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

            <hr/>
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
                {/* <TableAdd /> */}
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

            <hr/>
            <Row>
                <Col md="" className="text-center">
                    <b><Label>SURGICAL / HOSPITALIZATION HISTORY</Label><br/></b>
                </Col>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
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
            
            <hr />
            <Row>
                <Col md="" className="text-center">
                    <b><Label>WOMAN&apos;S HEALTH HISTORY</Label><br/></b>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Are you currently on birth control?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>Name of Birth Control:</Label><br/>
                    <Input type="text" id="" name="" />
                </Col>
                <Col md="4">
                    <Label>Date of last dose:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Location Receiving Birth Control</Label><br/>
                    <Input type="Text" id="" name="" />
                </Col>
                <Col md="4">
                    <Label>Total # of Pregnancies?</Label><br/>
                    <Input type="text" id="" name=""/>
                </Col>
                <Col md="4">
                    <Label>Date of last pregnancy:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Date of Last Pap smear:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
                <Col md="4">
                    <Label>Date of last Mammogram:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
            </Row>
            
            {/* Sexual History */}
            <hr />
            <Row className="text-center">
                <b><Label for="clientContactInfo">SEXUAL HISTORY</Label></b>
            </Row>
            <Row>
                <Col md="4">
                    <Label>How many sexual partners in the past year?</Label><br/>
                    <Input type="select" id="clientSexLastYear" name="clientSexLastYear" >
                        <option> </option>
                        <option>None</option>
                        <option>One</option>
                        <option>2-5</option>
                        <option>6-10</option>
                        <option>11 or more</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>How many sexual partners in the past month?</Label><br/>
                    <Input type="select" id="clientSexLastMonth" name="clientSexLastMonth" >
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
                    <Input type="date" id="clientLastSexDate" name="clientLastSexDate"/>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Have you had sexual relations with:</Label><br/>
                    <Input type="select" id="clientSexRelations" name="clientSexRelations" >
                        <option> </option>
                        <option>Men</option>
                        <option>Women</option>
                        <option>Both</option>
                        <option>N/A-None</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>Do you have any of the following Risk factors?</Label><br/>
                    <FormGroup>
                        <Select id="clientRiskFactors" name="clientRiskFactors"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond5}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <Label>Date last tested for a STD/STI?</Label><br/>
                    <Input type="date" id="clientSTDDate" name="clientSTDDate"/>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label for="">Ever had a STD/STI?(Check all that apply):</Label><br/>
                    <FormGroup>
                        <Select id="clientSTDStatus" name="clientSTDStatus"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond4}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <Label for="">Preventing Sexually Transmitted Diseases:</Label><br/>
                    <FormGroup>
                        <Select id="clientSTDPrevent" name="clientSTDPrevent"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medRisk2}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </div>
    );
};

export default MedScreening;
