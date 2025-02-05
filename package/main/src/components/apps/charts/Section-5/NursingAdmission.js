// import React, {useState} from "react";
import React from "react";
import {
    Row,
    Col, FormGroup, Label, Input, InputGroup, InputGroupText, Table, Button
} from 'reactstrap';
import Select from 'react-select';
// import TagsInput from "react-tagsinput";
import {
    abdomen,
    ambulation, communication,
    edema, elimMethUsed, enteral, hearingVision,
    historyOf, mobDevices, nutrHyd, oral,
    painHistory,
    pList,
    rList,
    tList,
    transfers,
    weightBearing, locList, orientedToList, orientedToRoomList, clientPain,
    lungSounds, adlLevel,
    bowelBladder,
    physicalFuncStat
} from "../../../../data/arrayList";
import 'react-tagsinput/react-tagsinput.css';
import '../../../../views/form-pickers/tagselect.scss';
import front from'./front.png'
import rear from'./rear.png'


const CustomClearText = () => 'clear all';

const ClearIndicator = (props) => {
    const {
        // eslint-disable-next-line react/prop-types
        children = <CustomClearText />,
        // eslint-disable-next-line react/prop-types
        getStyles,
        // eslint-disable-next-line react/prop-types
        innerProps: { ref, ...restInnerProps },
    } = props;
    return (
        <div {...restInnerProps} ref={ref} style={getStyles('clearIndicator', props)}>
            <div style={{ padding: '0px 5px' }}>{children}</div>
        </div>
    );
};

const ClearIndicatorStyles = (base, state) => ({
    ...base,
    cursor: 'pointer',
    color: state.isFocused ? 'blue' : 'black',
});



