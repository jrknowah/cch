import React from 'react';
// import Datetime from "react-datetime";
import { useSelector, useDispatch } from 'react-redux';
import {Input, FormGroup, Button, Label, Row, Col} from 'reactstrap';
import {  addNote } from '../../../../store/apps/notes/NotesSlice';
import {encTypeList, hhhSiteList} from "../../../../data/arrayList";

require('moment/locale/fr');
require('moment/locale/de');
require('moment/locale/en-gb');

const EncounterNoteDetail = () => {
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
                    Start New Note
                </Button>
            </div>
            {noteDetails && noteDetails.deleted === false ? (
                <div className="p-4">
                    <div className="form-body">
                        <Row>
                            <Col md="3">
                                Note Date:
                                <FormGroup>
                                    <Input type="date" defaultValue="" />
                                </FormGroup>
                                {/*Start Time:
                                <FormGroup>
                                    <Input type="time" defaultValue="time" />
                                </FormGroup>
                                F2F Minutes:
                                <FormGroup>
                                    <Input type="text" />
                                </FormGroup>
                                Documentation Minutes:
                                <FormGroup>
                                    <Input type="text" />
                                </FormGroup>*/}
                            </Col>
                            <Col md="3">
                                Note Type:
                                <FormGroup>
                                    <Input type="select">
                                        {encTypeList.map((list) => {
                                            return (
                                                <option id={list}>{list} </option>
                                            );
                                        })}
                                    </Input>
                                </FormGroup>
                                {/*End Time:
                                <FormGroup>
                                    <Input type="time" defaultValue="time" />
                                </FormGroup>
                                Non-F2F Minutes:
                                <FormGroup>
                                    <Input type="text" />
                                </FormGroup>
                                Total Minutes:
                                <FormGroup>
                                    <Input type="text" />
                                </FormGroup>*/}
                            </Col>
                            <Col md="3">
                               {/* Client Name :
                                <FormGroup>
                                    <Input type="text" defaultValue="" />
                                </FormGroup>*/}
                                HFH:
                                <FormGroup>
                                    <Input type="text" defaultValue="" />
                                </FormGroup>

                            </Col>
                            <Col md="3">
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
                            <Col md="12">
                                <FormGroup>
                                   {/* <Label for="clientNoteRAP">R-(Reasons For The Session)/n
                                        A-(What Did You Do Within The Session)
                                        P-(What do you plan to do in the next session)
                                    </Label>*/}
                                    <Label for="clientNoteRAP">RAP
                                    </Label>
                                    <Input type="textarea" id="clientNoteG" name="clientNoteG" rows="20">
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
                                    Submit & Lock
                                </Button>
                            </Col>
                            <Col md="2">
                                <Button className="btn" color="success">
                                    Unlock
                                </Button>
                            </Col>

                            <Col md="2">
                                <Button className="btn" color="warning">
                                    Save Draft
                                </Button>
                            </Col>
                            <Col md="2">
                                <Button className="btn" color="danger">
                                    Clear Note
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <br />

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

export default EncounterNoteDetail;
