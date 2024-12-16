import React from "react";
import {
    Col,
    Form, FormGroup,
    Input, Label,
    Row,
} from 'reactstrap';


const ConsentForTreatment = () => {
    return (
        <div className="p-4">
            <Form >
                <center><b>Consent for Treatment & Services</b></center>
                <p>
                    I, the undersigned client, consent to and authorize medical/mental health services from Holliday&apos;s Helping Hands.<br/>
                    <br/>
                    As a patient of Holliday&apos;s Helping Hands, I am eligible for a wide range of services which may include but are not limited to case management, advocacy, counseling, medication management, psychiatric services, vocational training/services, laboratory tests, money management and other appropriate services.<br/>
                    <br/>
                    <b>All Services received are voluntary </b>and I, the undersigned, have the right to:<br/><br/>
                    <ol>
                        <li>Be informed of and participate in the selection of services which are available</li>
                        <li>Receive any of the available services without being required to receive other services, unless program rules dictate otherwise</li>
                        <li>Request a change of service providers or;</li>
                        <li>Withdraw this consent at any time</li>
                    </ol>

                    <b>CONFIDENTIALITY:</b> I understand my records of treatment and information discussed are confidential except in cases where program staff are mandated by law to report.<br/>
                    <br/>
                    <b>These cases include:</b><br/>
                    <ol>
                        <li>When I am a danger to myself because I am suicidal or unable to take care of myself.</li>
                        <li>When there is any serious threat to harm another person&apos;s life.</li>
                        <li>When there is suspected child, elder or dependent abuse or neglect or domestic violence.</li>
                    </ol>

                    Holliday&apos;s Helping Hands staff will act to ensure the safety of all concerned and may notify the appropriate persons/legal authorities. More detailed information about the use of my Personal Health Information is included in the Serenity Recuperative Care Notice of Privacy Practices which I will also read and sign.<br/>
                    <br/>
                    I have read this consent and agree to its provisions.<br/>
                </p>

                <div className="form-body">
                    <Row className="text-center">
                        <Col md="6">
                            <FormGroup>
                                <Label for="cftClientSign">Client Signature</Label>
                                <Input type="text" id="cftClientSign" name="cftClientSign"></Input>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="cftStaffSign">Staff Signature</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    )
};
export default ConsentForTreatment;