const NursingAdmission = () => /* const [regularTags, setRegularTags] = useState([]);*/ /* const handleRegularTags = (tags) => {*/ /*     setRegularTags(tags);*/ /* };*/ /* const [foodAllergies, setFoodAllergies] = useState([]);*/ /* const handleFoodAllergies = (foodA) => {*/ /*     setFoodAllergies(foodA);*/ /* };*/ /* const [otherAllergies, setOtherAllergies] = useState([]);*/ /* const handleOtherAllergies = (otherA) => {*/ /*     setOtherAllergies(otherA);*/ /* };*/ (

    <div className="form-body">
        <Row className="text-center">
            <Label>NURSING ADMISSION INTAKE</Label>
        </Row>
        <Row>
            <Col md="4">
                <Label for="">LOC</Label>
                <Select
                    closeMenuOnSelect={false}
                    components={{ ClearIndicator }}
                    styles={{ clearIndicator: ClearIndicatorStyles }}
                    // defaultValue={{}}
                    isMulti
                    options={locList} />
            </Col>
            <Col md="4">
                <Label for="">Oriented to:</Label>
                <Select
                    closeMenuOnSelect={false}
                    components={{ ClearIndicator }}
                    styles={{ clearIndicator: ClearIndicatorStyles }}
                    // defaultValue={{}}
                    isMulti
                    options={orientedToList} />
            </Col>
            <Col md="4">
                <Label for="">Oriented To Room/Routine:</Label>
                <Select
                    closeMenuOnSelect={false}
                    components={{ ClearIndicator }}
                    styles={{ clearIndicator: ClearIndicatorStyles }}
                    // defaultValue={{}}
                    isMulti
                    options={orientedToRoomList} />
            </Col>
        </Row>
        <Row>
            <Col className="text-center">
                <b><Label>Cardio-Pulmonary</Label></b>
            </Col>
        </Row>
        <Row>
            {/*Cardio-Pulmonary*/}
            <Col md="2">
                <br />
                <FormGroup>
                    <InputGroup>
                        <InputGroupText>T</InputGroupText>
                        <Input placeholder="" />
                    </InputGroup>
                </FormGroup>
            </Col>
            <Col md="3">
                <br />
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={tList} />
                </FormGroup>
            </Col>
            <Col md="2">
                <br />
                <FormGroup>
                    <InputGroup>
                        <InputGroupText>P =</InputGroupText>
                        <Input placeholder="" />
                    </InputGroup>
                </FormGroup>
            </Col>
            <Col md="3">
                <br />
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={pList} />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md="2">
                <FormGroup>
                    <InputGroup>
                        <InputGroupText>R =</InputGroupText>
                        <Input placeholder="" />
                    </InputGroup>
                </FormGroup>
            </Col>
            <Col md="3">
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={rList} />
                </FormGroup>
            </Col>
            <Col md="3">
                <FormGroup>
                    <InputGroup>
                        <InputGroupText>Blood Pressure</InputGroupText>
                        <Input placeholder="" />
                    </InputGroup>
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md="3">
                <FormGroup>
                    <Label for="">History of:</Label>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={historyOf} />
                </FormGroup>
            </Col>
            <Col md="4">
                Edema
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={edema} />
                </FormGroup>
            </Col>
            <Col md="4">
                <Label>If Edema Present Specify Location:</Label>
                <FormGroup>
                    <InputGroup>
                        <Input placeholder="" />
                    </InputGroup>
                </FormGroup>
            </Col>
        </Row>
        <Row>

        </Row>
        <Row>
            <Col md="3">
                <FormGroup>
                    <Label for="">Pain Level:</Label>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={clientPain} />
                </FormGroup>
            </Col>
            <Col md="4">
                <FormGroup>
                    <Label for="">Pain History/Frequency:</Label>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={painHistory} />
                </FormGroup>
            </Col>
            <Col md="4">
                <FormGroup>
                    <Label for="">Lung Sounds:</Label>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={lungSounds} />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md="3">
                <FormGroup>
                    <Label for="">Bowel & Bladder </Label>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={bowelBladder} />
                </FormGroup>
            </Col>
            <Col md="3">
                <Label>Catheter Present Type</Label>
                <FormGroup>
                    <InputGroup>
                        <Input placeholder="" />
                    </InputGroup>
                </FormGroup>
            </Col>
            <Col md="3">
                <Label>Catheter Size</Label>
                <FormGroup>
                    <InputGroup>
                        <Input placeholder="" />
                    </InputGroup>
                </FormGroup>
            </Col>
            <Col md="3">
                <Label>Diagnosis for use:</Label>
                <FormGroup>
                    <InputGroup>
                        <Input placeholder="" />
                    </InputGroup>
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md="3">
                <Label>Elimination Method(s)</Label>
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={elimMethUsed} />
                </FormGroup>
            </Col>
            <Col md="3">
                <Label>Last Bowel Movement</Label>
                <FormGroup>
                    <InputGroup>
                        <Input type="date" />
                    </InputGroup>
                </FormGroup>
            </Col>
            <Col md="3">
                <Label>Last Voiding</Label>
                <FormGroup>
                    <InputGroup>
                        <Input type="date" />
                    </InputGroup>
                </FormGroup>
            </Col>
            <Col md="3">
                <Label>Abdomen</Label>
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={abdomen} />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md="3">
                <Label>Physical & Functional Status</Label>
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={physicalFuncStat} />
                </FormGroup>
            </Col>
            <Col md="3" className="text-center">
                <FormGroup>
                    <Label for="clientPhysicalFuncNotes">Addtional Notes</Label>
                    <Input type="textarea" id="clientPhysicalFuncNotes" name="clientPhysicalFuncNotes" />
                </FormGroup>
            </Col>
            <Col md="3">
                <Label>Weight-Bearing:</Label>
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={weightBearing} />
                </FormGroup>
            </Col>
            <Col md="3">
                <Label>Transfers:</Label>
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={transfers} />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md="3">
                <Label>Ambulation:</Label>
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={ambulation} />
                </FormGroup>
            </Col>
            <Col md="3">
                <Label>Mobility Devices:</Label>
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={mobDevices} />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md="3">
                <Label>Nutrition/Hydration</Label>
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={nutrHyd} />
                </FormGroup>
            </Col>
            <Col md="3">
                <Label>Enteral Nutrition</Label>
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={enteral} />
                </FormGroup>
            </Col>
            <Col md="3">
                <Label>Oral:</Label>
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={oral} />
                </FormGroup>
            </Col>
            <Col md="3">
                <Label>Hearing:</Label>
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={hearingVision} />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md="3">
                Vision:
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={hearingVision} />
                </FormGroup>
            </Col>
            <Col md="3">
                Communication:
                <FormGroup>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        isMulti
                        options={communication} />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col>
                <Table bordered responsive>
                    <tbody>
                        <tr className="text-center">
                            <td colSpan={2}>ADL Level</td>

                        </tr>
                        <tr>
                            <td>Bathing</td>
                            <td>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={adlLevel} />
                            </td>
                        </tr>
                        <tr>
                            <td>Eating</td>
                            <td>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={adlLevel} />
                            </td>
                        </tr>
                        <tr>
                            <td>Toileting</td>
                            <td>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={adlLevel} />
                            </td>
                        </tr>
                        <tr>
                            <td>Bed Mobility</td>
                            <td>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={adlLevel} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
        <Row>
            <Col md="12">
                <Table bordered responsive>
                    <tbody>
                        <tr>
                            <td colSpan={8}></td>
                            <td>Notes</td>
                        </tr>
                        <tr>
                            <td rowSpan={21} colSpan={8} style={{ textAlign: 'center' }}>
                                Front Body Inspection <br />
                                <img src={front} alt="Front" />    
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <Label>Face</Label>
                                <Input id="clientBodyFace" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Chest</Label>
                                <Input id="clientBodyChest" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Abdomen - Right Upper Quadrant(RUQ)</Label>
                                <Input id="clientBodyRUQ" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Abdomen - Left Upper Quadrant(LUQ)</Label>
                                <Input id="clientBodyLUQ" type="textarea" /> 
                            </td>   
                        </tr>
                        <tr>
                            <td>
                                <Label>Abdomen - Right Lower Quadrant(RLQ)</Label>
                                <Input id="clientBodyRLO" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Abdomen - Left Lower Quadrant(LLQ)</Label>
                                <Input id="clientBodyLLQ" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Upper Arm</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Lower Arm</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Upper Arm</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Lower Arm</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Thigh</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Thigh</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Knee</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Knee</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Shin</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Shin</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Ankle</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Ankle</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Foot</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Foot</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
        <Row>
            <Col md="12">
                <Table bordered responsive>
                    <tbody>
                        <tr>
                            <td colSpan={8}></td>
                            <td>Notes</td>
                        </tr>
                        <tr>
                            <td rowSpan={21} colSpan={8} style={{ textAlign: 'center' }}>
                                Back Body Inspection
                                <br />
                                <img src={rear} alt="Rear" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Face</Label>
                                <Input id="clientBodyFace" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Chest</Label>
                                <Input id="clientBodyChest" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Abdomen - Right Upper Quadrant(RUQ)</Label>
                                <Input id="clientBodyRUQ" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Abdomen - Left Upper Quadrant(LUQ)</Label>
                                <Input id="clientBodyLUQ" type="textarea" /> 
                            </td>   
                        </tr>
                        <tr>
                            <td>
                                <Label>Abdomen - Right Lower Quadrant(RLQ)</Label>
                                <Input id="clientBodyRLO" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Abdomen - Left Lower Quadrant(LLQ)</Label>
                                <Input id="clientBodyLLQ" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Upper Arm</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Lower Arm</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Upper Arm</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Lower Arm</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Thigh</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Thigh</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Knee</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Knee</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Shin</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Shin</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Ankle</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Ankle</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Left Foot</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label>Right Foot</Label>
                                <Input id="" type="textarea" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
        <Button color="primary" size="lg">Save</Button>
    </div>

);

export default NursingAdmission;
