import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, Table, Button
} from 'reactstrap';
import Select from 'react-select';
import {
    // allergyList,
    // medCond,
    medCond2, medCond3,
    medCond4, medCond5, medicationData
} from "../../../../data/arrayList";
import ComponentCard from "../../../ComponentCard";



const MedScreening = () => {
    // const [clientMeds, setClientMeds] = useState(false);
        
    // const toggleMeds = () => {
    //     setClientMeds(!clientMeds);
    // };

    return (

        <div className="form-body">
            {/* <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPCPName">Physician Name</Label>
                        <Input type="text" id="clientPCPName" name="clientPCPName" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPCPFacility">Facility</Label>
                        <Input type="tel" id="clientPCPFacility" name="clientPCPFacility" />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPCPPhone">Phone Number:</Label>
                        <Input type="tel" id="clientPCPPhone" name="clientPCPPhone" />
                    </FormGroup>
                </Col>                
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPCPLastAppt">Last Appointment</Label>
                        <Input input type="datetime-local" id="clientPCPLastAppt" name="clientPCPLastAppt" placeholder="Date & Time"/>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientPCPNextAppt">Next Appointment</Label>
                        <Input input type="datetime-local" id="clientPCPNextAppt" name="clientPCPNextAppt" placeholder="Date & Time"/>
                    </FormGroup>
                </Col>
            </Row> 
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientApptTransport">Transportation to you next appointment?</Label>
                        <Input type="select" id="clientApptTransport" name="clie<ntApptTransport" >
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientApptTransportMeans">Specify means of transporation:</Label>
                        <Input type="text" id="clientApptTransportMeans" name="clientApptTransportMeans" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientLikePCP">Do you like your current Physician?</Label>
                        <Input type="select" id="clientLikePCP" name="clientLikePCP" >
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientDisikePCP">If no, would you like to change your PCP?</Label>
                        <Input type="select" id="clientDisikePCP" name="clientDisikePCP" >
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <Label for="clientSpecialists">Do you see any specialists for medical care?</Label>
                        <Input type="select" id="clientSpecialists" name="clientSpecialists" >
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                </Col>                
            </Row>
            <Row>
                <Col md="12">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>PCP/Specialty Type</th>
                            <th>Doctor&apos;s Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="PCP/Specialty Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Address"/></td>
                            <td><Input input type="tel" id="clientPayee" name="clientPayee" placeholder="Phone Number"/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="PCP/Specialty Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Address"/></td>
                            <td><Input input type="tel" id="clientPayee" name="clientPayee" placeholder="Phone Number"/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="PCP/Specialty Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Address"/></td>
                            <td><Input input type="tel" id="clientPayee" name="clientPayee" placeholder="Phone Number"/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="PCP/Specialty Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Address"/></td>
                            <td><Input input type="tel" id="clientPayee" name="clientPayee" placeholder="Phone Number"/></td>
                        </tr>
                        <tr>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="PCP/Specialty Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Appointment Type"/></td>
                            <td><Input input type="text" id="clientPayee" name="clientPayee" placeholder="Address"/></td>
                            <td><Input input type="tel" id="clientPayee" name="clientPayee" placeholder="Phone Number"/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>*/}
            <Row className="text-center">
                <Col md="6">
                    <Label for="">Do you need any of the following devices/assistance?</Label>
                    <FormGroup>
                        <Select id="clientMedConditions2" name="clientMedConditions2"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond2}
                        />
                    </FormGroup>                   
                </Col>
                <Col md="6">
                    <Label for="">Have you ever been diagnosis with following?</Label>
                    <FormGroup>
                        <Select id="clientHepAB" name="clientHepAB"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond3}
                        />
                    </FormGroup>  
                </Col>   
            </Row>
            <Row>
                <Col md="6">
                    <Label for="">Are you at risk for alcohol withdrawal or seizures?</Label>
                    <Input type="select" id="clientAlcoholRisk" name="clientAlcoholRisk" >
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="6">
                    <Label for="">Were you getting medications in the hospital with alcohol withdrawal?</Label>
                    <Input type="select" id="clientAlcoholRiskMed" name="clientAlcoholRiskMed" >
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>             
            </Row>
            <Row>
            </Row>
            <hr/>
            <Row>
                <Col className="text-center">
                    <b><Label>Tuberculosis Clearance</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Label for="">Your last TB skin test (PPD) or chest x-ray:</Label><br/>
                    <Input type="date" id="clientLastTBTest" name="clientLastTBTest" />
                </Col>
                <Col md="6">
                    <Label for="">Results:</Label><br/>
                    <Input type="select" id="clientLastTBTestResults" name="clientLastTBTestResults" >
                        <option> </option>
                        <option>Positive</option>
                        <option>Negative</option>
                        <option>Unknown</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Label for="">If positive, did you receive treatment:</Label><br/>
                    <Input type="select" id="clientLastTBTestResultsTreatment" name="clientLastTBTestResultsTreatment" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="6">
                    <Label for="">Outcome of Treatment:</Label><br/>
                    <Input type="text" id="clientLastTBTestResultsTreatmentOutcome" name="clientLastTBTestResultsTreatmentOutcome" />
                </Col>                

            </Row>
            <Row>
                <Col md="6">
                    <Label for="">Do you have a cough lasting longer than 3 wks?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="6">
                    <Label for="">Are you coughing up blood?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>                
            </Row>
            <Row>
                <Col md="4">
                    <Label for="">Have you had new severe night sweats in the last month?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label for="">Have you had weight loss without reason in the last couple months?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label for="">Have you had high fevers without reason in the last few weeks?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="text-center">
                    <b><Label>MEDICATION</Label></b>
                </Col>
            </Row>
            <Row> 
                {/*--------------------------------------------------------------------------------*/}
                {/* Prescription Medication Table                                                  */}
                {/*--------------------------------------------------------------------------------*/}
        
                <ComponentCard>
                    {/*<Button color="primary" size="sm" onClick={toggleMeds}>Add Medication</Button>
                     <Modal isOpen={medAppt} toggle={toggleMeds.bind(null)}>
                        <ModalHeader toggle={toggleMeds.bind(null)}>Add Appointmet</ModalHeader>
                        <ModalBody>
                            <Form>
                                <Row>
                                <Col md="6">
                                    <FormGroup>
                                    <Label>Date</Label>
                                    <Input type="date" id="medApptDate" value={medApptDate} onChange={(e) => setMedApptDate(e.target.value)}/>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                    <Label>Location</Label>
                                    <Input type="text" id="medApptLoc" value={medApptLoc} onChange={(e) => setMedApptLoc(e.target.value)} />
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                    <Label>Type</Label>
                                    <Input type="text" id="medApptType" value={medApptType} onChange={(e) => setMedApptType(e.target.value)}/>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                    <Label>Provider</Label>
                                    <Input type="text" id="medApptProv" value={medApptProv} onChange={(e) => setMedApptProv(e.target.value)}/>   
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Transportation</Label>
                                        <Input type="select" id="medApptTranport" value={medApptTranport} onChange={(e) => setMedApptTranport(e.target.value)}>
                                            <option value=""></option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                </Row>

                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={handleSaveAppointment}>
                            Save 
                            </Button>
                        </ModalFooter>
                    </Modal> */}
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Medication</th>
                        <th>Dosage</th>
                        <th>Side Effects</th>
                        <th>Currenly Taking?</th>
                    </tr>
                    </thead>
                    <tbody>
                    {medicationData.map((item) => (
                        <tr key={item.id}>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td>{item[2]}</td>
                            <td>{item[3]}</td>
                        </tr>
                        ))}
                
                    </tbody>
                </Table>
                </ComponentCard>  
            </Row>
            <hr/>
            <Row>
                <Col md="" className="text-center">
                    <b><Label>SURGICAL / HOSPITALIZATION HISTORY</Label><br/></b>
                </Col>
            </Row>
            <Row> 
                {/*--------------------------------------------------------------------------------*/}
                {/* Hospitalizations Table                                                  */}
                {/*--------------------------------------------------------------------------------*/}
        
                <ComponentCard
                subtitle={
                    <p>
                    <Button color="primary" size="sm">Add Surgery/Hospitalization</Button>
                    </p>
                }
                >
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Type of Surgery</th>
                        <th>Date</th>
                        <th>Previous Hospitalizations</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {medicationData.map((item) => (
                        <tr key={item.id}>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td>{item[2]}</td>
                            <td>{item[3]}</td>
                        </tr>
                        ))}
                
                    </tbody>
                </Table>
                </ComponentCard>  
            </Row>
            
            <hr />
            <Row>
                <Col md="" className="text-center">
                    <b><Label>WOMAN&apos;S HEALTH HISTORY</Label><br/></b>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Are you currently on birth control?</Label><br/>
                    <Input type="select" id="" name="" >
                        <option> </option>
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>Name of Birth Control:</Label><br/>
                    <Input type="text" id="" name="" />
                </Col>
                <Col md="4">
                    <Label>Date of last dose:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Location Receiving Birth Control</Label><br/>
                    <Input type="Text" id="" name="" />
                </Col>
                <Col md="4">
                    <Label>Total # of Pregnancies?</Label><br/>
                    <Input type="text" id="" name=""/>
                </Col>
                <Col md="4">
                    <Label>Date of last pregnancy:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Date of Last Pap smear:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
                <Col md="4">
                    <Label>Date of last Mammogram:</Label><br/>
                    <Input type="date" id="" name="" />
                </Col>
            </Row>
            
            {/* Sexual History */}
            <hr />
            <Row className="text-center">
                <b><Label for="clientContactInfo">SEXUAL HISTORY</Label></b>
            </Row>
            <Row>
                <Col md="4">
                    <Label>How many sexual partners in the past year?</Label><br/>
                    <Input type="select" id="clientSexLastYear" name="clientSexLastYear" >
                        <option> </option>
                        <option>None</option>
                        <option>One</option>
                        <option>2-5</option>
                        <option>6-10</option>
                        <option>11 or more</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>How many sexual partners in the past month?</Label><br/>
                    <Input type="select" id="clientSexLastMonth" name="clientSexLastMonth" >
                        <option> </option>
                        <option>None</option>
                        <option>One</option>
                        <option>2-5</option>
                        <option>6-10</option>
                        <option>11 or more</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>When was the last time you had sex?</Label><br/>
                    <Input type="date" id="clientLastSexDate" name="clientLastSexDate"/>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label>Have you had sexual relations with:</Label><br/>
                    <Input type="select" id="clientSexRelations" name="clientSexRelations" >
                        <option> </option>
                        <option>Men</option>
                        <option>Women</option>
                        <option>Both</option>
                        <option>N/A-None</option>
                    </Input>
                </Col>
                <Col md="4">
                    <Label>Risk factors(Check all that applies)</Label><br/>
                    <FormGroup>
                        <Select id="clientRiskFactors" name="clientRiskFactors"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond5}
                        />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <Label>Date last tested for a STD/STI?</Label><br/>
                    <Input type="date" id="clientSTDDate" name="clientSTDDate"/>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Label for="">Ever had a STD/STI?(Check all that apply):</Label><br/>
                    <FormGroup>
                        <Select id="clientSTDStatus" name="clientSTDStatus"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond4}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Button color="primary" size="lg">Save</Button>
        </div>
    );
};

export default MedScreening;