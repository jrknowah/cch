import React, {useState} from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Button,  ModalHeader, ModalBody, ModalFooter, Modal, Form,
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
    const [mhp, setModalMHP] = useState(false);
    const [mhh, setModalMHH] = useState(false);
    const [mhm, setModalMHM] = useState(false);
    const [mhi, setModalMHI] = useState(false);
    const [mht, setModalMHT] = useState(false);
    const [mha, setModalMHA] = useState(false);

    const toggle = () => {
        setModalMHP(!mhp);
    };

    const toggle2 = () => {
        setModalMHH(!mhh);
    };

    const toggle3 = () => {
        setModalMHM(!mhm);
    };

    const toggle4 = () => {
        setModalMHI(!mhi);
    }

    const toggle5 = () => {
        setModalMHT(!mht);
    }

    const toggle6 = () => {
        setModalMHA(!mha);
    }
    // const [ mentalHealthFormData, setMentalHealthFormData] = useState({ 

    //     mentalHealthHistory: "",    
    //     mentalHealthDiagnosis: "",
    //     mentalHealthTreatment: "",
    //     mentalHealthCurrentTreatment: "",
        // mentalHealthProvider: {
        //     mhpCurrentAgency: "",
        //     mhpCurrentWorker: "",
        //     mhpCurrentPhone: "",
        //     mhpCurrentLastApptDate: "",
        //     mhpCurrentNextApptDate: "",
        // },

        // mentalHealthHospitalization: {
        //     mhhLocation: "",
        //     mhhReasons: "",
        //     mhhDate: ""
        // },
        // mentalHealthMedication: {
        //     mhmName: "",
        //     mhmDose: "",
        //     mhmSide: ""
        // },
    //     mentalHealthSymptomAssessment: {
    //         sad: "",
    //         anxious: "",
    //         sleepPattern: "",
    //         energyLevel: "",
    //         difficultConcentrate: "",
    //         thoughtsVoices: "",
    //         readingMind: "",
    //         hearVoices: "",
    //         hearVoicesDetails: "",
    //         feelFollowed: "",
    //         feelFollowedDetails: "",
    //         familyHistory: "",
    //         mentalHealthSummary: ""
    //     },
    //     riskScreening: {
    //         traumaAssessment: [],
    //         traumaIncidents: [],
    //         safetyRiskAssessment: [],
    //         safetyRiskSummary: ""
    //     },
    //     substanceAbuse: {
    //         substanceAbuseUse: [],
    //         substanceAbuseOften: [],
    //         substanceAbuseSummary: ""
    //     },
    //     treatmentHistory: {
    //         substanceAbuseTreatment: [],
    //         substanceAbuseTreatmentSummary: ""
    //     },
    //     legal: {
    //         legalIssues: [],
    //         probation: "",
    //         parole: "",
    //         arrests: "",
    //         other: "",
    //         arrestScreening: {
    //             arrestMeth: "",
    //             arrestDrugAlcohol: "",
    //             arrestViolent: "",
    //             arrestArson: "",
    //             arrestSexCrime: "",
    //             regSexOffender: "",
    //             arrestCrime: "",
    //             arrestHistory: []
    //         },
    //         legalSummary: ""
    //     },
    //     needsAssessment: {
    //         patientFamilyNeeds: [],
    //         needsSummary: ""
    //     },
    //     caseManagerObservations: {
    //         groomingHygiene: "",
    //         moodAffect: "",
    //         speech: "",
    //         thoughtContent: "",
    //         thoughtProcess: "",
    //         cognition: "",
    //         insightJudgement: "",
    //         behavior: "",
    //         socialization: "",
    //         environment: "",
    //         caseManagerSummary: ""
    //     }
    // });
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
                    <Input type="select" id="mentalHealthHistory" name="mentalHealthHistory" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="7" >
                    <Label for="">If YES, select below:</Label>
                    <FormGroup>
                        <Select
                            closeMenuOnSelect={false}
                            isMulti
                            options={mhList}
                            id="mentalHealthDiagnosis" 
                            name="mentalHealthDiagnosis"
                        />
                    </FormGroup>
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
                    <Input type="select" id="mentalHealthTreatment" name="mentalHealthTreatment" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="7" >
                    <Label for="clientEmployed">Currently utilizing mental health services?</Label>
                    <Input type="select" id="mentalHealthCurrentTreatment" name="mentalHealthCurrentTreatment" >
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
                title="Current Mental Health Provider"  >   
                <Button color="primary" size="sm" onClick={toggle.bind(null)}>Add Provider</Button>
                    <Modal isOpen={mhp} toggle={toggle.bind(null)}>
                        <ModalHeader toggle={toggle.bind(null)}>Add Mental Health Provider</ModalHeader>
                        <ModalBody>
                            <Form>
                                <Row>
                                <Col md="6">
                                    <FormGroup>
                                    <Label>Agency</Label>
                                    <Input type="text" id="mhpCurrentAgency"/>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                    <Label>MH Worler</Label>
                                    <Input type="text" id="mhpCurrentWorker" />
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md="6">
                                    <FormGroup>
                                    <Label>Phone</Label>
                                    <Input type="text" id="mhpCurrentPhone"/>   
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                    <Label>Date of Last Appointment</Label>
                                    <Input type="date" id="mhpCurrentLastApptDate" />
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md="6">
                                    <FormGroup>
                                    <Label>Date of Next Appointment</Label>
                                    <Input type="date" id="mhpCurrentNextApptDate" />
                                    </FormGroup>
                                </Col>
                                </Row>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle.bind(null)}>
                            Save
                            </Button>
                            <Button color="danger" onClick={toggle.bind(null)}>
                            Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                            
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
                {/*  Hospitalizations                                              */}
                {/*--------------------------------------------------------------------------------*/}
        
                <ComponentCard title="List Mental Health Hospitalizations">
                <Button color="primary" size="sm" onClick={toggle2.bind(null)}>Add Hospitalization</Button>   
                <Modal isOpen={mhh} toggle={toggle2.bind(null)}>
                    <ModalHeader toggle={toggle2.bind(null)}>Add Hospitalization</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Label>	Location of Hospitalization</Label>
                                <Input type="text" id="mhhLocation"/>   
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                <Label>Reasons for Hospitalization</Label>
                                <Input type="text" id="mhhReasons" />
                                </FormGroup>
                            </Col>
                       
                            <Col md="6">
                                <FormGroup>
                                <Label>Date of Hospitalization</Label>
                                <Input type="date" id="mhhDate" />
                                </FormGroup>
                            </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle2.bind(null)}>
                        Save
                        </Button>
                        <Button color="danger" onClick={toggle2.bind(null)}>
                        Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
                <Table responsive>
                    <thead>
                    <tr>
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
        
                <ComponentCard title="List Psychiatric Medications">
                <Button color="primary" size="sm" onClick={toggle3.bind(null)}>Add Medication</Button>   
                <Modal isOpen={mhm} toggle={toggle3.bind(null)}>
                    <ModalHeader toggle={toggle3.bind(null)}>Add Psychiatric Medications</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Label>	List of Medication</Label>
                                <Input type="text" id="mhmName"/>   
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                <Label>Dose/Frequency</Label>
                                <Input type="text" id="mhmDose" />
                                </FormGroup>
                            </Col>
                       
                            <Col md="6">
                                <FormGroup>
                                <Label>Effectiveness/Side Effects</Label>
                                <Input type="text" id="mhmSide" />
                                </FormGroup>
                            </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle3.bind(null)}>
                        Save
                        </Button>
                        <Button color="danger" onClick={toggle3.bind(null)}>
                        Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
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
                    <Input type="select" id="mhSad" name="mhSad" >
                        {gadList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">How often do you feel anxious?</Label>
                    <Input type="select" id="mhAnxious" name="mhAnxious" >
                        {gadList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">Describe your sleep pattern:</Label>
                    <Input type="select" id="mhSleepPattern" name="mhAnxious" >
                        {sleepPatternList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
                <Col md="3" >
                    <Label for="">Describe your energy level:</Label>
                    <Input type="select" id="mhEnergyLevel" name="mhEnergyLevel" >
                        {energyLevelList.map((g) => (
                            <option value={g}>{g}</option>
                        ))}
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="6" >
                    <Label for="">Do you find it difficult to concentrate?</Label>
                    <Input type="select" id="mhConcentrate" name="mhConcentrate" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="6" >
                    <Label for="">Are there ever thoughts / voices that you cannot get out of your head?</Label>
                    <Input type="select" id="mhThoughts" name="mhThoughts" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="6" >
                    <Label for="">Ever felt like someone was reading your mind or making you think things?</Label>
                    <Input type="select" id="mhMindRead" name="mhMindRead" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="6" >
                    <Label for="">Do you hear voices?</Label>
                    <Input type="select" id="mhVoices" name="mhVoices" >
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
                    <Input type="textarea" id="mhVoicesSay" name="mhVoicesSay"/>
                </Col>
            </Row>
            <Row>
                <Col md="6" >
                    <Label for="">Do you ever feel like someone is following you or out to get you?</Label>
                    
                </Col>
                <Col md="6" >
                    <Input type="select" id="mhFollowing" name="mhFollowing" >
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
                    <Input type="textarea" id="mhSomeone" name="mhSomeone"/>
                </Col>
            </Row>
            <Row>
                <Col md="6" >
                    <Label for="">Do you have a family history of mental health illness?</Label>
                    <Input type="select" id="mhFamHistory" name="mhFamHistory" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="12" >
                    <Label for="">Mental Health Screening Summary Notes</Label>
                    <Input type="textarea" id="mhSummary" name="mhSummary"/>
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
                                id="mhAbuse"
                                name="mhAbuse"
                            />
                        </FormGroup>
                    </Label>
                </Col>
            </Row>
            <Row> 
                {/*--------------------------------------------------------------------------------*/}
                {/*  Abuse History Table                                                  */}
                {/*--------------------------------------------------------------------------------*/}
        
                <ComponentCard title="List Reported Incidents" >
                <Button color="primary" size="sm" onClick={toggle4.bind(null)}>Add Incident</Button>   
                <Modal isOpen={mhi} toggle={toggle4.bind(null)}>
                    <ModalHeader toggle={toggle4.bind(null)}>Add Psychiatric Medications</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Label>Type of Incident</Label>
                                <Input type="text" id="mhiType"/>   
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                <Label>	Date Reported</Label>
                                <Input type="date" id="mhiDate" />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row> 
                       
                            <Col md="6">
                                <FormGroup>
                                <Label>Filed By</Label>
                                <Input type="text" id="mhiFiled" />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                <Label>Status</Label>
                                <Input type="text" id="mhiStatus" />
                                </FormGroup>
                            </Col>  
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle4.bind(null)}>
                        Save
                        </Button>
                        <Button color="danger" onClick={toggle4.bind(null)}>
                        Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
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
                                id="clientRisk"
                                name="clientRisk"
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
                    <Input type="select" id="mhSelfHarm" name="mhSelfHarm" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                    <Label>If yes, when was the last occurrence?</Label>
                    <Input type="text" id="mhSelfHarmOccurrence" name="mhSelfHarmOccurrence" />
                </Col>
                <Col md="4" >
                    <Label>Past Suicide Attempts</Label>
                    <Input type="select" id="mhSuicide" name="mhSuicide" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                    <Label>If yes, when was the last occurrence?</Label>
                    <Input type="text" id="mhSuicideLast" name="mhSuicideLast" />
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="12" >
                    <Label for="">Risk Screening Summary Notes</Label>
                    <Input type="textarea" id="mhRiskSummary" name="mhRiskSummary"/>
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
                                        <Input type="select"id="substanceAbuseUse" name="substanceAbuseUse" >
                                            {substanceAbuseUse.map((subU) => (
                                                <option value={subU}>{subU}</option>
                                            ))}
                                        </Input>
                                    </td>
                                    <td>
                                        <Input type="select"id="substanceAbuseOften" name="substanceAbuseOften" >
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
                    <Input type="select" id="mhSubAbuseHelp" name="mhSubAbuseHelp" >
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
        
                <ComponentCard title="Program/Treatment History" >
                <Button color="primary" size="sm" onClick={toggle5.bind(null)}>Add Program/Treatment</Button>   
                <Modal isOpen={mht} toggle={toggle5.bind(null)}>
                    <ModalHeader toggle={toggle5.bind(null)}>Program/Treatment History</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Label>Program</Label>
                                <Input type="text" id="mhiType"/>   
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                <Label>	Date Received</Label>
                                <Input type="date" id="mhiDate" />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row> 
                       
                            <Col md="6">
                                <FormGroup>
                                <Label>Type of Treatment</Label>
                                <Input type="text" id="mhiFiled" />
                                </FormGroup>
                            </Col> 
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle5.bind(null)}>
                        Save
                        </Button>
                        <Button color="danger" onClick={toggle5.bind(null)}>
                        Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
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
        
                <ComponentCard title="Arrest History"  >
                <Button color="primary" size="sm" onClick={toggle6.bind(null)}>Add Arrest</Button>   
                <Modal isOpen={mha} toggle={toggle6.bind(null)}>
                    <ModalHeader toggle={toggle6.bind(null)}>Add Arrest</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Label>Date</Label>
                                <Input type="date" id="mhaDate"/>   
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                <Label>Charge</Label>
                                <Input type="text" id="mhaCharge" />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row> 
                            <Col md="6">
                                <FormGroup>
                                <Label>Misdemeanor(M) or Felony(F)</Label>
                                <Input type="select" id="mhaMF">
                                    <option> </option>
                                    <option>F</option>
                                    <option>M</option>
                                </Input>
                                </FormGroup>
                            </Col>  
                            <Col md="6">
                                <FormGroup>
                                <Label>Location of Offense(City/State)</Label>
                                <Input type="text" id="mhaLoc" />
                                </FormGroup>
                            </Col> 
                            </Row>
                            <Row> 
                            <Col md="6">
                                <FormGroup>
                                <Label>Time Served</Label>
                                <Input type="text" id="mhaTime"/>
                                </FormGroup>
                            </Col>  
                            <Col md="6">
                                <FormGroup>
                                <Label>Result In?</Label>
                                <Input type="text" id="mhaResult" />
                                </FormGroup>
                            </Col> 
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle6.bind(null)}>
                        Save
                        </Button>
                        <Button color="danger" onClick={toggle6.bind(null)}>
                        Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
                
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
