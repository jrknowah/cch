import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input
} from 'reactstrap';
import Select from 'react-select';
import {
    identityList,ynd, highestEdu
} from "../../../../data/arrayList";

const IDTNote = () => {
    return (
        <div className="form-body">
            <Row className="text-center">
                <Label>IDT NOTE</Label>
            </Row>
            <Row>
                <b><center>Provider (NP or MD):</center></b>
            </Row>
            <Row className="text-center">
                <Col md="6">
                    <FormGroup>
                        <Label for="idtHospital">Hospital</Label>
                        <Input type="text" id="idtHospital" name="idtHospital" placeholder="" /><br/>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="idtAdmitDate">Admit Date</Label>
                        <Input type="date" id="idtAdmitDate" name="idtAdmitDate" placeholder="" /><br/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtDiag">Diagnosis and H&P pertinent:</Label>
                        <Input type="textarea" id="idtDiag" name="idtDiag" placeholder="" /><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtProblems">Problems is the member having with life?</Label>
                        <Input type="textarea" id="idtProblems" name="idtProblems" placeholder="" /><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtPriority">What problems is priority to member?</Label>
                        <Input type="textarea" id="idtPriority" name="idtPriority" placeholder=""/><br/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>         
                <Col md="4">
                    <FormGroup>
                        <Label for="idtConsults">What consults are you placing in relation to problems?</Label>
                        <Input type="textarea" id="idtConsults" name="idtConsults" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtNoConsults">If no consults, then who can we consult?</Label>
                        <Input type="textarea" id="idtNoConsults" name="idtNoConsults" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtPlans">D/C plans for member?</Label>
                        <Input type="textarea" id="idtPlans" name="idtPlans" placeholder=""/><br/>
                    </FormGroup>
                </Col>                
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtPatientClear">Is patient medically cleared?</Label>
                        <Input type="select" name="idtPatientClear" id="idtPatientClear" >
                            {ynd.map((y) => (
                                <option value={y}>{y}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtPatientClearDate">Date Patient was cleared?</Label>
                        <Input type="date" id="idtPatientClearDate" name="idtPatientClearDate" />
                    </FormGroup>
                </Col>
                
                <Col md="4">
                    <FormGroup>
                        <Label for="idtDischarge">Barriers to discharge?</Label>
                        <Input type="text" id="idtDischarge" name="idtDischarge" />
                    </FormGroup>
                </Col>  
            </Row>
            <Row>
                                        
            </Row>
            <Row className="text-center">
                <Label>IDT NOTE</Label>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="idtMemberSituation">What is the member situation in relation to his/her mental health needs, living
                            conditions/family/finances, transportation issues?</Label>
                        <Input type="textarea" id="clientidtMemberSituationPayee" name="idtMemberSituation" placeholder="" /><br/>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="idtMemberSupport">Who are the member’s support system and dynamics of the support system? Family,
                            significant other, friends?</Label>
                        <Input type="textarea" id="idtMemberSupport" name="idtMemberSupport" placeholder="" /><br/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtIncomeSource">Member source of income?</Label>
                        <Input type="text" id="idtIncomeSource" name="idtIncomeSource" placeholder=""/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientGovIssued">Government Issued Identification</Label>
                        <Select

                            closeMenuOnSelect={false}
                            isMulti
                            options={identityList}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtResources">What resources/assistance can we provide?</Label>
                        <Input type="textarea" id="idtResources" name="idtResources" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtHfhCM">HFH case manager that will follow this client?</Label>
                        <Input type="text" id="idtHfhCM" name="idtHfhCM" placeholder=""/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtRecommend">Recommendations to address problems?</Label>
                        <Input type="textarea" id="idtRecommend" name="idtRecommend" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtEduLevel">Member’s educational level?</Label>
                        <Input type="select" id="clientHighEnd" name="clientHighEnd" >
                            {highestEdu.map((hEdu) => (
                                <option value={hEdu}>{hEdu}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="idtGoals">Is a work goal feasible and how long will it take to achieve?</Label>
                        <Input type="textarea" id="idtGoals" name="idtGoals" placeholder=""/><br/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPayeeName">Any mental/physical barriers to attaining employment?</Label>
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
                        <Label for="clientPayee">Socail Work Advocate:</Label>
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
