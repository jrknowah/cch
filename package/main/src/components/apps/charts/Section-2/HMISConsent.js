import React from "react";
import {
    Col,
    Form, FormGroup,
    Input, Label,
    Row,
} from 'reactstrap';
import {ppcList} from "../../../../data/arrayList";

const HMISConsent = () => {
    return (
        <div className="p-4">
            <Form>

                <p>
                    I agree to allow Department of Health Services (DHS) and/or Housing for Health (HFH) Service Partners, to share my information with each other for the following purposes:<br/>
                    <br/>
                    1. DHS and/or HFH Service Partners may use my information to provide me with case management and integrated and/or coordinated services and assist in providing temporary and/or permanent housing opportunities.<br/>
                    2. DHS and/or HFH Service Partners may use or disclose my information for research purposes, subject to the requirements of applicable law, and to make recommendations on polices to improve services for people experiencing homelessness.<br/>
                    3. I understand that if I sign this agreement, I voluntarily consent and hereby authorize DHS to release and disclose information about me to HFH Service Partners.<br/>
                    4. I understand that if I sign this agreement, I voluntarily consent and hereby authorize HFH Service Partners to release and disclose information about me to DHS.<br/>
                    5. I understand and agree that I will receive no money or other benefits from the County of Los Angeles, DHS, HFH Service Partners or any other as a result of consenting to the release of such information.<br/>
                    6. I agree to release the County of Los Angeles, DHS, HFH Service Partners, its agents and employees from any liability whatsoever, including for injuries, damages and losses, known or unknown, resulting from sharing the information with other County departments, homeless service providers, and housing locators, with whom the County has relationships.<br/>
                    7. I acknowledge that before signing this consent for release agreement, I have carefully read and fully understand its terms. If I am unable to read, the person asking me to sign this form has read and explained all of the items/terms listed in this agreement.<br/>
                    8. This agreement shall become effective on the date provided below and will expire one year from the date below.<br/>
                    <br/>
                    CONFIDENTIALITY: I understand my records of treatment and information discussed are confidential except in cases where program staff are mandated by law to report.<br/>
                    <br/>
                    These cases include:<br/>
                    <br/>
                    1)When I am a danger to myself because I am suicidal or unable to take care of myself (gravely disable),<br/>
                    2)When there is any serious threat to harm another person’s life, and<br/>
                    3)When there is suspected child, elder or dependent abuse or neglect or domestic violence.<br/>
                    <br/>
                    Holliday’s Helping Hands staff will act to ensure the safety of all concerned and may notify the appropriate persons/legal authorities.<br/>
                    More detailed information about the use of my Personal Health Information is included in the Holliday’s Helping Hands Notice of Privacy Practices which I will also read and sign.<br/>
                    <br/>
                    I have read this consent and agree to its provisions.<br/>
                </p>

                <div className="form-body">
                    <Row className="text-center">
                        <Col md="12">
                            <FormGroup>
                                <Label for="atrClientSign">Client Signature (or Conservator)</Label>
                                <Input type="text" id="atrClientSign" name="atrClientSign"/>
                                <Label for="atrClientName">Client Printed Name</Label>
                                <Input type="text" id="atrClientName" name="atrClientName"/>
                                <Label for="atrClientName">Last 4 Digit of SSN</Label>
                                <Input type="text" id="atrClientName" name="atrClientName"/>
                                <Label for="atrClientName">Head of Household</Label>
                                <Input type="select" id="atrClientName" name="atrClientName">
                                    <option>Yes</option>
                                    <option>No</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                NAME AND DATE OF BIRTH OF DEPENDENT(S) UNDER 18 YEARS OF AGE
                                <Label for="atrStaffSign">Child Name</Label>
                                <Input type="text" id="atrStaffSign" name="atrStaffSign"/>
                                <Label for="atrStaffName">Child Name</Label>
                                <Input type="text" id="atrStaffName" name="atrStaffName"/>
                                <Label for="atrStaffSign">Child DOB</Label>
                                <Input type="text" id="atrStaffSign" name="atrStaffSign"/>
                                <Label for="atrStaffName">Child DOB</Label>
                                <Input type="text" id="atrStaffName" name="atrStaffName"/>
                                <Label for="atrStaffSign">Last 4 Digit of SSN</Label>
                                <Input type="text" id="atrStaffSign" name="atrStaffSign"/>
                                <Label for="atrStaffName">Last 4 Digit of SSN</Label>
                                <Input type="text" id="atrStaffName" name="atrStaffName"/>
                                <Label for="atrStaffSign">Living With You?</Label>
                                <Input type="select" id="atrClientName" name="atrClientName">
                                    <option>Yes</option>
                                    <option>No</option>
                                </Input>
                                <Label for="atrStaffName">Living With You?</Label>
                                <Input type="select" id="atrClientName" name="atrClientName">
                                    <option>Yes</option>
                                    <option>No</option>
                                </Input>

                                <Label for="atrStaffSign">I wish to add the following agencies to this form:</Label>
                                <Input type="text" id="atrStaffSign" name="atrStaffSign"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Input type="checkbox" id="cftCopyCheck">Client was given or refused a copy of this consent on</Input>
                        <Input type="text" id="cftCopyDate">Date</Input>
                        <Input type="text" id="cftCopyInit">Initials</Input>
                    </Row>
                </div>
            </Form>
        </div>
    )
};
export default HMISConsent;