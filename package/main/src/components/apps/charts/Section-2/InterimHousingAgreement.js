import React from "react";
import {
    Col,
    Form, FormGroup,
    Input, Label, Row
} from 'reactstrap';
import { } from "../../../../data/arrayList";


const InterimHousingAgreement = () => {
    return (
        <div>
            <Form>
                <p>
                    <center><b>Termination Policy & Procedure</b><br/></center>
                    <br/>
                    Serenity Recuperative Care, makes every effort to assist participants to remain in the Interim Housing Program
                    (IHP). However, the reasons below may result in immediate termination:<br/>
                    <br/>
                    • Physical aggression<br/>
                    • Possession of weapons<br/>
                    • Verbally/physically threatening behaviors<br/>
                    • Engaging in illegal activity on site<br/>
                    • Sexual misconduct<br/>
                    • Destruction and/or defacing property<br/><br/>

                    All other reasons for termination will be in consultation with the participant’s mental health provider and the
                    Department of Mental Health’s IHP Administration.<br/><br/>

                    Program participants who are terminated from the IHP will be provided a written notice that includes:<br/><br/>

                    • Reason(s) for termination<br/>
                    • Effective date of termination<br/>
                    • Grievance procedure<br/><br/>

                    I have read and understand the Termination Policy & Procedure.<br/>

                    <div className="form-body">
                        <Row className="text-center">
                            <Col md="6">
                                <FormGroup>
                                    <Label for="cftClientName">Patient Signature</Label>
                                    <Input type="text" id="cftClientName" name="cftClientName"></Input>
                                </FormGroup>
                            </Col>
                        </Row>


                    </div>
                </p>
            </Form>
        </div>
    )
};
export default InterimHousingAgreement;