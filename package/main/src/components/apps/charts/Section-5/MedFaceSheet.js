import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {
    Row,
    Col, FormGroup, Label, Input, Table, Modal, ModalBody, ModalFooter, ModalHeader, Form,
    Button
} from 'reactstrap';
import Select from "react-select"
import {
    allergyList, medCond
} from "../../../../data/arrayList";
import ComponentCard from "../../../ComponentCard";

const MedFaceSheet = ({clientID}) => {
        const [medAppt, setMedAppt] = useState(false);
    
        const toggle = () => {
            setMedAppt(!medAppt);
        };
        // ✅ Medical Data States
        const [clientMedConditions, setClientMedConditions] = useState([]);
        const [clientAddMedHistory, setClientAddMedHistory] = useState("");
        const [clientMedPertinent, setClientMedPertinent] = useState("");
        const [clientPreviousLab, setClientPreviousLab] = useState("");
        const [clientAllergies, setClientAllergies] = useState([]);


        // ✅ State New Appointment
        const [medAppointments, setMedAppointments] = useState([]);
        const [medApptDate, setMedApptDate] = useState("");
        const [medApptLoc, setMedApptLoc] = useState("");
        const [medApptType, setMedApptType] = useState("");
        const [medApptProv, setMedApptProv] = useState("");
        const [medApptTranport, setMedApptTranport] = useState("");
    
        // ✅ Fetch Client Appointments from Backend
        useEffect(() => {
            axios.get(`http://localhost:3000/getMedAppointments/${clientID}`)
                .then(response => {
                    setMedAppointments(response.data);
                })
                .catch(error => {
                    console.error("❌ Error fetching appointments:", error);
                });
         }, [clientID]);
        
        // ✅ Save Medical Info
        const handleSaveMedicalInfo = async () => {
            const medicalData = {
                clientID,
                clientMedConditions: clientMedConditions.map(item => item.value),
                clientAddMedHistory,
                clientMedPertinent,
                clientPreviousLab,
                clientAllergies: clientAllergies.map(item => item.value)
            };

            try {
                await axios.post("http://localhost:3000/saveMedInfo", medicalData);
                alert("✅ Medical info saved successfully!");
            } catch (error) {
                console.error("❌ Error saving medical info:", error);
                alert("❌ Failed to save medical info.");
        }
        };
        
        // ✅ Save Medical Appointment
        const handleSaveAppointment = async () => {
            const appointmentData = {
                clientID, medApptDate, medApptLoc, medApptType, medApptProv, medApptTranport
            };
    
            try {
                await axios.post("http://localhost:3000/saveMedAppointment", appointmentData);
                alert("✅ Appointment saved successfully!");

                // ✅ Refresh the list of appointments
                const response = await axios.get(`http://localhost:3000/getMedAppointments/${clientID}`);
                setMedAppointments(response.data);

                // ✅ Clear form fields
                setMedApptDate("");
                setMedApptLoc("");
                setMedApptType("");
                setMedApptProv("");
                setMedApptTranport("");
                setMedAppt(false);

            } catch (error) {
                console.error("❌ Error saving appointment:", error);
                alert("❌ Failed to save appointment.");
            }
        };
    return (

        <div className="form-body">
            <Row className="text-center">
                <Label>FACE SHEET</Label>
            </Row>
            <Row>
                <Col md="6">
                    <Label for="">Medical Conditions</Label>
                    <FormGroup>
                        <Select id="clientMedConditions" name="clientMedConditions"
                            closeMenuOnSelect={false}
                            isMulti
                            options={medCond}
                            onChange={setClientMedConditions}
                        />
                    </FormGroup>                   
                </Col>
                <Col md="6" className="text-center">
                    <FormGroup>
                        <Label for="clientAddMedHistory">Addtional Medical History</Label>
                        <Input type="textarea" id="clientAddMedHistory" name="clientAddMedHistory" value={clientAddMedHistory} onChange={(e) => setClientAddMedHistory(e.target.value)}/>
                    </FormGroup>
                </Col>
                
            </Row>
            <Row>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="clientMedPertinent">Pertinent Information</Label>
                        <Input type="textarea" id="clientMedPertinent" name="clientMedPertinent" value={clientMedPertinent} onChange={(e) => setClientMedPertinent(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="clientPreviousLab">Review of Charts/Previous Lab Work</Label>
                        <Input type="select" id="clientPreviousLab" name="clientPreviousLab" value={clientPreviousLab} onChange={(e) => setClientPreviousLab(e.target.value)} >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Label className="text-center">Allergy/Intolerance History</Label>
                <Col md="12">
                    <FormGroup>
                        <Label for="">List ALL allergies:</Label>
                        <Select id="clientAllergies" name="clientAllergies"
                            closeMenuOnSelect={false}
                            isMulti
                            options={allergyList}
                            onChange={setClientAllergies}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row> 
                {/*--------------------------------------------------------------------------------*/}
                {/* Hospitalizations Table                                                  */}
                {/*--------------------------------------------------------------------------------*/}
        
                <ComponentCard
                title="Client Appointments">
                    <Button color="primary" size="sm" onClick={toggle}>Add Appointment</Button>
                    <Modal isOpen={medAppt} toggle={toggle.bind(null)}>
                        <ModalHeader toggle={toggle.bind(null)}>Add Appointmet</ModalHeader>
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
                    </Modal>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Appointment</th>
                                <th>Location</th>
                                <th>Provider</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medAppointments.map((item) => (
                                <tr key={item.appointmentID}>
                                    <td>{item.medApptDate}</td>
                                    <td>{item.medApptLoc}</td>
                                    <td>{item.medApptType}</td>
                                    <td>{item.medApptProv}</td>
                                    <td>{item.medApptTranport}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </ComponentCard>  
            </Row>
            
            <Button color="primary" className="mt-3"  onClick={handleSaveMedicalInfo}>Save</Button>
        </div>
    );
};
// ✅ Fix: Add PropTypes Validation
MedFaceSheet.propTypes = {
    clientID: PropTypes.number.isRequired
};

export default MedFaceSheet;