import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input
} from 'reactstrap';
import Select from 'react-select';
import {
    identityList, highestEdu
} from "../../../../data/arrayList";

const IDTNoteCM = () => {
    return (
        <div className="form-body">       
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
        </div>
    );
};

export default IDTNoteCM;
