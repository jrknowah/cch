import React from "react";
// import {BrowserRouter} from "react-router-dom";
import {
    Col,
    Form, FormGroup,
    Input, Label,
    Row, Table,
} from 'reactstrap';
import ComponentCard from "../../../ComponentCard";
import { } from "../../../../data/arrayList";


const LBHMIS = () => {
    return (
        <div>
            <Form>

                <p>
                    <b> LB HMIS Consent To Share Protected Personal Information & Long Beach Release Of Information</b><br/>
                    <br/>
                    The City of Long Beach represents the coordinated system of care working together with organizations to improve client progress toward self-sufficiency. The City of Long Beach is the lead organization overseeing the Long Beach Homeless Management Information System (LB HMIS). The City of Long Beach and participating organizations collect client personal information (including household members) in the HMIS data system about client we serve.<br/>
                    <br/>
                    <b>What is the HMIS System?</b><br/>
                    HMIS stands for Homeless Management Information System and is a secured data system that stores information about homelessness services. HMIS participation is for programs and organization providing prevention, supportive services, shelter and housing related services for people experiencing homelessness or at risk of homelessness. Organizations that participate in the LB HMIS shall have access to the information collected. These organizations may include homeless service providers, housing agencies, healthcare providers, governments and other appropriate service providers.<br/><br/>

                    <b>What is the purpose of the HMIS System?</b><br/>
                    The purpose of the HMIS is to assist people experiencing homelessness or at risk of homelessness to have better access to those services, achieve self-sufficiency, and obtain housing. The information provided will help coordinate the most effective services for you and your household members.<br/>
                </p>
                <ComponentCard
                    title="What Type of information is being collected?"
                >
                    <Table bordered responsive>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>History of Homelessness and Housing</td>
                                <td>Financial & Employment Information</td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td>Veterans Status</td>
                                <td>Non-cash Information</td>
                            </tr>
                            <tr>
                                <td>Social Security Number</td>
                                <td>Assessment Information</td>
                                <td>Program Objective & Outcome</td>
                            </tr>
                            <tr>
                                <td>Demographic Information (such as gender, race and ethnicity)</td>
                                <td>Case Manager</td>
                                <td>Services & Referral Information</td>
                            </tr>
                            <tr>
                                <td>Driver’s License or ID Number & State</td>
                                <td>Case Notes and/or Client Notes</td>
                                <td>History of Domestic Violence</td>
                            </tr>
                            <tr>
                                <td>Contact & Emergency Contact Information</td>
                                <td>Basic Disabling Conditions & Medical Information</td>
                                <td>Documents Received</td>
                            </tr>
                            <tr>
                                <td>Household Composition</td>
                                <td>Use of Crisis Services, Hospitals and Jail</td>
                                <td>Photo other likeness (if included)</td>
                            </tr>
                        </tbody>
                    </Table>
                </ComponentCard>
                <p>
                    <b>Why is this type of information being collected?</b><br/>

                    Client data will be used by local state and federal officials to better address the needs of the homeless. Gathering certain information (race, date of birth, family size, etc.) about you and the members of your household is a requirement of the federal and local funding that supports this programs and organizations. The information used, released and shared may include information related to a history of alcohol and/or drug abuse, domestic violence, medical or mental health issues, employment, financial or housing status. This information may be exchanged among the organizations verbally, by phone, mail, fax, personal delivery, or email.<br/>
                    <br/>
                    <b>Why is this type of information being collected?</b><br/>
                    By gathering this information on you only once you can be served by other organizations without reporting all the details (date of birth, social security number, last address, etc.) again and again. If there is a reason that providing your name or the name of other members of your household would place you (or your household member) at risk, then you can request that your information NOT be shared with other agencies by signing the appropriate section at the end of this form. You have the right to revoke the sharing of your information at any time. The information you provide allows you and your caseworker can work together to identify the housing and services you need and work to obtain them.
                    <br/>
                    <b>Who has access to your information?</b><br/>
                    Your HMIS information may be shared by the partner organizations to coordinate referral and placement for housing and services such as counseling, food, utility assistance, and other services. The list of partner organizations is shown on the final page of this form. Report developers and HMIS staff may also see your data. There are strict legal guidelines for who has access to your information, and it is protected by electronic encryption.
                    <br/>
                    <b>Additional Uses and Disclosures of Protected Personal Information (PPI) and Documents</b><br/>
                    While information obtained through your participation within the City of Long Beach will be kept confidential and shared only with the partner organizations authorized by you, under the HMIS privacy standard, Long Beach CoC Written Standards, and City of Long Beach Coordinated Entry System Policy and Procedures, these additional uses and disclosures are permissive:
                    <br/>
                    • Uses and disclosures to release of information for Coordinated Entry System, prevention, supportive services, shelter and housing related services.
                    City of Long Beach and participating organizations may use, disclose and/or exchanged PPI and documents provided by client and/or organizations uploaded in HMIS or external documents by electronic transmission, verbally, by phone, mail, fax, personal delivery, or email.<br/>
                    • Uses and disclosures required by law.
                    City of Long Beach and participating organizations may use or disclose PPI when required by law to the extent that the use or disclosure complies with and is limited to the requirements of the law.<br/>
                    • Uses and disclosures to avert a serious threat to health or safety.
                    City of Long Beach and participating organizations, consistent with applicable law and standards of ethical conduct, use or disclose PPI if: (1) The participating organizations, in good faith, believes the use or disclosure is necessary to prevent or lessen a serious and imminent threat to the health or safety of an
                    individual or the public; and (2) the use or disclosure is made to a person reasonably able to prevent or lessen the threat, including the target of the threat.<br/>
                    • Uses and disclosures about victims of abuse, neglect or domestic violence.
                    City of Long Beach and participating organizations may disclose PPI about an individual whom the participating organizations reasonably believes to be a victim of abuse, neglect or domestic violence to a government authority
                    (including a social service or protective services agency) authorized by law to receive reports of abuse, neglect or domestic violence<br/>
                </p>

                <p>
                    You have a right to view your record and to correct inaccurate information. You have a right to a copy of your record.<br/>
                    <b>BY SIGNING THIS FORM, I UNDERSTAND THAT:</b><br/>
                        • The City of Long Beach and participating organizations will keep my information private using strict privacy policies.<br/>
                        • I have the right to review their privacy policies and understand that they may change over time.<br/>
                        • If I have questions about my privacy rights, my HMIS information, or am concerned that my information has been misused, I can contact the Long Beach HMIS Systems Administrator at (562) 570-4042.<br/>
                        • I can receive a copy of this Consent and upon request, the Notice of Privacy Practices, Long Beach CoC Written Standard and/or City of Long Beach Coordinated Entry System Policy and Procedures.<br/>
                        • I may refuse to sign this Consent. If I refuse, I will not lose any benefits or services. I understand the City of Long Beach and participating organizations collect my personal information (including household members) in the HMIS data system that provide prevention, supportive services, shelter and housing related services.<br/>
                        • This Consent will expire 7 years from my last HMIS recorded activity.<br/>
                        • I may revoke this Consent at any time in writing to: City of Long Beach – Homeless Services Division, Multi-Service Center, ATTN: Long Beach HMIS Team, 1301 West 12th St. Long Beach, CA 90813<br/>
                        The revocation will take effect upon receipt, except to the extent others have already acted under this Consent, and after participating organizations and the City of Long Beach have been notified so that revocation does not interfere with care or service coordination.<br/>
                        • My HMIS information may be further shared by the participating organizations to other organizations for housing, care coordination, counseling, food, utility assistance, and other services.<br/>
                        • My HMIS information may be used to help evaluate the quality of services provided or research purposes.<br/>
                        • My HMIS information may be viewed by auditors or funders who review work of the participating organizations, including but not limited to U.S. Department of Housing and Urban Development, the U.S. Department of Veteran Affairs, U.S. Department of Health and Human Services, Los Angeles County and the City of Long Beach. I understand that the list of auditors and funders may change over time.<br/>
                    <b>SIGNATURE AND ACKNOWLEDGEMENT</b><br/>
                        By signing below, I have read (or been read) this consent, have received answers to my questions, and I give my consent (including household members) to have my information shared with the City of Long Beach and among the organizations on the following page. I have drawn a line through the agency(s) and initialed next to the line(s) to identify those agency(s) for which I do not wish to share information. I understand that I am entitled to receive a copy of my signed Consent and by my signature below, I acknowledge that I have been provided with a copy. This consent form is valid for seven (7) year from the date it is signed and can be cancelled/revoked by me at any time.<br/>
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
                    <p>
                        <b>City of Long Beach – Homeless Services Partner Organizations</b><br/>

                        I wish to add the following agencies to this form:
                        <FormGroup check inline>
                            <Input type="textarea" id="cftStaffSign" name="cftStaffSign"/>
                        </FormGroup>
                </p>
                </div>
            </Form>
        </div>
    )
};
export default LBHMIS;