import React from 'react';
// import Datetime from "react-datetime";
import { useSelector, useDispatch } from 'react-redux';
import {Input, FormGroup, Button, Label, Row, Col} from 'reactstrap';
import {  addNote } from '../../../../store/apps/notes/NotesSlice';
import {hhhSiteList} from "../../../../data/arrayList";

require('moment/locale/fr');
require('moment/locale/de');
require('moment/locale/en-gb');


const CarePlanDetail = () => {
    const noteDetails = useSelector(
        (state) => state.notesReducer.notes[state.notesReducer.notesContent - 1],
    );
    const id = useSelector((state) => state.notesReducer.notes.length + 1);

    const dispatch = useDispatch();

    const handleNote = (e) => {
        e.preventDefault();
        dispatch(addNote(id, 'dummy Title', 'primary'));
    };

    return (
        <div>
            <div className="border-bottom p-3 text-end">
                <Button className="btn btn-success ms-auto" size="sm" onClick={handleNote}>
                    Create New Plan
                </Button>
            </div>
            {noteDetails && noteDetails.deleted === false ? (
                <div className="p-4">
                    <div className="form-body">
                        <Row>
                            <Col md="6">
                                Client Name:
                                <FormGroup>
                                    <Input type="text" defaultValue="" />
                                </FormGroup>
                                Admit Date:
                                <FormGroup>
                                    <Input type="date" defaultValue="" />
                                </FormGroup>
                                Assessment Date:
                                <FormGroup>
                                    <Input type="date" />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                Case Manager:
                                <FormGroup>
                                    <Input type="text" defaultValue="" />
                                </FormGroup>
                                Date Care Plan Created:
                                <FormGroup>
                                    <Input type="date" />
                                </FormGroup>
                                Agency:

                                <FormGroup>
                                    <Input type="select">
                                        {hhhSiteList.map((list) => {
                                            return (
                                                <option id={list}>{list} </option>
                                            );
                                        })}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="8">
                                <FormGroup>
                                    <Label for="clientCCP1">Goal 1</Label>
                                    <Input type="textarea" id="clientCCP1" name="clientCCP1">
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label for="clientCCP1Date">Target Date:</Label>
                                    <Input type="date" id="clientCCP1Date" name="clientCCP1Date">
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="clientCCP1AS">Client’s Action Steps</Label>
                                    <Input type="textarea" id="clientCCP1AS" name="clientCCP1AS">
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col md="6">
                                <FormGroup>
                                    <Label for="clientCCP1CM">Case Managers Action Steps</Label>
                                    <Input type="textarea" id="clientCCP1CM" name="clientCCP1CM">
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label>Goal Outcome:</Label>
                                    <Input type="select" id="clientCCP1GO" name="clientCCP1GO">
                                        <option> </option>
                                        <option>Goal Achieved</option>
                                        <option>Goal Continued</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="8">
                                <FormGroup>
                                    <Label for="clientCCP2">Goal 2</Label>
                                    <Input type="textarea" id="clientCCP2" name="clientCCP2">
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label for="clientCCP2Date">Target Date:</Label>
                                    <Input type="date" id="clientCCP2Date" name="clientCCP2Date">
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="clientCCP2AS">Client’s Action Steps</Label>
                                    <Input type="textarea" id="clientCCP2AS" name="clientCCP2AS">
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col md="6">
                                <FormGroup>
                                    <Label for="clientCCP2CM">Case Managers Action Steps</Label>
                                    <Input type="textarea" id="clientCCP2CM" name="clientCCP2CM">
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label>Goal Outcome:</Label>
                                    <Input type="select" id="clientCCP2GO" name="clientCCP2GO">
                                        <option> </option>
                                        <option>Goal Achieved</option>
                                        <option>Goal Continued</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="8">
                                <FormGroup>
                                    <Label for="clientCCP3">Goal 3</Label>
                                    <Input type="textarea" id="clientCCP3" name="clientCCP3">
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label for="clientCCP3Date">Target Date:</Label>
                                    <Input type="date" id="clientCCP3Date" name="clientCCP3Date">
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="clientCCP3AS">Client’s Action Steps</Label>
                                    <Input type="textarea" id="clientCCP3AS" name="clientCCP3AS">
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col md="6">
                                <FormGroup>
                                    <Label for="clientCCP3CM">Case Managers Action Steps</Label>
                                    <Input type="textarea" id="clientCCP3CM" name="clientCCP3CM">
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label>Goal Outcome:</Label>
                                    <Input type="select" id="clientCCP3GO" name="clientCCP3GO">
                                        <option> </option>
                                        <option>Goal Achieved</option>
                                        <option>Goal Continued</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="8">
                                <FormGroup>
                                    <Label for="clientCCP4">Goal 4</Label>
                                    <Input type="textarea" id="clientCCP4" name="clientCCP4">
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label for="clientCCP4Date">Target Date:</Label>
                                    <Input type="date" id="clientCCP4Date" name="clientCCP4Date">
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="clientCCP4AS">Client’s Action Steps</Label>
                                    <Input type="textarea" id="clientCCP4AS" name="clientCCP4AS">
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col md="6">
                                <FormGroup>
                                    <Label for="clientCCP4CM">Case Managers Action Steps</Label>
                                    <Input type="textarea" id="clientCCP4CM" name="clientCCP4CM">
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label>Goal Outcome:</Label>
                                    <Input type="select" id="clientCCP4GO" name="clientCCP4GO">
                                        <option>Goal Achieved</option>
                                        <option>Goal Continued</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="clientWholePersonRepSign">Case Manager Name</Label>
                                    <Input type="text" id="clientWholePersonRepSign" name="clientWholePersonRepSign">
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="clientWholePersonSign">Case Manager Signature</Label>
                                    <Input type="text" id="clientWholePersonSign" name="clientWholePersonSign">
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="clientWholePersonRepName">Clinician Name</Label>
                                    <Input type="text" id="clientWholePersonRepName" name="clientWholePersonRepName">
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="clientWholePersonRepSign">Clinician Signature</Label>
                                    <Input type="text" id="clientWholePersonRepSign" name="clientWholePersonRepSign">
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <p>
                                    <b>
                                        This confidential information is provided to you in accord with
                                        State and Federal laws and regulations including but not limited to applicable Welfare and Institutions Code, Civil Code
                                        and HIPAA Privacy Standards. Duplication of this information for further disclosure is prohibited without the prior written
                                        authorization of the patient/authorized representative to whom it pertains unless otherwise permitted by law.
                                    </b>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2">
                                <Button className="btn" color="secondary">
                                    Submit
                                </Button>
                            </Col>
                            {/*<Col md="2">
                                <Button className="btn" color="success">
                                    Unlock
                                </Button>
                            </Col>
                            <Col md={{ size: 2, offset: 8}}>
                            <Col md="2">
                                <Button className="btn" color="warning">
                                    Save Draft
                                </Button>
                            </Col>
                            <Col md="2">
                                <Button className="btn" color="danger">
                                    Clear Note
                                </Button>
                            </Col>*/}
                        </Row>
                    </div>
                    <br />
                    {/*<h5>Change Note color</h5>
                    <div className="button-group">
                        {colorsBg.map((colorbg) => (
                            <Button
                                color={colorbg.bg}
                                key={colorbg.bg}
                                size="sm"
                                onClick={() => dispatch(UpdateNote(noteDetails.id, 'color', `${colorbg.bg}`))}
                            >
                                {noteDetails.color === colorbg.bg ? (
                                    <i className="bi bi-check" />
                                ) : (
                                    <i className="bi bi-circle" />
                                )}
                            </Button>
                        ))}
                    </div>*/}
                </div>
            ) : (
                <div className="d-flex mt-3 p-4 flex-column align-items-center justify-content-center">
                    <i className="ti-agenda display-5" />
                    <h4 className="mt-2">Please select a Note or Add Note.</h4>
                </div>
            )}
        </div>
    );
};

export default CarePlanDetail;
