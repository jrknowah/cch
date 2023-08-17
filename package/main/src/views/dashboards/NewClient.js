import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Form
} from 'reactstrap';
import Select from 'react-select';
import {
    clientEthnicityList,
    clientGenders, clientRace, edList, gfp, highestEdu, identityList,
    maritalStatusList, religiousPrefList, ynd
} from "../../data/arrayList";


const NewClient = () => {

    return (

        <div className="form-body">
                <Form>
                    <div className="form-body">
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientID">Client ID</Label>
                                    <Input type="text" id="clientID" name="clientID" />
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientFirstName">First Name</Label>
                                    <Input type="text" id="clientFirstName" name="clientFirstName" />
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientLastName">Last Name</Label>
                                    <Input type="text" id="clientLastName" name="clientLastName" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientDOB">DOB</Label>
                                    <Input type="text" name="clientDOB" id="clientDOB" />
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientAge">Age</Label>
                                    <Input type="text" name="clientAge" id="clientAge" />
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientSSN">SSN</Label>
                                    <Input type="text" name="clientSSN" id="clientSSN" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientGender">Gender</Label>
                                    <Input type="select" name="clientGender" id="clientGender" >
                                        {clientGenders.map((gender) => (
                                            <option value={gender}>{gender}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientAlias">Aliases</Label>
                                    <Input type="text" id="clientAlias" name="clientAlias" />
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientEthnicity">Ethnicity</Label>
                                    <Input type="select" name="clientEthnicity" id="clientEthnicity" >
                                        {clientEthnicityList.map((ethnicity) => (
                                            <option value={ethnicity}>{ethnicity}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientEthnicity">Race</Label>
                                    <Input type="select" name="clientRace" id="clientRace" >
                                        {clientRace.map((race) => (
                                            <option value={race}>{race}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientLang">Primary Language</Label>
                                    <Input type="text" id="clientLang" name="clientLang" />
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientMarital">Marital Status</Label>
                                    <Input type="select" name="clientMarital" id="clientMarital" >
                                        {maritalStatusList.map((ms) => (
                                            <option value={ms}>{ms}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientRelPref">Religious Preference</Label>
                                    <Input type="select" name="clientRelPref" id="clientRelPref" >
                                        {religiousPrefList.map((relig) => (
                                            <option value={relig}>{relig}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="6" sm="12">
                                <FormGroup>
                                    <Label for="clientGovIssued">Government Issued Identification</Label>
                                    <Select

                                        closeMenuOnSelect={false}
                                        isMulti
                                        options={identityList}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientHighEnd">Highest Level of Education</Label>
                                    <Input type="select" id="clientHighEnd" name="clientHighEnd" >
                                        {highestEdu.map((hEdu) => (
                                            <option value={hEdu}>{hEdu}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientEdList">Current/Past Type of Education</Label>
                                    <Input type="select" name="clientEdList" id="clientEdList" >
                                        {edList.map((ed) => (
                                            <option value={ed}>{ed}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col> 
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientEduPerf">Academic performance</Label>
                                    <Input type="select" name="clientEduPerf" id="clientEduPerf" >
                                        {gfp.map((g) => (
                                            <option value={g}>{g}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientEduReturn">Returning to school?</Label>
                                    <Input type="select" name="clientEduReturn" id="clientEduReturn" >
                                        {ynd.map((y) => (
                                            <option value={y}>{y}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientCurrEnrolled">Currently Enrolled?</Label>
                                    <Input type="select" id="clientCurrEnrolled" name="clientCurrEnrolled" >
                                        {ynd.map((y) => (
                                            <option value={y}>{y}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientEnrollWhere">Enrolled Where?</Label>
                                    <Input type="text" name="clientEnrollWhere" id="clientEnrollWhere" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                </Form>
        </div>
    );
};

export default NewClient;
