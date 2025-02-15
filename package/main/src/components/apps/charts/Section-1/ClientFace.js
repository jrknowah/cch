import React, {useState} from "react";
import axios from "axios";
import {
    Row,
    Col, FormGroup, Label, Input, Button
} from 'reactstrap';
import Select from 'react-select';
import {
    allergyList
} from "../../../../data/arrayList";


const ClientFace = () => {
    const [clientFaceForm, setClientFaceForm] = useState ({
        clientContactNum: "",
        clientContactAltNum: "",
        clientEmail: "",
        clientEmgContactName: "",
        clientEmgContactNum: "",
        clientEmgContactRel: "",
        clientEmgContactAddress: "",
        clientMedInsType: "",
        clientMedCarrier: "",
        clientMedInsNum: "",
        clientMedPrimaryPhy: "",
        clientMedPrimaryPhyFacility: "",
        clientMedPrimaryPhyPhone: "",
        clientAllergies: "",
        clientAllergyComments: "",
    });


    // 🔹 Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setClientFaceForm(prevState => ({ ...prevState, [name]: value }));
    };

    // 🔹 Handle Multi-Select Change
    const handleSelectChange = (selectedOptions) => {
        setClientFaceForm(prevState => ({
            ...prevState,
            clientAllergies: selectedOptions ? selectedOptions.map(opt => opt.value) : []
        }));
    };

    // 🔹 Handle Form Submission
    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:3000/saveClientFace", clientFaceForm);
            alert("✅ Client Face Data Saved Successfully!");
            console.log("Saved Data:", response.data);
        } catch (error) {
            console.error("❌ Error saving data:", error);
            alert("Failed to save client face data.");
        }
    };

    return (

        <div className="form-body">
             {/* Client Contact Information */}
            <Row>
                <Label className="text-center">Client Contact Information</Label>
                <Col md="4">
                    Phone:<Input input type="phone" id="clientContactNum" name="clientContactNum" value={clientFaceForm.clientContactNum} onChange={handleChange} />
                </Col>
                <Col md="4">
                    Alt Phone:<Input input type="phone" id="clientContactAltNum" name="clientContactAltNum" value={clientFaceForm.clientContactAltNum} onChange={handleChange} />
                </Col>
                <Col md="4">
                    Email:<Input input type="email" id="clientEmail" name="clientEmail" value={clientFaceForm.clientEmail} onChange={handleChange} />
                </Col>
            </Row>        
            <Row>
                {/* Emergency Contact */}   
                <Row>
                    <Label className="text-center">Emergency Contact Information</Label>
                    <Col md="4">
                        Name:<Input input type="text" id="clientEmgContactName" name="clientEmgContactName" value={clientFaceForm.clientEmgContactName} onChange={handleChange} />
                    </Col>
                    <Col md="4">
                        Phone:<Input input type="text" id="clientEmgContactNum" name="clientEmgContactNum" value={clientFaceForm.clientEmgContactNum} onChange={handleChange} />
                    </Col>
                    <Col md="4">
                        Relationship:<Input input type="text" id="clientEmgContactRel" name="clientEmgContactRel" value={clientFaceForm.clientEmgContactRel} onChange={handleChange} />
                    </Col>
                </Row>  
                <Row>
                    <Col md="12">
                        Address:<Input input type="text" id="clientEmgContactAddress" name="clientEmgContactAddress" value={clientFaceForm.clientEmgContactAddress} onChange={handleChange} />
                    </Col>
                </Row>
                {/* Medical Information */}
                <Row>
                    <Label className="text-center">Medical Information</Label>
                    <Col md="4">
                        <FormGroup>
                            Type of Health Insurance:
                            <Input type="select" placeholder="" id="clientMedInsType" name="clientMedInsType" value={clientFaceForm.clientMedInsType} onChange={handleChange}>
                                <option value=""></option>
                                <option value="Medi-Cal">Medi-Cal</option>
                                <option value="Medi-Care">Medi-Care</option>
                                <option value="HMO">HMO</option>
                                <option value="Private">Private</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup>
                            Private Carrier
                            <Input input type="text" id="clientMedCarrier" name="clientMedCarrier" value={clientFaceForm.clientMedCarrier} onChange={handleChange} />
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup>
                            Insurance Number:<Input input type="text" id="clientMedInsNum" name="clientMedInsNum" value={clientFaceForm.clientMedInsNum} onChange={handleChange} />
                        </FormGroup>
                    </Col>
                </Row>
                {/* Physician Information */}
                <Row>
                    <Col md="4">
                        Physician:<Input input type="text" id="clientMedPrimaryPhy" name="clientMedPrimaryPhy" value={clientFaceForm.clientMedPrimaryPhy} onChange={handleChange} />
                    </Col>
                    <Col md="4">
                        Facility:<Input input type="text" id="clientMedPrimaryPhyFacility" name="clientMedPrimaryPhyFacility" value={clientFaceForm.clientMedPrimaryPhyFacility} onChange={handleChange} />
                    </Col>
                    <Col md="4">
                        Phone Number:<Input input type="phone" id="clientMedPrimaryPhyPhone" name="clientMedPrimaryPhyPhone" value={clientFaceForm.clientMedPrimaryPhyPhone} onChange={handleChange} />
                    </Col>
                </Row>
                {/* Allergy/Intolerance History */}
                <Row>
                    <Label className="text-center">Allergy/Intolerance History</Label>
                    <Col md="6">
                        <FormGroup>
                            <Label for="">List ALL allergies:</Label>
                            <Select id="clientAllergies" name="clientAllergies"
                                closeMenuOnSelect={false}
                                isMulti
                                options={allergyList}
                                onChange={handleSelectChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Label for="">Comments:</Label>
                            <Input type="textarea" name="clientAllergyComments" id="clientAllergyComments" value={clientFaceForm.clientAllergyComments} onChange={handleChange} />
                        </FormGroup>
                    </Col>
                </Row>

            </Row>
            <Button color="primary" size="lg" onClick={handleSubmit}>Save</Button>
        </div>
    );
};

export default ClientFace;
