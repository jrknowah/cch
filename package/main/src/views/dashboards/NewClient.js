import React, {useEffect,useState} from "react";
import axios from "axios";
import {
    Row,
    Col, FormGroup, Label, Input, Form, Button
} from 'reactstrap';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {
    clientEthnicityList,
    clientGenders, clientPronounsList, clientRaceList, highestEdu,
    maritalStatusList, religiousPrefList, clientLangList, clientVeteranStatus, clientCitizenStatus,hhhSiteList
} from "../../data/arrayList";
import { fetchClients } from "../../store/apps/client/ClientSlice";  



const NewClient = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [clientID, setClientID] = useState ("");
    const [clientAdmitDate, setAdmitDate] = useState("");
    const [ clientDOB,setClientDOB] = useState("");
    const [ clientSite, setClientSite ] = useState("");
    const [ clientFirstName,setClientFirstName] = useState("");
    const [ clientMiddleName,setClientMiddleName] = useState("");
    const [ clientLastName,setClientLastName] = useState("");
    const [ clientAliases,setClientAliases] = useState("");
    const [ clientCitizenship,setClientCitizenship] = useState("");
    const [ clientVetStatus,setClientVetStatus] = useState("");
    const [ clientSSN,setClientSSN] = useState("");
    const [ clientGender,setClientGender] = useState("");
    const [ clientPronouns,setClientPronouns] = useState("");
    const [ clientEthnicity,setClientEthnicity] = useState("");
    const [ clientRace,setClientRace] = useState("");
    const [ clientPrimaryLang,setClientLang] = useState("");
    const [ clientMaritalStatus,setClientMarital] = useState("");
    const [ clientReligiousPref,setClientReligiousPref] = useState("");
    const [ clientHighEd,setClientHighEd] = useState("");

    useEffect(() => {
      dispatch(fetchClients());
    }, [dispatch]);

    const handleAddClient = async () => {
        if (!clientFirstName || !clientLastName || !clientDOB || !clientID || !clientSite) {
            alert("Please fill in all required fields.");
            return;
          }
        const newClient = {
            clientID,
            clientAdmitDate,
            clientDOB,
            clientSite,
            clientFirstName,
            clientMiddleName,
            clientLastName,
            clientAliases,
            clientCitizenship,
            clientVetStatus,
            clientSSN,
            clientGender,
            clientPronouns,
            clientEthnicity,
            clientRace,
            clientPrimaryLang,
            clientMaritalStatus,
            clientReligiousPref,
            clientHighEd
        };

        try{
            const response = await axios.post("http://localhost:3000/addClient", newClient);
            console.log("✅ Client added:", response.data);
            alert("Client successfully added!");
            // ✅ Delay navigation by 3 seconds
            setTimeout(() => {
                navigate('/apps/Indentification');

                // Reset form
                setClientID("");
                setAdmitDate("");
                setClientDOB("");
                setClientFirstName("");
                setClientMiddleName("");
                setClientLastName("");
                setClientAliases("");
                setClientCitizenship("");
                setClientVetStatus("");
                setClientSSN("");
                setClientGender("");
                setClientPronouns("");
                setClientEthnicity("");
                setClientRace("");
                setClientLang("");
                setClientMarital("");
                setClientReligiousPref("");
                setClientHighEd("");
        },  3000);
        }catch (err) { // ✅ Renamed error variable to `err`
            console.error("❌ Error adding client:", err);
            alert("Failed to add client.");
        }
    };

    return (
        <div className="form-body">
                <Form>
                    <div className="form-body">
                        <Row>
                            <Col md="3" sm="12">
                                <FormGroup>
                                    <Label for="clientID">ID Number</Label>
                                    <Input type="text" id="clientID" name="clientID" value={clientID} onChange={(e) => setClientID(e.target.value)} />
                                </FormGroup>
                            </Col>
                            <Col md="3" sm="12">
                                <FormGroup>
                                    <Label for="clientAdmitDate">Client Admit Date</Label>
                                    <Input type="date" id="clientAdmitDate" name="clientAdmitDates" value={clientAdmitDate} onChange={(e) => setAdmitDate(e.target.value)}/>
                                </FormGroup>
                            </Col>
                            <Col md="3" sm="12">
                                <FormGroup>
                                    <Label for="clientDOB">DOB</Label>
                                    <Input type="date" name="clientDOB" id="clientDOB"  onChange={(e) => setClientDOB(e.target.value)}/>
                                </FormGroup>
                            </Col>
                            <Col md="3" sm="12">
                                <FormGroup>
                                    <Label for="clientSite">Site</Label>
                                    <Input type="select" name="clientSite" id="clientSite" value={clientSite} onChange={(e) => setClientSite(e.target.value)}>
                                        {hhhSiteList.map((site) => (
                                            <option value={site}>{site}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientFirstName">First Name</Label>
                                    <Input type="text" id="clientFirstName" name="clientFirstName" value={clientFirstName} onChange={(e) => setClientFirstName(e.target.value)}/>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientMiddleName">Middle Name</Label>
                                    <Input type="text" id="clientMiddleName" name="clientMiddleName" value={clientMiddleName} onChange={(e) => setClientMiddleName(e.target.value)}/>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientLastName">Last Name</Label>
                                    <Input type="text" id="clientLastName" name="clientLastName" value={clientLastName} onChange={(e) => setClientLastName(e.target.value)}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientAliases">Aliases</Label>
                                    <Input type="text" id="clientAliases" name="clientAliases" value={clientAliases} onChange={(e) => setClientAliases(e.target.value)}/>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientCitizenship">Citizenship Status</Label>
                                    <Input type="select" name="clientCitizenship" id="clientCitizenship" value={clientCitizenship} onChange={(e) => setClientCitizenship(e.target.value)}>
                                        {clientCitizenStatus.map((ethnicity) => (
                                            <option value={ethnicity}>{ethnicity}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientVetStatus">Veteran Status</Label>
                                    <Input type="select" name="clientVetStatus" id="clientVetStatus" value={clientVetStatus} onChange={(e) => setClientVetStatus(e.target.value)}>
                                        {clientVeteranStatus.map((vet) => (
                                            <option value={vet}>{vet}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientSSN">SSN</Label>
                                    <Input type="text" name="clientSSN" id="clientSSN" maxLength="9" value={clientSSN} onChange={(e) => setClientSSN(e.target.value)}/>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientGender">Gender</Label>
                                    <Input type="select" name="clientGender" id="clientGender" value={clientGender} onChange={(e) => setClientGender(e.target.value)}>
                                        {clientGenders.map((gender) => (
                                            <option value={gender}>{gender}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>       
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientPronouns">Pronouns</Label>
                                    <Input type="select" name="clientPronouns" id="clientPronouns"  value={clientPronouns} onChange={(e) => setClientPronouns(e.target.value)}>
                                        {clientPronounsList.map((proN) => (
                                            <option value={proN}>{proN}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>                       
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientEthnicity">Ethnicity</Label>
                                    <Input type="select" name="clientEthnicity" id="clientEthnicity" value={clientEthnicity} onChange={(e) => setClientEthnicity(e.target.value)}>
                                        {clientEthnicityList.map((ethnicity) => (
                                            <option value={ethnicity}>{ethnicity}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientRace">Race</Label>
                                    <Input type="select" name="clientRace" id="clientRace" value={clientRace} onChange={(e) => setClientRace(e.target.value)}>
                                        {clientRaceList.map((race) => (
                                            <option value={race}>{race}</option> 
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientLang">Primary Language</Label>
                                    <Input type="select" id="clientLang" name="clientLang" value={clientPrimaryLang} onChange={(e) => setClientLang(e.target.value)}>
                                        {clientLangList.map((langs) => (
                                            <option value={langs}>{langs}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientMarital">Marital Status</Label>
                                    <Input type="select" name="clientMarital" id="clientMarital" value={clientMaritalStatus} onChange={(e) => setClientMarital(e.target.value)}>
                                        {maritalStatusList.map((ms) => (
                                            <option value={ms}>{ms}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="clientRelPref">Religious Preference</Label>
                                    <Input type="select" name="clientRelPref" id="clientRelPref" value={clientReligiousPref} onChange={(e) => setClientReligiousPref(e.target.value)}>
                                        {religiousPrefList.map((relig) => (
                                            <option value={relig}>{relig}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4" sm="12">
                                <FormGroup>
                                    <Label for="setClientHighEd">Highest Level of Education</Label>
                                    <Input type="select" id="setClientHighEd" name="setClientHighEd" value={clientHighEd} onChange={(e) => setClientHighEd(e.target.value)}>
                                        {highestEdu.map((hEdu) => (
                                            <option value={hEdu}>{hEdu}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <Button color="primary" onClick={handleAddClient}>
                                    Create Client
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Form>
        </div>
    );
};

export default NewClient;
