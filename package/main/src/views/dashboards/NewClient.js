import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Form
} from 'reactstrap';
// import Select from 'react-select';
import {
    clientEthnicityList,
    clientGenders, clientPronouns, clientRace, highestEdu,
    maritalStatusList, religiousPrefList
} from "../../data/arrayList";


const NewClient = () => {

    return (

        <div className="form-body">
                <Form>
                    <div className="form-body">
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientID">ID Number</Label>
                                    <Input type="text" id="clientID" name="clientID" />
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientAdmitDate">Client Admit Date</Label>
                                    <Input type="date" id="clientAdmitDate" name="clientAdmitDates" />
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientDOB">DOB</Label>
                                    <Input type="date" name="clientDOB" id="clientDOB" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientFirstName">First Name</Label>
                                    <Input type="text" id="clientFirstName" name="clientFirstName" />
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientMiddleName">Middle Name</Label>
                                    <Input type="text" id="clientMiddleName" name="clientMiddleName" />
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
                                    <Label for="clientAliases">Aliases</Label>
                                    <Input type="text" id="clientAliases" name="clientAliases" />
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientCitizenship">Citizenship Status</Label>
                                    <Input type="select" name="clientCitizenship" id="clientCitizenship" >
                                        {clientEthnicityList.map((ethnicity) => (
                                            <option value={ethnicity}>{ethnicity}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientVetStatus">Veteran Status</Label>
                                    <Input type="text" name="clientVetStatus" id="clientVetStatus" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientSSN">SSN</Label>
                                    <Input type="text" name="clientSSN" id="clientSSN" />
                                </FormGroup>
                            </Col>
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
                                    <Label for="clientPronouns">Pronouns</Label>
                                    <Input type="select" name="clientPronouns" id="clientPronouns" >
                                        {clientPronouns.map((proN) => (
                                            <option value={proN}>{proN}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>                       
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
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientRace">Race</Label>
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
                        </Row>
                        <Row>
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
                        </Row>
                    </div>
                </Form>
        </div>
    );
};

export default NewClient;
