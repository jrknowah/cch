import React from "react";
import {
    Row,
    Col, Label, Input, Table
} from 'reactstrap';
import {
    cmOb1, cmOb2, cmOb3, cmOb4, cmOb5,cmOb6,cmOb7,cmOb8,cmOb9,cmOb10,cmOb11,
    gadList,
    mhList, resultInList,
    substanceAbuseOften, substanceAbuseUse, substanceList, treatList
} from "../../../../data/arrayList";


const MentalHealthScreen = () => {

    return (

        <div className="form-body">
            <Row>
                <Col className="text-center">
                    <b><Label>MENTAL HEALTH SCREENING</Label></b>
                </Col>
            </Row>
            <Row>
                <Col >
                    <center><b><Label>Mental Illness</Label></b></center>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="">Ever been diagnosis with a mental illness?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">If YES, select one:</Label>
                    <Input type="select" className="custom-select" id="" name="" >
                        {mhList.map((mh) => (
                            <option value={mh}>{mh}</option>
                        ))}
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Mental Health Treatment History</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="">Ever utilized mental health services?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="2" >
                    <Label for="clientEmployed">Currently utilizing mental health services?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>List most current Mental Health Provider:</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="">Agency Name:</Label>
                    <Input type="text" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">MH Worker:</Label>
                    <Input type="text" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">Phone Number:</Label>
                    <Input type="tel" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">LAST APPOINTMENT:</Label>
                    <Input type="datetime-local" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">NEXT APPOINTMENT:</Label>
                    <Input type="datetime-local" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="5" >
                    <Label>Have you ever been hospitalized for mental health reason(s)?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="2" >
                    <Label>Total # hospitalizations:</Label>
                    <Input type="text" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Date Hospitalized</th>
                            <th>Location of Hospitalization (Hospital)</th>
                            <th>Reason for Hospitalization</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Input input type="date" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td><Input input type="date" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td><Input input type="date" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <Label for="">Have you ever seen a psychiatrist?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4" >
                    <Label for="">Are you current seeing a psychiatrist?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="">Psychiatrist:</Label>
                    <Input type="text" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">Facility:</Label>
                    <Input type="text" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">Phone Number:</Label>
                    <Input type="tel" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">LAST APPOINTMENT:</Label>
                    <Input type="datetime-local" id="" name=""/>
                </Col>
                <Col md="2" >
                    <Label for="">NEXT APPOINTMENT:</Label>
                    <Input type="datetime-local" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Psychiatric Medications</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <Label for="">Have you ever taken medications for mental health?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4" >
                    <Label for="">Are you currently taking medications for mental health issues?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Name of Medication</th>
                            <th>Dose / Frequency</th>
                            <th>Effectiveness/Side Effects</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Symptom Assessment</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="2" >
                    <Label for="">How often do you feel sad?</Label>
                    <Input type="select" id="" name="" >
                        {gadList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
                <Col md="2" >
                    <Label for="">How often do you feel anxious?</Label>
                    <Input type="select" id="" name="" >
                        {gadList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
                <Col md="4" >
                    <Label for="">Are there ever thoughts / voices that you cannot get out of your head?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4" >
                    <Label for="">Have you ever felt like someone was reading your mind or making you think things?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <Label for="">Do you hear voices?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">If you hear voices, specify (what do voices say, length of hearing voices, effect voices have on individual):</Label>
                </Col>
                <Col>
                    <Input type="textarea" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <Label for="">Do you ever feel like someone is following you or out to get you?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">If you feel like someone is out to get you, specify (who was out to get you and reason):</Label>
                </Col>
                <Col>
                    <Input type="textarea" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <Label for="">Do you have a family history of mental health illness?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>SUBSTANCE ABUSE</Label></b>
                </Col>
            </Row>
            <Row>
                <Col>
                    <b><Label>Alcohol & Substance Abuse Screening</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Do you use?(Now/past)</th>
                            <th>How often?(current use)</th>
                            <th>Method/Amount Per Use?</th>
                            <th>Year started?</th>
                            <th>Year Quit?</th>
                        </tr>
                        </thead>
                        <tbody>
                        {substanceList.map((sub) => (
                            <tr>
                                <td><Label>{sub}</Label></td>
                                <td>
                                    <Input type="select"id="" name="" >
                                        {substanceAbuseUse.map((subU) => (
                                            <option value={subU}>{subU}</option>
                                        ))}
                                    </Input>
                                </td>
                                <td>
                                    <Input type="select"id="" name="" >
                                        {substanceAbuseOften.map((subOf) => (
                                            <option value={subOf}>{subOf}</option>
                                        ))}
                                    </Input>
                                </td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                                <td><Input type="text" id="" name=""/></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Treatment History</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Ever received help for substance use (If Yes, specify below if not skip to next question)</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Program/Date Received Services (if known)</th>
                            <th>Type of Treatment</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Input type="text" id="" name=""/></td>
                            <td>
                                <Input type="select"id="" name="" >
                                    {treatList.map((t) => (
                                        <option value={t}>{t}</option>
                                    ))}
                                </Input>
                            </td>
                        </tr>
                        <tr>
                            <td><Input type="text" id="" name=""/></td>
                            <td>
                                <Input type="select"id="" name="" >
                                    {treatList.map((t) => (
                                        <option value={t}>{t}</option>
                                    ))}
                                </Input>
                            </td>
                        </tr>
                        <tr>
                            <td><Input type="text" id="" name=""/></td>
                            <td>
                                <Input type="select"id="" name="" >
                                    {treatList.map((t) => (
                                        <option value={t}>{t}</option>
                                    ))}
                                </Input>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>LEGAL</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Label>Do you currently have any pending legal issues (check all that apply):</Label>
                    <Input type="checkbox" id="" name="" />
                    <Label for="">No Legal Issues</Label>
                </Col>
                <Col md="3">
                    <Input type="checkbox" id="" name="" />
                    <Label for="">Tickets</Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Divorce</Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Child Custody</Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Conservatorship</Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Divorce</Label>
                </Col>
                <Col md="3">
                    <Input type="checkbox" id="" name="" />
                    <Label for="">Probation (specify):</Label>
                    <Input type="text" id="" name="" />

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Parole (specify):</Label>
                    <Input type="text" id="" name="" />
                </Col>
                <Col md="3">
                    <Input type="checkbox" id="" name="" />
                    <Label for="">Arrests (specify):</Label>
                    <Input type="text" id="" name="" />

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Other (specify):</Label>
                    <Input type="text" id="" name="" />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Arrest Screening</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Label>Have you ever been arrested for production or manufacturing of methamphetamines?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3">
                    <Label>Have you ever been arrested for any other drug and/or alcohol related crime?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3">
                    <Label>Have you ever been arrested for a violent crime?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Label>Have you ever been arrested for arson?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3">
                    <Label>Have you ever been arrested for a sex crime?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3">
                    <Label>Are you a registered sex offender?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="3">
                    <Label>Have you ever been arrested for any crime whatsoever?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Arrest History</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Date/Year</th>
                            <th>Criminal Charge</th>
                            <th>Misdemeanor (M)or Felony(F):</th>
                            <th>Where did offense take place (city/state)</th>
                            <th>Time Served</th>
                            <th>Resulted In?</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td>
                                <Input type="select"id="" name="" >
                                    {resultInList.map((r) => (
                                        <option value={r}>{r}</option>
                                    ))}
                                </Input>
                            </td>
                        </tr>
                        <tr>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td>
                                <Input type="select"id="" name="" >
                                    {resultInList.map((r) => (
                                        <option value={r}>{r}</option>
                                    ))}
                                </Input>
                            </td>
                        </tr>
                        <tr>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td>
                                <Input type="select"id="" name="" >
                                    {resultInList.map((r) => (
                                        <option value={r}>{r}</option>
                                    ))}
                                </Input>
                            </td>
                        </tr>
                        <tr>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td><Input type="text" id="" name=""/></td>
                            <td>
                                <Input type="select"id="" name="" >
                                    {resultInList.map((r) => (
                                        <option value={r}>{r}</option>
                                    ))}
                                </Input>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>NEEDS ASSESSMENT</Label></b>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Label>Patient/Family Needs: Review Section One: Bio-Social Assessment to complete.</Label>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Input type="checkbox" id="" name="" />
                    <Label for="">Medical</Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Use of Medical Equipment /Supplies </Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Mental Health</Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Coping Skills </Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Medications</Label><br/>
                </Col>
                <Col md="4">
                    <Input type="checkbox" id="" name="" />
                    <Label for="">Substance Abuse </Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Patient/Family Responsibilities in Patient’s Care</Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Education</Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Vocational Skills</Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Benefits(e.g. Medi-Cal, GR, SSI, etc.)</Label>
                </Col>
                <Col md="3">
                    <Input type="checkbox" id="" name="" />
                    <Label for="">Housing</Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Personal Hygiene </Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Diet/Nutrition/Oral Health</Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Living Skills</Label><br/>

                    <Input type="checkbox" id="" name="" />
                    <Label for="">Community Resources</Label><br/>
                </Col>
            </Row>
            <Row>
                *For each checked needs assessment; there needs to be an objective and plan to complete objective*
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>CASE MANAGERS OBSERVATIONS</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label for="">Grooming & Hygiene:</Label><br/>
                    {cmOb1.map((item) => (
                        <div>
                            <input value={item} type="checkbox" />
                            <span>{item}</span>
                        </div>
                    ))}
                    <Label for="">Eye Contact:</Label><br/>
                    {cmOb2.map((item) => (
                        <div>
                            <input value={item} type="checkbox" />
                            <span>{item}</span>
                        </div>
                    ))}
                    <Label for="">Motor Activity:</Label><br/>
                    {cmOb3.map((item) => (
                        <div>
                            <input value={item} type="checkbox" />
                            <span>{item}</span>
                        </div>
                    ))}
                    <Label for="">Speech:</Label><br/>
                    {cmOb4.map((i) => (
                        <div>
                            <input value={i} type="checkbox" />
                            <span>{i}</span>
                        </div>
                    ))}
                    <Label for="">Interaction Style:</Label><br/>
                    {cmOb5.map((item) => (
                        <div>
                            <input value={item} type="checkbox" />
                            <span>{item}</span>
                        </div>
                    ))}
                </Col>
                <Col md="4">
                    <Label for="">Mood:</Label><br/>
                    {cmOb6.map((item) => (
                        <div>
                            <input value={item} type="checkbox" />
                            <span>{item}</span>
                        </div>
                    ))}

                    <Label for="">Affect:</Label><br/>
                    {cmOb7.map((item) => (
                        <div>
                            <input value={item} type="checkbox" />
                            <span>{item}</span>
                        </div>
                    ))}

                    <Label for="">Associations:</Label><br/>
                    {cmOb8.map((item) => (
                        <div>
                            <input value={item} type="checkbox" />
                            <span>{item}</span>
                        </div>
                    ))}

                    <Label for="">Concentration:</Label><br/>
                    {cmOb9.map((item) => (
                        <div>
                            <input value={item} type="checkbox" />
                            <span>{item}</span>
                        </div>
                    ))}
                </Col>

                <Col md="4">

                    <div>
                        <input value="None Apparent" type="checkbox" />
                        <span>None Apparent</span>
                    </div>

                    <Label for="">Behavioral Disturbances:</Label><br/>
                    {cmOb10.map((item) => (
                        <div>
                            <input value={item} type="checkbox" />
                            <span>{item}</span>
                        </div>
                    ))}

                    <Label for="">Passive:</Label><br/>
                    {cmOb11.map((item) => (
                        <div>
                            <input value={item} type="checkbox" />
                            <span>{item}</span>
                        </div>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <br/><Label>Diagnostic Summary: (Be sure to include assessment for risk of suicidal/homicidal behaviors, significant strengths/weaknesses, observations/descriptions, symptoms/impairments in life functioning, i.e., Work, School, Home, Community, Living Arrangements, etc.)</Label>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Input input type="textarea" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    Mental Health Assessment Completed By:<br/>
                    <Input input type="text" id="" name=""/>
                </Col>
            </Row>
        </div>
    );
};

export default MentalHealthScreen;
