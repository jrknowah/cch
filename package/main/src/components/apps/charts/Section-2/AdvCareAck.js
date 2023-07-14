import React from "react";
import {
    Col,
    Form, Input, Row, Table
} from 'reactstrap';
import { } from "../../../../data/arrayList";


const AdvCareAck = () => {
    return (
        <div>
            <Form>
                <center><b>Advance Healthcare Directive Acknowledgement Form</b><br/></center>
                <Row>
                    <Col >
                        <Table  responsive>
                            <tbody>
                            <tr >
                                <td >
                                    <b><u>Background</u></b><br/>
                                    In accordance with California Probate Code 4600 et seq. and Federal requirements under Title 42,
                                    clients 18 years of age and older shall receive information about Advance Health Care Directives
                                    and be informed of their right to make decisions about their medical treatment.
                                </td>
                            </tr>

                            <tr >
                                <td>
                                    <b><u>To Be Completed by Staff</u></b><br/>
                                    The client was given a copy of the Advance Health Care Directive Fact Sheet at the first face-to-face contact or clinic visit.<br/><br/>
                                </td>
                                <td>
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    If &quot;No&quot; please explain why the client was not given the Fact Sheet:<br/>
                                    <Input type="text"/>
                                </td>
                            </tr>
                            <tr >
                                <td>
                                    Does the client have an Advance Health Care Directive currently in place?
                                </td>
                                <td>
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    If the client would like to execute an Advance Health Care Directive, please refer them to the
                                    resources identified on the Fact Sheet. If a client already has an Advance Health Care Directive,
                                    insert a copy into the client&apos;s Clinical Record in Section 2 (Consents and Notices).
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row>
                    <Col >
                        <Table bordered responsive>
                            <tbody>
                            <tr >
                                <td colSpan={4}>
                                    <center><b><u>To Be Completed by the Client/Responsible Adult*</u></b><br/></center>
                                    I have been asked about having an Advance Health Care Directive, and I have been given or offered
                                    an Advance Health Care Directive Fact Sheet.
                                </td>
                            </tr>
                            <tr>
                                <td><Input type="text"/>Client Signature</td>
                                <td><Input type="text"/>Responsible Adult Signature</td>
                                <td><Input type="text"/>Witness/Interpreter Signature</td>
                                <td><Input type="text"/>Relationship to Client</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Form>
            <div>
                <Form>
                    <p>
                        <center><b><u>Advance Healthcare Directive Fact Sheet</u></b><br/></center>
                        <br/>

                        <b>What is an Advance Health Care Directive?</b><br/>
                        An Advance Directive is a legal document that allows an individual to state in advance their wishes should they
                        become unable to make healthcare decisions.<br/>
                        In California, an Advance Directive consists of two parts:<br/>
                        (1) appointment of an agent for healthcare; and (2) individual health care instructions.<br/><br/>

                        <b>What can an Advance Health Care Directive do for a person with a psychiatric disability?</b><br/>
                        • It allows you to make treatment choices now in the event you need mental health treatment in the
                        future. You can tell your doctor, institution, provider, treatment facility, and judge what types of treatment you
                        do and do not want.<br/>
                        • You can select a friend or family member to make mental health care decisions, if you cannot make them for
                        yourself.<br/>
                        • It can improve communications between you and your physician.<br/>
                        • It may reduce the need for long hospital stays.<br/>
                        • It becomes a part of your medical record.<br/><br/>

                        <b>Who can fill out an Advance Health Care Directive?</b><br/>
                        Any person 18 years or older who has the “capacity” to make health care decisions. “Capacity” means
                        the person understands the nature and consequences of the proposed healthcare, including the risks and
                        benefits.<br/><br/>

                        <b>When does an Advance Health Care Directive go into effect?</b><br/>
                        An Advance Health Care Directive goes into effect when the person’s primary physician decides the person
                        does not have the “capacity” to make their own healthcare decisions. This means the individual is unable to
                        understand the nature and consequences of the proposed healthcare. The fact that a person has been
                        admitted into a psychiatric facility does not mean the person lacks “capacity.”<br/><br/>

                        <b>How long is an Advance Health Care Directive in effect?</b><br/>
                        In California, an Advance Health Care Directive is indefinite. You can change your mind at any time, as long as
                        you have the “capacity” to make decisions. It is a good idea to review your Advance Health Care Directive
                        yearly to make sure your wishes are stated.<br/><br/>

                        <b>Do I have to have an Advance Health Care Directive?</b><br/>
                        No. It is just a way of making your wishes known in writing, while you are capable. Your choices are
                        important.<br/><br/>

                        <b>Where do I get legal advice about an Advance Health Care Directive?</b><br/>
                        • Your Attorney • Protection and Advocacy, Inc.<br/>
                        • Mental Health America of Los Angeles (213) 413-1130, Ext. 26<br/><br/>

                        <b>Where can I get the Advance Health Care Directive Forms?</b><br/>
                        • Your Attorney • Stationary Stores<br/>
                        • Mental Health America of Los Angeles (213) 413-1130, Ext. 26<br/><br/>

                        <b>Who should have a copy of the Advance Health Care Directive?</b> <br/>
                        • You (Your Advance Health Care Directive should be kept in a safe place, but easily accessible.)<br/>
                        • Your agent (the person designated to make health care decisions if you are unable to do so.)<br/>
                        • Each of your health care providers;<br/>
                        • Each of your mental health providers.<br/><br/>

                        It is important that you keep track of who has a copy of your Advance Health Care Directive in case you make
                        changes in the document.<br/>
                        Complaints concerning non-compliance with the advance health care directive requirements may be filed with
                        the California Department of Health Services (DHS) Licensing and Certification by calling 1-800-236-9747
                        or by mailing to P.O. Box 997413, Sacramento, California 95899-7413.<br/><br/>
                    </p>
                </Form>
            </div>
        </div>
    )
};
export default AdvCareAck;