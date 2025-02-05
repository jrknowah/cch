import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Button,
    // InputGroup, InputGroupText, Form, 
    Table
} from 'reactstrap';
import Select from 'react-select';
import {
    cmOb1, cmOb2, cmOb3, cmOb4, cmOb5,cmOb6,cmOb7,cmOb8,cmOb9,cmOb10,cmOb11,cmObNone,legalList,
    energyLevelList,
    gadList,
    mhList,
    sleepPatternList, substanceAbuseOften, substanceAbuseUse, substanceList, traumaList,needsCol1, medicationData,
    riskList
} from "../../../../data/arrayList";
import ComponentCard from "../../../ComponentCard";


const MentalHealth = () => {

    return (

        <div className="form-body">
            <Row>
                <Col className="text-center">
                    <b><Label>Mental Health History</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="5" >
                    <Label for="">Ever been diagnosis with a mental illness?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="7" >
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
                <Col md="5" >
                    <Label for="">Ever utilized mental health services?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="7" >
                    <Label for="clientEmployed">Currently utilizing mental health services?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row> 
                {/*--------------------------------------------------------------------------------*/}
                {/*  Most current Mental Health Provider Table                                                  */}
                {/*--------------------------------------------------------------------------------*/}
        
                <ComponentCard
                title="Current Mental Health Provider"
                subtitle={
                    <Button color="primary" size="sm">Add Provider</Button>
                }
                >
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Agency</th>
                        <th>MH Worker</th>
                        <th>Phone</th>
                        <th>Date of Last Appointment</th>
                        <th>Date of Next Appointment</th>
                    </tr>
                    </thead>
                    <tbody>
                    {medicationData.map((item) => (
                        <tr key={item.id}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        ))}          
                    </tbody>
                </Table>
                </ComponentCard>  
            </Row>
            
            <Row> 
                {/*--------------------------------------------------------------------------------*/}
                {/*  Most current Mental Health Provider Table                                                  */}
                {/*--------------------------------------------------------------------------------*/}
        
                <ComponentCard
                title="List Mental Mental Health Hospitalizations"
                subtitle={
                    <Button color="primary" size="sm">Add Hospitalization</Button>
                }
                >
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Date Hospitalized</th>
                        <th>Location of Hospitalization</th>
                        <th>Reasons for Hospitalization</th>
                        <th>Date Hospitalized</th>
                    </tr>
                    </thead>
                    <tbody>
                    {medicationData.map((item) => (
                        <tr key={item.id}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        ))}          
                    </tbody>
                </Table>
                </ComponentCard>  
            </Row>
            <Row> 
                {/*--------------------------------------------------------------------------------*/}
                {/*  Psychiatric Medication Table                                                  */}
                {/*--------------------------------------------------------------------------------*/}
        
                <ComponentCard
                title="List Psychiatric Medications"
                subtitle={
                    <Button color="primary" size="sm">Add Medication</Button>
                }
                >
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Medication</th>
                        <th>Dose / Frequency</th>
                        <th>Effectiveness/Side Effects</th>
                    </tr>
                    </thead>
                    <tbody>
                    {medicationData.map((item) => (
                        <tr key={item.id}>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        ))}          
                    </tbody>
                </Table>
                </ComponentCard>  
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Symptom Assessment</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <Label for="">How often do you feel sad?</Label>
                    <Input type="select" id="" name="" >
                        {gadList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">How often do you feel anxious?</Label>
                    <Input type="select" id="" name="" >
                        {gadList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">Describe your sleep pattern:</Label>
                    <Input type="select" id="" name="" >
                        {sleepPatternList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">Describe your energy level:</Label>
                    <Input type="select" id="" name="" >
                        {energyLevelList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="6" >
                    <Label for="">Do you find it difficult to concentrate?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="6" >
                    <Label for="">Are there ever thoughts / voices that you cannot get out of your head?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="6" >
                    <Label for="">Ever felt like someone was reading your mind or making you think things?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="6" >
                    <Label for="">Do you hear voices?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="6" >
                    <Label for="">If you hear voices, specify (what do voices say, length of hearing voices, effect voices have on individual):</Label>
                </Col>
                <Col>
                    <Input type="textarea" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="6" >
                    <Label for="">Do you ever feel like someone is following you or out to get you?</Label>
                    
                </Col>
                <Col md="6" >
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="3" >
                    <Label for="">If you feel like someone is out to get you, specify (who was out to get you and reason):</Label>
                </Col>
                <Col>
                    <Input type="textarea" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col md="6" >
                    <Label for="">Do you have a family history of mental health illness?</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="12" >
                    <Label for="">Mental Health Screening Summary Notes</Label>
                    <Input type="textarea" id="" name=""/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>RISK SCREENING</Label></b>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Trauma Assessment</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="8" >
                    <Label for="">Does patient report any history of abuse (Select all that apply)
                        <FormGroup>
                            <Select
                                closeMenuOnSelect={false}
                                isMulti
                                options={traumaList}
                            />
                        </FormGroup>
                    </Label>
                </Col>
            </Row>
            <Row> 
                {/*--------------------------------------------------------------------------------*/}
                {/*  Abuse History Table                                                  */}
                {/*--------------------------------------------------------------------------------*/}
        
                <ComponentCard
                title="List Reported Incidents"
                subtitle={
                    <Button color="primary" size="sm">Add Incident</Button>
                }
                >
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Type of Incident</th>
                        <th>Date Reported</th>
                        <th>Filed By</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {medicationData.map((item) => (
                        <tr key={item.id}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        ))}          
                    </tbody>
                </Table>
                </ComponentCard>  
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Safety Risk Assessment</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="8" >
                    <Label for="">Does client currently report any “DANGER TO SELF” and/or “DANGER TO OTHERS” (check all that apply):
                        <FormGroup>
                            <Select
                                closeMenuOnSelect={false}
                                isMulti
                                options={riskList}
                            />
                        </FormGroup>
                    </Label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label>Does client currently report any “DANGER TO SELF” and/or “DANGER TO OTHERS” (check all that apply):</Label>
                </Col>
            </Row>

            <Row>
                <div>
                    Special Instructions regarding “SUICIDE ASSESSMENT”:<br/>
                    Question 1:<br/>
                    •If the individual express thoughts about harming self/others please answer Part A.
                    Question 1, Section A:<br/>
                    •If individual does not have a plan, skip to next section and notify supervisor/administration after interview.<br/>
                    •If individual answers “YES” please complete Section Band notify supervisor/administration immediately to assess if PET Team or 911 needs to be contacted.<br/>
                    Question 1, Section B:<br/>
                    •If individual answers “YES”, please determine if PETTeam or 911 needs to be contacted.<br/>
                    Resources for a psychiatrist assessment team:<br/>
                    ACCESS (PET Team)<br/>
                    1-800-854-7771<br/>
                    Private PET Teams (Individual needs to be Medi-Medi)<br/>
                    Pacific Hospital of Long Beach-------800-633-7888<br/>
                    St. Francis Hospital---------------------310-900-8256<br/>
                    Pacifica of the Valley-------------------800-522-1154<br/>
                    L.A. Metropolitan----------------------800-787-4357<br/>
                    Mission Community -------------------800-608-4624<br/>
                </div>
            </Row>
            <Row>
                <Col className="text-center">
                    <b><Label>Safety Risk Assessment</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <Label>Past thoughts of harm to self or others</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                    <Label>If yes, when was the last occurrence?</Label>
                    <Input type="text" id="" name="" />
                </Col>
                <Col md="4" >
                    <Label>Past Suicide Attempts</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                    <Label>If yes, when was the last occurrence?</Label>
                    <Input type="text" id="" name="" />
                </Col>
            </Row>
            <Row>
                <Col md="4" >
                    <Label for="">Describe:</Label>
                    <Input type="textarea" id="" name="" />
                </Col>
                <Col md="4" >
                    <Label for="">Describe:</Label>
                    <Input type="textarea" id="" name="" />
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="12" >
                    <Label for="">Risk Screening Summary Notes</Label>
                    <Input type="textarea" id="" name=""/>
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
                    <Label>Ever received help for substance use (If Yes, specify below if not skip to nextquestion)</Label>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row> 
                {/*--------------------------------------------------------------------------------*/}
                {/*  Treatment History Table                                                  */}
                {/*--------------------------------------------------------------------------------*/}
        
                <ComponentCard
                title="Program/Treatment History"
                subtitle={
                    <Button color="primary" size="sm">Add Program</Button>
                }
                >
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Program</th>
                        <th>Date Received</th>
                        <th>Type of Treatment</th>
                    </tr>
                    </thead>
                    <tbody>
                    {medicationData.map((item) => (
                        <tr key={item.id}>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        ))}          
                    </tbody>
                </Table>
                </ComponentCard>  
            </Row>
            <Row className="text-center">
                <Col md="12" >
                    <Label for="">Substance Abuse Summary Notes</Label>
                    <Input type="textarea" id="" name=""/>
                </Col>
            </Row>


            <hr/>
            <Row>
                <Col className="text-center">
                    <b><Label>LEGAL</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="" className="text-center">
                    <FormGroup>
                        <Label for="">Do you currently have any pending legal issues (Select all that apply)</Label>
                        <Select id="clientLegalIssues" name="clientLegalIssues"
                            closeMenuOnSelect={false}
                            isMulti
                            options={legalList}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="">Probation</Label>
                        <Input type="text" id="clientLegalProbation" name="clientLegalProbation" />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="">Parole</Label>
                        <Input type="text" id="clientLegalParole" name="clientLegalParole" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="">Arrests</Label>
                        <Input type="text" id="clientLegalArrests" name="clientLegalArrests" />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="">Other</Label>
                        <Input type="text" id="clientLegalOther" name="clientLegalOther" />
                    </FormGroup>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="text-center">
                    <b><Label>Arrest Screening</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Have you ever been arrested for production or manufacturing of methamphetamines?</Label>
                    <Input type="select" id="arrestMeth" name="arrestMeth" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>Have you ever been arrested for any other drug and/or alcohol related crime?</Label>
                    <Input type="select" id="arrestDrugAlcohol" name="arrestDrugAlcohol" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>Have you ever been arrested for a violent crime?</Label>
                    <Input type="select" id="arrestViolent" name="arrestViolent" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Have you ever been arrested for arson?</Label>
                    <Input type="select" id="arrestArson" name="arrestArson" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>Have you ever been arrested for a sex crime?</Label>
                    <Input type="select" id="arrestSexCrime" name="arrestSexCrime" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>Are you a registered sex offender?</Label>
                    <Input type="select" id="regSexOffender" name="regSexOffender" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Have you ever been arrested for any crime whatsoever?</Label>
                    <Input type="select" id="arrestCrime" name="arrestCrime" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row> 
                {/*--------------------------------------------------------------------------------*/}
                {/*  Arrest History Table                                                  */}
                {/*--------------------------------------------------------------------------------*/}
        
                <ComponentCard
                title="Arrest History"
                subtitle={
                    <Button color="primary" size="sm">Add Arrest</Button>
                }
                >
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Charge</th>
                        <th>Misdemeanor(M) or Felony(F)</th>
                        <th>Where did offense take place (city/state)</th>
                        <th>Time Served</th>
                        <th>Resulted In?</th>
                    </tr>
                    </thead>
                    <tbody>
                    {medicationData.map((item) => (
                        <tr key={item.id}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        ))}          
                    </tbody>
                </Table>
                </ComponentCard>  
            </Row>
            <Row className="text-center">
                <Col md="12" >
                    <Label for="">Legal Summary Notes</Label>
                    <Input type="textarea" id="" name=""/>
                </Col>
            </Row>

            <hr/>
            <Row>
                <Col className="text-center">
                    <b><Label>NEEDS ASSESSMENT</Label></b>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Label></Label>
                </Col>
            </Row>
            <Row>
                <Col md="" className="text-center">
                    <FormGroup>
                        <Label for="">Patient/Family Needs:</Label>
                        <Select id="clientPatFamNeeds" name="clientPatFamNeeds"
                            closeMenuOnSelect={false}
                            isMulti
                            options={needsCol1}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="12" >
                    <Label for="">Needs Assessment Summary</Label>
                    <Input type="textarea" id="" name=""/>
                </Col>
            </Row>

            <hr/>
            <Row>
                <Col className="text-center">
                    <b><Label>CASE MANAGERS OBSERVATIONS</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Grooming & Hygiene:</Label>
                        <Select id="cmOb1" name="cmOb1"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb1}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Eye Contact:</Label>
                        <Select id="cmOb2" name="cmOb2"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb2}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Motor Activity:</Label>
                        <Select id="cmOb3" name="cmOb3"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb3}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Speech:</Label>
                        <Select id="cmOb4" name="cmOb4"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb4}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Interaction Style:</Label>
                        <Select id="cmOb5" name="cmOb5"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb5}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Mood:</Label>
                        <Select id="cmOb6" name="cmOb6"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb6}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Affect:</Label>
                        <Select id="cmOb7" name="cmOb7"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb7}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Associations:</Label>
                        <Select id="cmOb8" name="cmOb8"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb8}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Concentration:</Label>
                        <Select id="cmOb9" name="cmOb9"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb9}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Behavioral Disturbances:</Label>
                        <Select id="cmOb10" name="cmOb10"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb10}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">Passive:</Label>
                        <Select id="cmOb11" name="cmOb11"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmOb11}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="">None Apparent</Label>
                        <Select id="cmObNone" name="cmObNone"
                            closeMenuOnSelect={false}
                            isMulti
                            options={cmObNone}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <br/><Label>Summary and Any Other Observations</Label>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Input input type="textarea" id="" name=""/>
                </Col>
            </Row>
        </div>
    );
};

export default MentalHealth;
