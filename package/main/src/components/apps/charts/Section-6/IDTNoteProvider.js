import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input
} from 'reactstrap';
import {
    ynd
} from "../../../../data/arrayList";

const IDTNoteProvider = () => {
    return (
        <div className="form-body">
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
        </div>
    );
};

export default IDTNoteProvider;
