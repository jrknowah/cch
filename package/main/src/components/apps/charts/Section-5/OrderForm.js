import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input
} from 'reactstrap';
import Select from 'react-select';
import { allergyList, clientDiet,medCond } from "../../../../data/arrayList";

const OrderForm = () => {

    return (

        <div className="form-body">

            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="clientAdmitDate">Date of Admission</Label>
                        <Input type="date" name="clientAdmitDate" id="clientAdmitDate" />
                    </FormGroup>
                </Col>
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
            </Row>
            <Row>
                <Col md="6">
                    <Label for="">Medical Conditions</Label>
                    <FormGroup>
                        <Select id="clientMedConditions" name="clientMedConditions"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond}
                        />
                    </FormGroup>                   
                </Col> 
                <Col md="6">
                    <FormGroup>
                        <Label >Diet<br/></Label>
                        <Select id="clientDietType" name="clientDietType"
                            closeMenuOnSelect={false}
                            isMulti
                            options={clientDiet}
                        />
                    </FormGroup>    
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="text-center">
                    <b><Label>Nursing Orders</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Administer medications as ordered on prescription bottles
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Activity
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />No restrictions
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />No weight bearing
                        <Input sm="1"  type="text" id="" name="" />x
                        <Input type="text" id="" name="" />
                        <Label>days/wks/months</Label>
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />No lifting
                        <Input sm="1"  type="text" id="" name="" />lbs. x
                        <Input type="text" id="" name="" />
                        <Label>days/wks/months</Label>
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup >
                        <Input type="checkbox" id="" name="" />Elevate<br/>
                        <Input type="checkbox" id="" name="" />Right Arm<br/>
                        <Input type="checkbox" id="" name="" />Left Arm<br/>
                        <Input type="checkbox" id="" name="" />Right Leg<br/>
                        <Input type="checkbox" id="" name="" />Left Leg<br/>
                        <Input type="text" id="" name="" /><Label>hrs per day</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Take vitals (frequency)
                        <Input type="text" id="" name="" />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Weight<br/>
                        <Input type="checkbox" id="" name="" />Admission Weight:
                        <Input type="text" id="" name="" />
                        <Input type="checkbox" id="" name="" />Daily Weight<br/>
                        <Input type="checkbox" id="" name="" />Weekly Weight:
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Oxygen<br/>
                        <Input type="checkbox" id="" name="" />
                        <Input type="text" id="" name="" />L via Nasal Cannula or Face Mask <br/>
                        <b>If patient O2 Sats less than 93%, please notify On-Call provider.</b><br/>
                        <Input type="checkbox" id="" name="" />Intravenous access<br/>
                        Location<Input type="text" id="" name="" /><br/>
                        <Input type="checkbox" id="" name="" />Monitor for signs and symptoms of infiltration/phlebitis: redness, swelling,
                        drainage and/or pain at site<br/>
                        <Input type="checkbox" id="" name="" />Flush with 3cc of NS Q shift to maintain patency
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Hygiene<br/>
                        <Input type="checkbox" id="" name="" />No Restrictions (ok to shower) <br/>
                        <Input type="checkbox" id="" name="" />No Soaking in Water<br/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>

            </Row>
            <Row>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Wound Care<br/>
                        <Input type="checkbox" id="" name="" />Frequency:<br/>
                        <Input type="text" id="" name="" /><br/>
                        <Input type="checkbox" id="" name="" />Directions:<br/>
                        <Input type="textarea" id="" name="" /><br/>
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Blood Sugar (BS) check<br/>
                        <Input type="checkbox" id="" name="" />Frequency:<br/>
                        <Input type="text" id="" name="" /><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Administer Sliding Scale Insulin as follows:<br/>
                        <Input type="checkbox" id="" name="" />
                        <Input type="text" id="" name="" />300-350 – instruct member to self administer ___units of Regular or Humalog
                        Insulin<br/>
                        <b>If patient O2 Sats less than 93%, please notify On-Call provider.</b><br/>
                        <Input type="checkbox" id="" name="" />Intravenous access<br/>
                        Location<Input type="text" id="" name="" /><br/>
                        <Input type="checkbox" id="" name="" />Monitor for signs and symptoms of infiltration/phlebitis: redness, swelling,
                        drainage and/or pain at site<br/>
                        <Input type="checkbox" id="" name="" />Flush with 3cc of NS Q shift to maintain patency
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup check>
                        <Input type="checkbox" id="" name="" />Hygiene<br/>
                        <Input type="checkbox" id="" name="" />No Restrictions (ok to shower) <br/>
                        <Input type="checkbox" id="" name="" />No Soaking in Water<br/>
                    </FormGroup>
                </Col>
            </Row>
        </div>
    );
};

export default OrderForm;
