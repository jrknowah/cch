import React from "react";
import {
    Col,
    Form, FormGroup,
    Input, Label,
    Row,
} from 'reactstrap';

const AuthToRelease = () => {
    return (
        <div className="p-4">
            <Form>
                <center><b>Authorization To Share/Release Information</b></center>
                <p>
                    I agree to allow Department of Health Services (DHS) and/or Housing for Health (HFH) Service Partners, to share my information with each other for the following purposes:<br/>
                    <br/>
                    1. DHS and/or HFH Service Partners may use my information to provide me with case management and integrated and/or coordinated services and assist in providing temporary and/or permanent housing opportunities.<br/><br/>
                    2. DHS and/or HFH Service Partners may use or disclose my information for research purposes, subject to the requirements of applicable law, and to make recommendations on polices to improve services for people experiencing homelessness.<br/><br/>
                    3. I understand that if I sign this agreement, I voluntarily consent and hereby authorize DHS to release and disclose information about me to HFH Service Partners.<br/><br/>
                    4. I understand that if I sign this agreement, I voluntarily consent and hereby authorize HFH Service Partners to release and disclose information about me to DHS.<br/><br/>
                    5. I understand and agree that I will receive no money or other benefits from the County of Los Angeles, DHS, HFH Service Partners or any other as a result of consenting to the release of such information.<br/><br/>
                    6. I agree to release the County of Los Angeles, DHS, HFH Service Partners, its agents and employees from any liability whatsoever, including for injuries, damages and losses, known or unknown, resulting from sharing the information with other County departments, homeless service providers, and housing locators, with whom the County has relationships.<br/><br/>
                    7. I acknowledge that before signing this consent for release agreement, I have carefully read and fully understand its terms. If I am unable to read, the person asking me to sign this form has read and explained all of the items/terms listed in this agreement.<br/><br/>
                    8. This agreement shall become effective on the date provided below and will expire one year from the date below.<br/>
                    <br/>

                </p>

                <div className="form-body">
                    <Row className="text-center">
                        <Col md="6">
                            <FormGroup>
                                <Label for="atrClientSign">Client Signature (or Conservator)</Label>
                                <Input type="text" id="atrClientSign" name="atrClientSign"></Input>
                                <Label for="atrClientName">Client Printed Name</Label>
                                <Input type="text" id="atrClientName" name="atrClientName"></Input>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="atrStaffSign">Staff/Witness Printed & Signed Name</Label>
                                <Input type="text" id="atrStaffSign" name="atrStaffSign"></Input>
                                <Label for="atrStaffName">Staff/Witness Printed & Signed Name</Label>
                                <Input type="text" id="atrStaffName" name="atrStaffName"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    )
};
export default AuthToRelease;