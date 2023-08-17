import React from "react";
import {
    Col,
    Form, FormGroup,
    Input, Label,
    Row,
} from 'reactstrap';

const AuthForDisclosure = () => {
    return (
        <div>
            <Form>
                <center><b>Authorization For The Use & Disclosure Of Health & Social Service Information</b></center>
                <p>
                    The County of Los Angeles (County) Department of Health Services (DHS) operates a social services and health information exchange (SSHIE) to allow my information to be shared among and between partners in the County’s Community Health and Integrated Programs (CHIP).<br/>
                    <br/>
                    CHIP helps people get resources and social services that can improve their health. It coordinates health-care related assistance and social services support. CHIP includes:<br/>
                    <br/>
                    • Whole Person Care Los Angeles<br/>
                    • Housing For Health<br/>
                    • Office of Diversion and Re-entry<br/>
                    • Countywide Benefits Entitlement Services Team (CBEST)<br/>
                    • Correctional Health Services – Care Transitions Unit<br/>
                    <br/>
                    Many types of organizations work with CHIP, some as subcontractors, including:<br/>
                    • Health care providers <br/>
                    • Behavioral health providers<br/>
                    • Social services providers<br/>
                    • Health plans<br/>
                    • Housing providers<br/>
                    • Organizations involved with the justice system<br/>
                    • Legal providers<br/>
                    • Community organizations<br/>
                    <br/>
                    These organizations provide services to participants in CHIP and need to share my health and social services information to:<br/>
                    • See if I am eligible for County programs<br/>
                    • See if I am eligible for other resources<br/>
                    • Coordinate my care<br/>
                    • Communicate with my treating providers and organizations<br/>
                    • Connect me to social service providers<br/>
                    • Provide me with services<br/>
                    • Receive payment for services<br/>
                    • Program improvement and evaluation activities<br/>
                    • For other County program activities<br/>
                    <br/>
                    By signing my name below, I agree that my current, past, and future treating providers and organizations, and California Department of Public Social Services may disclose my health AUDI.11.16.18. information, records, social services information, and other data to DHS
                    information, records, social services information, and other data to DHS SSHIE for CHIP and that such data may be shared among and between the programs within CHIP. I also agree that the DHS SSHIE for CHIP may disclose this information to my current, past, and future
                    treating providers, including CHIP partners and subcontractors, and other organizations that work with CHIP, which are listed in Attachment A. for the purposes described above.<br/><br/>

                    <ol style={{ listStyleType: 'circle' }}>
                        <li>•I authorize my health and social service information to be shared through any health information exchange operated by or with participation from the County. A health information exchange is an electronic system that allows organizations to share information.</li>
                        <li>Information that may be shared will include information about:</li>
                            <ol style={{ listStyleType: 'circle' }}>
                                <li>My personal characteristics.</li>
                                <li>My medical history, mental or physical condition.</li>
                                <li>My social service information (including CalFresh, General Relief, CalWorks, CashAssistance Program for Immigrants, Medi-Cal, and other public benefits thatI may apply for).</li>
                                <li>Treatment and services I receive.</li>
                            </ol>
                        <li></li>
                    </ol>
                    
                    •<br/>
                        <br/>
                        <br/>
                        <br/><br/>
                    •I understand that this Authorization will apply to data from all services I receive fromCHIP providers and partners and any data received by the DHS SSHIE.<br/><br/>
                    <br/>

                </p>
                <p>
                    I specifically authorize my current, past, and future treating providers and organizations and CHIP to share the following information (check as appropriate):<br/><br/>

                    <FormGroup check inline>
                        <Input type="checkbox" id=""/>
                        <Label for="coiClientSign">Information from health care providers about my mental health diagnosis or treatment that is protected under Welfare and Institutions Code § 5328
                        <Input type="text" id="" placeholder="Intials Here" style={{width: "150px"}}/></Label>
                    </FormGroup>

                    <FormGroup check inline>
                        <Input type="checkbox" id=""/>
                        <Label for="coiClientSign">Information about my HIV/AIDS test results
                            <Input type="text" id="" placeholder="Intials Here" style={{width: "150px"}}/></Label>
                    </FormGroup>

                    <FormGroup check inline>
                        <Input type="checkbox" id=""/>
                        <Label for="coiClientSign">Information from substance use disorder treatment programs (includes substanceuse disorder diagnoses and medications, inpatient stays and outpatient visits or residential treatment, provider names and contact information, and names of the treatment programs) that is protected under 42 C.F.R. Part 2 or State law
                            <Input type="text" id="" placeholder="Intials Here" style={{width: "150px"}}/></Label>
                    </FormGroup>
                </p>

                <p>
                    •This Authorization will be valid for five years, except that this Authorization will expire for Whole Person Care on December 31, 2021 or the upon the end date of the program, if extended.If the Whole Person Care authorization expires, my information will continue to be shared among and between other CHIP programs that I am eligible for or that I participate in.<br/><br/>
                    •I have the right to cancel or change this Authorization at any time. I can start this process by talking to Care Team Member or calling 844-804-5200. At that time, I will either cancel myAuthorization or complete a new Authorization to reflect the change(s) to the sensitive information that I want to share. If I limit my information sharing, my sensitive information recalled. Should I elect not to share any sensitive information, I may receive limited care coordination services
                    will not be shared with partnering providers or organizations from that date forward. Any sensitive information previously shared with current or past treating providers cannot be recalled. Should I elect not to share any sensitive information, I may receive limited care coordination services.<br/><br/>
                    •State and Federal laws already allow health care organizations to share my health information to treat me, obtain payment, and run their operations. I understand that this Authorization does not change the information that can be shared under these laws.<br/><br/>
                    •When my information is shared, there is a chance it will be re-shared with others. Federal law or California privacy law may not protect the re-sharing of my information.<br/><br/>
                    •My ability to receive medical services, treatment, or public social services does not depend upon whether I sign this Authorization. If I choose not to sign this Authorization, CHIP may not be able to share data to coordinate the services I receive, and I may not be able to participate in CHIP.<br/><br/>
                </p>

                <p>
                    I have the right to:<br/>
                    -Inspect or obtain a copy of my health information and social services information that is shared by this Authorization<br/>
                    -Refuse to sign this Authorization<br/>
                    -Receive a copy of this Authorization<br/>
                    I have read this authorization or a CHIP Representative or Care Team Member has read it to me. I authorize the use and sharing of my health and social services information as described above.<br/>
                </p>
                <div className="form-body">
                    <Row className="text-center">
                        <Col md="6">
                            <FormGroup>
                                <Label for="atrClientSign">Client Signature</Label>
                                <Input type="text" id="atrClientSign" name="atrClientSign"></Input>
                                <Label for="atrClientName">Client Printed Name</Label>
                                <Input type="text" id="atrClientName" name="atrClientName"></Input>
                            </FormGroup>

                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="atrStaffSign">Relationship to Client</Label>
                                <Input type="text" id="atrStaffSign" name="atrStaffSign"></Input>
                                <Label for="atrStaffName">Name</Label>
                                <Input type="text" id="atrStaffName" name="atrStaffName"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    )
};
export default AuthForDisclosure;