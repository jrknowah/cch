import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, InputGroup, InputGroupText, Form
} from 'reactstrap';
import Select from 'react-select';
import {assistList, finList, gfp, ynd, housingList, functionalCommunication,ambulatoryStatus} from "../../../../data/arrayList";
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
                            <Input type="text" id={list.finListTile.replace(/\s/g, "")} />
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
                        <Input type="select" id="payeeChoice" name="payeeChoice" >
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
                        <Input type="text" id="payeeName" name="payeeName" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for=" Phone">Payee Phone</Label>
                        <Input type="tel" id="payeePhone" name="payeePhone" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Label className="text-center">Employment History</Label>
            </Row>
            <Row>
                <Col md="6">
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
                <Col md="6">
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
            </Row>
            <Row>
                <Col md="6">
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
                <Col md="6">
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
                <Col md="6">
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
                <Col md="6" sm="12">
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
                <Col md="6" >
                    <Label for="clientGovHousingApp">Ever applied for government housing?
                        <FormGroup>
                            <Select
                                closeMenuOnSelect={false}
                                isMulti
                                options={housingList}
                            />
                        </FormGroup>
                    </Label>
                </Col>
                <Col md="6" >
                    <Label for="clientGovHousingLive">Ever lived in government housing?
                        <FormGroup>
                            <Select
                                closeMenuOnSelect={false}
                                isMulti
                                options={housingList}
                            />
                        </FormGroup>
                    </Label>
                </Col>
            </Row>
            <Row>
                <Col md="6" >
                    <Label for="clientPastRenter">Have you ever rented before?</Label>
                    <Input type="select" id="clientPastRenter" name="clientPastRenter" >
                        {ynd.map((list) => {
                            return (
                                <option>{list}</option>
                            );
                        })}
                    </Input>
                </Col>
                <Col md="6" >
                    <Label for="clientPastRenterLate">Ever been served a late notice?</Label>
                    <Input type="select" id="clientPastRenterLate" name="clientPastRenterLate" >
                        {ynd.map((list) => {
                            return (
                                <option>{list}</option>
                            );
                        })}
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="6" >
                    <Label for="clientEvicted">Ever been evicted?</Label>
                    <Input type="select" id="clientEvicted" name="clientEvicted" >
                        {ynd.map((list) => {
                            return (
                                <option>{list}</option>
                            );
                        })}
                    </Input>
                </Col>
                <Col md="6" >
                    <Label for="clientLandlordProb">Ever had problems with previous landlords?</Label>
                    <Input type="select" id="clientLandlordProb" name="clientLandlordProb" >
                        {ynd.map((list) => {
                            return (
                                <option>{list}</option>
                            );
                        })}
                    </Input>
                </Col>
            </Row>
            <Row>       
                <Col md="6" >
                    <Label for="clientUtilityBill">Do you have any outstanding utility bills?</Label>
                    <Input type="select" id="clientUtilityBill" name="clientUtilityBill" >
                        {ynd.map((list) => {
                            return (
                                <option>{list}</option>
                            );
                        })}
                    </Input>
                </Col>
                <Col md="6" >
                    <Label for="clientCreditRating">Rate your credit?</Label>
                    <Input type="select" id="clientCreditRating" name="clientCreditRating" >
                        {gfp.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="12" >
                    <FormGroup>
                        <Label for="clientHousingSummary" align>Housing Summary Notes</Label>
                        <Input type="textbox" name="clientHousingSummary" id="clientHousingSummary" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>FUNCTIONAL SCREENING</Label></b>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <Label>Ambulatory Status</Label>
                </Col>
            </Row>
            <Row >
                <Col md="4" >
                    <Label for="clientAmbulatory">Walking(Check All That Apply)</Label>
                </Col>
                <Col md="6" >
                    <FormGroup>
                        <Select
                            closeMenuOnSelect={false}
                            isMulti
                            options={ambulatoryStatus}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="12" >
                    <FormGroup>
                        <Label for="clientAmbulatorySummary" align>Ambulatory Status Notes</Label>
                        <Input type="textarea" name="clientAmbulatorySummary" id="clientAmbulatorySummary" />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
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
            <Row className="text-center">
                <Col md="12">
                    If any assistance (Partial and/or Complete) please specify:
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="12">
                    <Input type="textarea" name="clientFunctionalAssist" id="clientFunctionalAssist" />
                </Col>
            </Row>
            <Row>
                <br/>
            </Row>
            <Row className="text-center">
                <Col>
                    <Label>Communication & Language</Label>
                </Col>
            </Row>
            <Row >
                <Col md="4" >
                    <Label for="clientGovHousingApp">How does patient communicate / express themselves?
                    </Label>
                </Col>
                <Col md="6" >
                    <FormGroup>
                        <Select
                            closeMenuOnSelect={false}
                            isMulti
                            options={functionalCommunication}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center"> 
                <Col md="12" >
                    <FormGroup>
                        <FormGroup>
                            <Label check>Bio-Social Summary Notes</Label>
                            <Input type="textarea" name="customcheck1" />
                        </FormGroup>
                    </FormGroup>
                </Col>
            </Row>
        </div>
);
};

export default BioSocial;
