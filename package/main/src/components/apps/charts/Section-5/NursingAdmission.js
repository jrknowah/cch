import React, {useState} from "react";
import {
    Row,
    Col, FormGroup, Label, Input, InputGroup, InputGroupText, Table
} from 'reactstrap';
import Select from 'react-select';
import TagsInput from "react-tagsinput";
import {
    abdomen,
    ambulation, communication,
    edema, elimMethUsed, enteral, hearingVision,
    historyOf, initialSkin, mobDevices, nutrHyd, oral,
    painHistory,
    pList,
    rList, skinRisk,
    tList,
    transfers,
    weightBearing
} from "../../../../data/arrayList";
import 'react-tagsinput/react-tagsinput.css';
import '../../../../views/form-pickers/tagselect.scss';


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



const NursingAdmission = () => {
    const [regularTags, setRegularTags] = useState([]);

    const handleRegularTags = (tags) => {
        setRegularTags(tags);
    };
    const [foodAllergies, setFoodAllergies] = useState([]);

    const handleFoodAllergies = (foodA) => {
        setFoodAllergies(foodA);
    };
    const [otherAllergies, setOtherAllergies] = useState([]);

    const handleOtherAllergies = (otherA) => {
        setOtherAllergies(otherA);
    };
    return (

        <div className="form-body">
                    <Row className="text-center">
                        <Label>NURSING ADMISSION INTAKE</Label>
                    </Row>
                    <Row>
                        <Col md="3" >
                            <FormGroup>
                                <Label for="">Admit Date</Label>
                                <Input type="datetime-local" id="" name="" placeholder=""/><br/>
                                <Label for="">Admitted From</Label>
                                <Input type="text" id="" name="" placeholder=""/><br/>
                                <Label for="">Transported By</Label>
                                <Input type="text" id="" name="" placeholder=""/><br/>
                                <Label for="">Accompanied By</Label>
                                <Input type="text" id="" name="" placeholder=""/><br/>
                                <Label for="">Gender</Label>
                                <Input type="text" id="" name="" placeholder=""/><br/>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup inline>
                                <Label for="">Tuberculosis</Label><br/>
                                <div className="form-check form-check-inline">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">Denies past exposure</Label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">Hx. Of Positive ( +) PPD</Label>
                                </div>
                                <Label for="">Chest X-ray:</Label>
                                <Input type="text" id="" name="" placeholder=""/><br/>

                                <Label for="">Results</Label>
                                <Input type="text" id="" name="" placeholder=""/><br/>

                                <div className="form-check form-check-inline">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">Status Unknown</Label>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            {/*<ComponentCard title="Allergies">*/}
                                Medications
                                <TagsInput
                                    value={regularTags}
                                    onChange={(tags) => handleRegularTags(tags)}
                                    tagProps={{
                                        className: 'react-tagsinput-tag bg-info text-white rounded',
                                    }}
                                />

                                Food
                                <TagsInput
                                    value={foodAllergies}
                                    onChange={(foodA) => handleFoodAllergies(foodA)}
                                    tagProps={{
                                        className: 'react-tagsinput-tag bg-info text-white rounded',
                                    }}
                                />

                                Other
                                <TagsInput
                                    value={otherAllergies}
                                    onChange={(otherA) => handleOtherAllergies(otherA)}
                                    tagProps={{
                                        className: 'react-tagsinput-tag bg-info text-white rounded',
                                    }}
                                />
                            {/*</ComponentCard>*/}
                        </Col>
                    </Row>
                    <Row>
                        {/*<Col md="">
                            <Table className="align-middle">
                                <thead>
                                <tr align="center">
                                    <th>LOC/COGNITION</th>
                                    <th>ORIENTATION TO ROOM/ROUTINE:</th>
                                    <th>CARDIO-PULMONARY:</th>
                                    <th>PAIN:</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        LOC:
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={{ ClearIndicator }}
                                            styles={{ clearIndicator: ClearIndicatorStyles }}
                                            // defaultValue={{}}
                                            isMulti
                                            options={locList}
                                        />
                                        Oriented to:
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={{ ClearIndicator }}
                                            styles={{ clearIndicator: ClearIndicatorStyles }}
                                            // defaultValue={{}}
                                            isMulti
                                            options={locList}
                                        />
                                    </td>
                                    <td>
                                        Oriented To Room/Routine:
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={{ ClearIndicator }}
                                            styles={{ clearIndicator: ClearIndicatorStyles }}
                                            // defaultValue={{}}
                                            isMulti
                                            options={orientedToRoomList}
                                        />
                                    </td>
                                    <td>
                                        Cardio-Pulmonary:
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={{ ClearIndicator }}
                                            styles={{ clearIndicator: ClearIndicatorStyles }}
                                            // defaultValue={{}}
                                            isMulti
                                            options={orientedToRoomList}
                                        />
                                        B/P<Input input type="text" id="" name=""/>mm./hg.
                                        <Input input type="checkbox" id="" name=""/>

                                    </td>
                                    <td><Input input type="tel" id="" name="" placeholder="Phone Number"/></td>
                                </tr>
                                <tr>
                                    <td colSpan={1}>
                                        Cardio-Pulmonary:<br/>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={{ ClearIndicator }}
                                            styles={{ clearIndicator: ClearIndicatorStyles }}
                                            // defaultValue={{}}
                                            isMulti
                                            options={orientedToRoomList}
                                        />
                                        B/P<Input input type="text" id="" name=""/>mm./hg.
                                        <Input input type="checkbox" id="" name=""/>
                                    </td>

                                </tr>
                                <tr>
                                    <td><Input input type="text" id="" name="" placeholder="PCP/Specialty Type"/></td>
                                    <td><Input input type="text" id="" name="" placeholder="Appointment Type"/></td>
                                    <td><Input input type="text" id="" name="" placeholder="Address"/></td>
                                    <td><Input input type="tel" id="" name="" placeholder="Phone Number"/></td>
                                </tr>
                                <tr>
                                    <td><Input input type="text" id="" name="" placeholder="PCP/Specialty Type"/></td>
                                    <td><Input input type="text" id="" name="" placeholder="Appointment Type"/></td>
                                    <td><Input input type="text" id="" name="" placeholder="Address"/></td>
                                    <td><Input input type="tel" id="" name="" placeholder="Phone Number"/></td>
                                </tr>
                                <tr>
                                    <td><Input input type="text" id="" name="" placeholder="PCP/Specialty Type"/></td>
                                    <td><Input input type="text" id="" name="" placeholder="Appointment Type"/></td>
                                    <td><Input input type="text" id="" name="" placeholder="Address"/></td>
                                    <td><Input input type="tel" id="" name="" placeholder="Phone Number"/></td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>*/}
                    </Row>
                    <Row className="text-center">
                        <Label>Cardio-Pulmonary</Label>
                    </Row>
                    <Row>
                        <Col md="4">
                            <br/>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupText>Blood Pressure</InputGroupText>
                                    <Input placeholder="" />
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            Lung Sounds
                            <br/>
                            <div className="form-check form-check-inline">
                                <Input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox1"
                                    value="option1"
                                />
                                <Label for="">Clear to auscultation bilateral fields</Label>
                            </div>
                            <br/>
                            <div className="d-flex">
                                <FormGroup className="me-3">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">Other</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" id=""/>
                                </FormGroup>
                            </div>
                        </Col>
                        <Col md="4">
                            Pain
                            <br/>
                            <div className="form-check form-check-inline">
                                <Input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox1"
                                    value="option1"
                                />
                                <Label for="">Denies Pain/Without Non-verbal Indicators</Label>
                            </div>
                            <br/>
                            <div className="d-flex">
                                <FormGroup className="me-3">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">Pain Level Out of 10</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" id=""/>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {/*Cardio-Pulmonary*/}
                        <Col md="2">
                            <br/>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupText>T =</InputGroupText>
                                    <Input placeholder="" />
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col md="2">
                            <br/>
                           <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={tList}
                                />
                           </FormGroup>
                        </Col>
                        <Col md="4">
                            History of:
                            <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={historyOf}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <div>
                                 <FormGroup className="me-3">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value=""
                                    />Non-verbal Indicators(Specify):
                                     <Input type="text" id=""/>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2">
                            <br/>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupText>P =</InputGroupText>
                                    <Input placeholder="" />
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col md="2">
                            <br/>
                            <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={pList}
                                />
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
                                    options={edema}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            Pain History / Frequency
                            <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={painHistory}
                                />
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
                        <Col md="2">
                            <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={rList}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="4">

                        </Col>
                        <Col md="4">
                            <div className="form-check form-check-inline">
                                <FormGroup>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">Denies Pain/Without Non-verbal Indicators</Label></FormGroup>
                            </div>
                            <div className="form-check form-check-inline">
                                <FormGroup>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">Day to day activities limited due to pain</Label>
                                </FormGroup>
                            </div>

                            <Label for=""><b><i>* Proceed with Pain Assessment/Management Care Plan</i></b></Label>

                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            Bowel & Bladder
                            <div className="form-check form-check-inline">
                                <FormGroup>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">Continent of both Bowel & Bladder</Label>
                                    <br/>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">History of Incontinence; Any Degree</Label>
                                    <br/>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">Unable to Determine Status from Admission Sources</Label>
                                    <br/>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value=""
                                    />Catheter Present Type:
                                    <Input type="text" id=""/>
                                    <br/>
                                    Size = Fr.
                                    <FormGroup>
                                        <Row>
                                            <Col md="4">
                                                <Input/>
                                            </Col>
                                            <Col md="4">
                                                <Input />
                                            </Col>cc balloon
                                        </Row>
                                    </FormGroup>
                                    Diagnosis for use:<Input />(Proceed with catheter orders and care plan development)
                                </FormGroup>
                            </div>
                        </Col>
                        <Col md="3">
                            Physical & Functional Status:
                            <div className="form-check form-check-inline">
                                <FormGroup>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">Full / Functional ROM</Label>
                                    <FormGroup>
                                        <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox1"
                                            value=""
                                        />Paralysis - Site(s):
                                        <Row>
                                            <Col md="8">
                                                <Input/>
                                            </Col>
                                        </Row>
                                        <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox1"
                                            value=""
                                        />Amputee - Type/Limb(s):
                                        <Row>
                                            <Col md="8">
                                                <Input/>
                                            </Col>
                                        </Row>
                                        <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox1"
                                            value=""
                                        />Contractures Site(s):
                                        <Row>
                                            <Col md="8">
                                                <Input/>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label>Hip Precautions</Label>
                                    <br/>
                                    Nutrition/Hydration
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={{ ClearIndicator }}
                                        styles={{ clearIndicator: ClearIndicatorStyles }}
                                        isMulti
                                        options={nutrHyd}
                                    />
                                    Enteral Nutrition
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={{ ClearIndicator }}
                                        styles={{ clearIndicator: ClearIndicatorStyles }}
                                        isMulti
                                        options={enteral}
                                    />
                                    Tube type/ size:
                                    <FormGroup>
                                        <Row>
                                            <Col md="8">
                                                <Input/>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </FormGroup>
                            </div>
                        </Col>
                        <Col md="2">
                            <br/>
                            Weight-Bearing:
                            <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={weightBearing}
                                />
                            </FormGroup>
                            Ambulation:
                            <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={ambulation}
                                />
                            </FormGroup>
                            Oral:
                            <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={oral}
                                />
                            </FormGroup>
                            Hearing:
                            <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={hearingVision}
                                />
                            </FormGroup>
                            Vision:
                            <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={hearingVision}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="2">
                            <br/>
                            Transfers:
                            <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={transfers}
                                />
                            </FormGroup>
                            Mobility Devices:
                            <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={mobDevices}
                                />
                            </FormGroup>
                            Communication:
                            <FormGroup>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={{ ClearIndicator }}
                                    styles={{ clearIndicator: ClearIndicatorStyles }}
                                    isMulti
                                    options={communication}
                                />
                            </FormGroup>
                            Language
                            <FormGroup>
                                <Row>
                                    <Col md="8">
                                        <Input/>
                                    </Col>
                                </Row>
                            </FormGroup>

                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            Elimination Method(s) Used / Preferred:
                            <div className="form-check form-check-inline">
                                <FormGroup>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={{ ClearIndicator }}
                                        styles={{ clearIndicator: ClearIndicatorStyles }}
                                        isMulti
                                        options={elimMethUsed}
                                    />
                                    <FormGroup>
                                        <Row>
                                            <Col md="4">
                                                Last BM:<Input/>
                                            </Col>
                                            <Col md="4">
                                                Last Voiding:<Input />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">Bowel Sounds present x 4</Label>
                                    <br/>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label for="">History of Constipation</Label>
                                    <br/>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value=""
                                    />Bowel Sounds absent (Specify)
                                    <Input type="text" id=""/>
                                    Abdomen
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={{ ClearIndicator }}
                                        styles={{ clearIndicator: ClearIndicatorStyles }}
                                        isMulti
                                        options={abdomen}
                                    />
                                </FormGroup>
                            </div>
                        </Col>
                        <Col>
                            <Table bordered responsive>
                                <tbody>
                                    <tr>
                                        <td>ADL Level</td>
                                        <td>Independent</td>
                                        <td>Some Assist</td>
                                        <td>Dependent</td>
                                    </tr>
                                    <tr>
                                        <td>Bathing</td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                    </tr>
                                    <tr>
                                        <td>Eating</td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                    </tr>
                                    <tr>
                                        <td>Toileting</td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                    </tr>
                                    <tr>
                                        <td>Bed Mobility</td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
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
                                <td colSpan={2} align-items-center>Safety Screens</td>
                                <td>Clinical Decisions/Interventions
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan={3} style={{ textAlign: 'center' }}>Falls</td>
                                <td>History of Falls(Last 30 Days)
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                                <td rowSpan={3} style={{ textAlign: '' }}>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label>Evaluated room for immediate safety issues</Label>
                                    <br/>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label>Oriented to room, facility routine and use of call light</Label>
                                    <br/>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label>Placement of tab alarm or sensor</Label>
                                </td>
                            </tr>
                            <tr>
                                <td>History of Falls(Last 2-6 Months)
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td>Fall Resulting in Fracture: Last 6 Months
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                            </tr>
                            {/*Side Rails*/}
                            <tr>
                                <td rowSpan={4} style={{ textAlign: 'center' }}>Side Rails</td>
                                <td>Is the bed equipped with any type of rails?
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                                <td rowSpan={4} style={{ textAlign: '' }}>
                                    <Label>If the first question is Yes and any of the other questions are No,
                                        <br/>side rails are not recommended without further assessment of need;
                                        <br/> devices and interventions should also be considered.</Label>
                                    <br/>
                                    <Label>If Yes to all questions, side rails may be considered.</Label>
                                    <br/>
                                </td>

                            </tr>
                            <tr>
                                <td>Is safety maintained if rails are used?
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td>Do rails assist with bed mobility or transfers?
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td>Do rails allow freedom of movement?
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                            </tr>
                            {/*Elopement*/}
                            <tr>
                                <td rowSpan={5} style={{ textAlign: 'center' }}>Elopement</td>
                                <td>Self-mobile by ambulation or wheelchair
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                                <td rowSpan={5} style={{ textAlign: '' }}>
                                    <Label>If No to Self-mobile; Not Considered at Risk for Elopement</Label>
                                    <br/>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label>Yes to self-mobile with No on additional risk factors, <br/>residents is not generally considered at risk for elopement</Label>
                                    <br/>
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"
                                    />
                                    <Label>Yes to self-mobile and yes on 1 or more risk factors;<br/> Resident is considered to be at risk for elopement, <br/>implement an elopement risk prevention care plan</Label>
                                </td>

                            </tr>
                            <tr>
                                <td>History of Elopement in the last 6 months
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td>Repetitive Pacing or Aimless Wandering
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td>Asking how to Leave or Purposeful Exit-seeking
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td>Expresses Desire to Leave Facility or Go Home
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                            </tr>
                            {/*Smoking*/}
                            <tr>
                                <td rowSpan={2} style={{ textAlign: 'center' }}>Smoking</td>
                                <td>Does Resident Desire to Smoke
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </td>
                                <td rowSpan={2} style={{ textAlign: '' }}>
                                    <Label>If Yes to either Question, Refer to IDT for further Assessment</Label>
                                    <br/>
                                </td>
                            </tr>
                            <tr>
                                <td>Does Resident Desire to Self-Administer Meds
                                    <Input type="select">
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
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
                                <td colSpan={8} align-items-center>Number Each Location To Correspond With Condition</td>
                                <td>#</td>
                                <td>Non-Pressure</td>
                            </tr>
                            <tr>
                                <td rowSpan={13} colSpan={1} style={{ textAlign: 'center' }}>Full Body Inspection</td>
                                <td rowSpan={13} colSpan={7} style={{ textAlign: 'center' }}>Full Body Inspection</td>

                            </tr>
                            <tr>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td colSpan={2} > Access Lines/ Other Devices</td>
                            </tr>
                            <tr>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td><Input/></td>
                                <td><Input/></td>
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
                                <td colSpan={2} align-items-center>Inspect Bony Prominences</td>
                                <td>Clear</td>
                                <td>#</td>
                                <td>Scar</td>
                                <td>Cast/DRSG.</td>
                                <td>Stage I</td>
                                <td>Stage II</td>
                                <td>Stage III</td>
                                <td>Stage IV</td>
                                <td>Stage DTI</td>
                                <td>Stage UTD</td>
                            </tr>
                            <tr>
                                <td rowSpan={6} style={{ textAlign: 'center' }}>Right</td>
                                <td>Elbow</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td>Trochanter</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td>Heel</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td>Scapula</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td>Ischium</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td>Buttock</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            {/*MID*/}
                            <tr>
                                <td rowSpan={3} style={{ textAlign: 'center' }}>Mid</td>
                                <td>Spine</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td>Coccyx</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td>Sacrum</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>

                            {/*Left*/}
                            <tr>
                                <td rowSpan={6} style={{ textAlign: 'center' }}>Left</td>
                                <td>Elbow</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td>Trochanter</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td>Heel</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td>Scapula</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td>Ischium</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                            <tr>
                                <td>Buttock</td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    Skin Risk Screen:
                    <FormGroup>
                        <Select
                            closeMenuOnSelect={false}
                            components={{ ClearIndicator }}
                            styles={{ clearIndicator: ClearIndicatorStyles }}
                            isMulti
                            options={skinRisk}
                        />
                    </FormGroup>
                </Col>
                <Col md={5}>
                    Initial Skin Interventions:
                    <FormGroup>
                        <Select
                            closeMenuOnSelect={false}
                            components={{ ClearIndicator }}
                            styles={{ clearIndicator: ClearIndicatorStyles }}
                            isMulti
                            options={initialSkin}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </div>

    );
};

export default NursingAdmission;
