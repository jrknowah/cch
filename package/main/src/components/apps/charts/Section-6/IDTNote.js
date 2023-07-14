import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input
} from 'reactstrap';

const IDTNote = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>IDT NOTE</Label>
            </Row>
            <Row className="text-center">
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">Hospital</Label>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Hospital" /><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">Admit Date</Label>
                        <Input type="text" id="clientPayee" name="clientPayee" placeholder="Admit Date" /><br/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">Diagnosis and H&P pertinent:</Label>
                        <Input type="textarea" id="clientPayee" name="clientPayee" placeholder="Diagnosis 1" /><br/>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="clientPayee">What problems/systems/deficits is the member having with life issues?</Label>
                        <Input type="textarea" id="clientPayee" name="clientPayee" placeholder="Diagnosis 1" /><br/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">What problems does the member want us to address (priority)?</Label>
                        <Input type="textarea" id="clientPayee" name="clientPayee" placeholder="Diagnosis 5"/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">What consults are you placing in relation to specific problems?</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">If no consults, then who can we consult?</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">D/C plans for member? Home, transitional housing, SNF, Board and Care</Label>
                        <Input type="textarea" id="clientPayee" name="clientPayee" placeholder="Diagnosis 5"/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">Is patient medically cleared? Yes OR No If No, approximate date to be cleared?</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">Are there any barriers to discharge? Yes or No If yes, please describe:</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Label>IDT NOTE</Label>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="clientPayee">What is the member situation in relation to his/her mental health needs, living
                            conditions/family/finances, transportation issues?</Label>
                        <Input type="textarea" id="clientPayee" name="clientPayee" placeholder="Diagnosis 1" /><br/>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="clientPayee">Who are the member’s support system and dynamics of the support system? Family,
                            significant other, friends?</Label>
                        <Input type="textarea" id="clientPayee" name="clientPayee" placeholder="Diagnosis 1" /><br/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">Does the member have a source of income? If so what?</Label>
                        <Input type="textarea" id="clientPayee" name="clientPayee" placeholder="Diagnosis 5"/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">Does the member have ID, Birth certificate, SS card?</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">What resources/assistance can we provide?</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">Who is the HFH case manager that will follow this patient?</Label>
                        <Input type="textarea" id="clientPayee" name="clientPayee" placeholder="Diagnosis 5"/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">What are the specific strategies/recommendations we are going to use as a team to address the above problems?</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">What is the member’s educational level?</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">What kind of work did the member do in the past? Is a work goal feasible and how long will it take to achieve (long term/short term)?</Label>
                        <Input type="textarea" id="clientPayee" name="clientPayee" placeholder="Diagnosis 5"/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">Does member have prior work experience and are there any mental/physical barriers to attaining employment</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">How will we assist the member in attaining these goals?</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Label>Nursing</Label>
            </Row>
            <Row>
                <Label for="clientPayee">What specific information do you need from other members of the team?</Label><br/>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">SW/Advocate:</Label>
                        <Input type="textarea" id="clientPayee" name="clientPayee" placeholder=""/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">Provider: Meds/ consults/additional testing</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Label for="clientPayee">Nursing:</Label><br/>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">Has the Member been able to attend appointments?</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">Is/are there (a) specific appointment(s) Member would like to focus on attending?</Label>
                        <Input type="textarea" id="clientPayee" name="clientPayee" placeholder=""/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">What are the specific problems the member is experiencing that are barriers to independent functioning?</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">What is the Member’s goal? Has it changed since initial eval/previous appointments?</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayee">Is Member compliant with meds/therapy?</Label>
                        <Input type="textarea" id="clientPayee" name="clientPayee" placeholder=""/><br/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="10">
                    <FormGroup>
                        <Label for="clientPayeeName">ADDITIONAL INFO:</Label>
                        <Input type="textarea" id="clientPayeeName" name="clientPayeeName" />
                    </FormGroup>
                </Col>

            </Row>
        </div>
    );
};

export default IDTNote;
