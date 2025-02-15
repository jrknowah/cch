import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, FormGroup, Button, Label, Row, Col } from 'reactstrap';
import { addNote } from '../../../../store/apps/notes/NotesSlice';
import { encTypeList, hhhSiteList } from "../../../../data/arrayList";

require('moment/locale/fr');
require('moment/locale/de');
require('moment/locale/en-gb');

const EncounterNoteDetail = () => {
    const { notes, notesContent } = useSelector((state) => state.notesReducer);
    const noteDetails = notes[notesContent - 1];
    const id = notes.length + 1;

    const dispatch = useDispatch();

    const handleNote = (e) => {
        e.preventDefault();
        dispatch(addNote(id, 'New Note', 'primary'));
    };

    // Function to render options for select elements
    const renderSelectOptions = (list) => {
        return list.map((listItem) => (
            <option key={listItem} id={listItem}>
                {listItem}
            </option>
        ));
    };
    

    if (!noteDetails || noteDetails.deleted) {
        return (
            <div className="d-flex mt-3 p-4 flex-column align-items-center justify-content-center">
                <i className="ti-agenda display-5" />
                <h4 className="mt-2">Please select a Note or Add Note.</h4>
                <Button className="btn btn-success ms-auto" size="sm" onClick={handleNote}>
                    New Note
                </Button>

            </div>
        );
    }

    return (
        <div>
            <div className="border-bottom p-3 text-end">
                <Button className="btn btn-success ms-auto" size="sm" onClick={handleNote}>
                    New Note
                </Button>
            </div>
            <div className="p-4">
                <div className="form-body">
                    <Row>
                        <Col md="3">
                            <div>Note Date:</div>
                            <FormGroup>
                                <Input type="date" defaultValue="" />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <div>Note Type:</div>
                            <FormGroup>
                                <Input type="select">
                                    {renderSelectOptions(encTypeList)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <div>HFH:</div>
                            <FormGroup>
                                <Input type="text" defaultValue="" />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <div>Agency:</div>
                            <FormGroup>
                                <Input type="select">
                                    {renderSelectOptions(hhhSiteList)}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <Label for="clientNote">Note</Label>
                                <Input type="textarea" id="clientNote" name="clientNote" rows="20" />
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
                            <Button className="btn" color="secondary">Submit & Lock</Button>
                        </Col>
                        <Col md="2">
                            <Button className="btn" color="success">Unlock</Button>
                        </Col>
                        <Col md="2">
                            <Button className="btn" color="warning">Save Draft</Button>
                        </Col>
                        <Col md="2">
                            <Button className="btn" color="danger">Clear Note</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default EncounterNoteDetail;
