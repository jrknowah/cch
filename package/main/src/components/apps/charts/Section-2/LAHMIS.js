import React from "react";
// import {BrowserRouter} from "react-router-dom";
import {
    Col,
    Form, FormGroup,
    Input, Label,
    Row
} from 'reactstrap';
// import ComponentCard from "../../../ComponentCard";
import { } from "../../../../data/arrayList";


const LAHMIS = () => {
    return (
        <div>
            <Form>
                <p>
                    <center><b>GREATER LOS ANGELES HOMELESS MANAGEMENT INFORMATION SYSTEM (LA HMIS)</b><br/></center>
                    <center><b>CONSENT TO SHARE PROTECTED PERSONAL INFORMATION </b><br/></center>
                    <br/>
                    The LA HMIS is a local electronic database that securely record information (data) about clients
                    accessing housing and homeless services within the Greater Los Angeles County. This organization
                    participates in the HMIS database and shares information with other organizations that use this
                    database. This information is utilized to provide supportive services to you and your household
                    members.<br/>
                    <br/>
                    <b>What information is shared in the HMIS database?</b><br/>
                    We share both Protected Personal Information (PPI) and general information obtained during your
                    intake and assessment, which may include but is not limited to:<br/><br/>

                    • Your name and your contact information<br/>
                    • Your social security number<br/>
                    • Your birthdate<br/>
                    • Your basic demographic information such as gender and race/ethnicity<br/>
                    • Your history of homelessness and housing (including your current housing status, and where and
                    when you have accessed services)<br/>
                    • Your self-reported medical history, including any mental health and substance abuse issues<br/>
                    • Your case notes and services<br/>
                    • Your case manager&rsquo;s contact information<br/>
                    • Your income sources and amounts; and non-cash benefits<br/>
                    • Your veteran status<br/>
                    • Your disability status<br/>
                    • Your household composition<br/>
                    • Your emergency contact information<br/>
                    • Any history of domestic violence<br/>
                    • Your photo (optional)<br/><br/>

                    <b>How do you benefit from providing your information?</b><br/>
                    The information you provide for the HMIS database helps us coordinate the most effective services for
                    you and your household members. By sharing your information, you may be able to avoid being
                    screened more than once, get faster services, and minimize how many times you tell your ‘story.’
                    Collecting this information also gives us a better understanding of homelessness and the effectiveness
                    of services in your local area.<br/>

                    <b>How is your personal information protected?</b><br/>
                    Your information is protected by the federal HMIS Privacy Standards and is secured by passwords and
                    encryption technology. In addition, each participating organization has signed an agreement to maintain
                    the security and confidentiality of the information. In some instances, when the participating
                    organization is a health care organization, your information may be protected by the privacy standards
                    of the Health Insurance Portability and Accountability Act (HIPAA).<br/>

                    <b>By signing below, you understand and agree that:</b><br/>
                    • You have the right to receive services, even if you do not sign this consent form.<br/>
                    • You have the right to receive a copy of this consent form.<br/>
                    • Your consent permits any participating organization to add to or update your information in<br/>
                    HMIS, without asking you to sign another consent form.<br/>
                    • This consent is valid for seven (7) years from the date the PPI was created or last changed.<br/>
                    • You may revoke your consent at any time, but your revocation must be provided either in
                    writing or by completing the Revocation of Consent form. Each Participating Organization that
                    entered information into HMIS will continue to have access to your PPI, but the information will
                    no longer be available to any other Participating Organization.<br/>
                    • The Privacy Notice for the LA HMIS contains more detailed information about how your
                    information may be used and disclosed. A copy of this notice is available upon request.<br/>
                    • No later than five (5) business days of your written request, we will provide you with:<br/>
                    o A correction of inaccurate or incomplete PPI<br/>
                    o A copy of your consent form<br/>
                    o A copy of your HMIS records; and<br/>
                    o A current list of participating organizations that have access to your HMIS data.<br/>
                    • Aggregate or statistical data that is released from the HMIS database will not disclose any of
                    your PPI.<br/>
                    • You have the right to file a grievance against any organization whether or not you sign this
                    consent.<br/>
                    • You are not waiving any rights protected under Federal and/or California law.<br/>

                    <b>Right to Make Corrections</b><br/>
                    If you believe that your PPI in HMIS is incorrect or incomplete, you have the right to request a
                    correction. To ask for either of these changes, send a written request, including the reason why you
                    believe the information is incorrect or incomplete, to the HMIS Administrator of the organization that
                    entered the information into HMIS. The organization may turn down your request if the information:<br/>
                    • Was not created by the organization you are requesting the change from;<br/>
                    • Is not part of the information that you would be allowed to look at and copy;<br/>
                    • Is related to another individual;<br/>
                    • Is found to be correct and complete.<br/>
                    • Is otherwise protected by law.<br/><br/>
                    However, if your request for correction is denied, you have the right to request that the following
                    language is entered next to a particular entry: “The participant disputes the accuracy of this entry.”<br/><br/>

                    <b>SIGNATURE AND ACKNOWLEDGEMENT</b><br/>
                    Your information is protected by the federal HMIS Privacy Standards and is secured by passwords and
                    encryption technology. In addition, each participating organization has signed an agreement to maintain
                    the security and confidentiality of the information. In some instances, when the participating
                    organization is a health care organization, your information may be protected by the privacy standards
                    of the Health Insurance Portability and Accountability Act (HIPAA).<br/>
                </p>
                <div className="form-body">
                    <Row className="text-center">
                        <Col md="4">
                            <FormGroup>
                                <Label for="cftClientName">Client Printed Name</Label>
                                <Input type="text" id="cftClientName" name="cftClientName"></Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="cftStaffSign">DOB</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="cftStaffSign">Last 4 of SSN</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="cftStaffSign">Client Signature</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="cftStaffSign">Date</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="cftStaffSign">Head of Household</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <FormGroup>
                                <Label for="cftStaffSign">Child Name</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup check inline>
                                <Label for="cftStaffSign">DOB</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup check inline>
                                <Label for="cftStaffSign">Last 4 of SSN</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup check inline>
                                <Label for="cftStaffSign">Living With You?</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <FormGroup>
                                <Label for="cftStaffSign">Child Name</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup check inline>
                                <Label for="cftStaffSign">DOB</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup check inline>
                                <Label for="cftStaffSign">Last 4 of SSN</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup check inline>
                                <Label for="cftStaffSign">Living With You?</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <FormGroup>
                                <Label for="cftStaffSign">Child Name</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup check inline>
                                <Label for="cftStaffSign">DOB</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup check inline>
                                <Label for="cftStaffSign">Last 4 of SSN</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup check inline>
                                <Label for="cftStaffSign">Living With You?</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="cftStaffSign">Staff Signature</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="cftStaffSign">Organization</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    )
};
export default LAHMIS;