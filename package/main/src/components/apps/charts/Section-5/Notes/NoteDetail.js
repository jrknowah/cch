import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, FormGroup, Button, Label, Col, Row } from 'reactstrap';
import { UpdateNote, addNote } from '../../../../../store/apps/notes/NursingSlice';

const NoteDetail = () => {
  const noteDetails = useSelector(
    (state) => state.notesReducer.notes[state.notesReducer.notesContent - 1],
  );
  const id = useSelector((state) => state.notesReducer.notes.length + 1);

  const dispatch = useDispatch();

  const handleNote = (e) => {
    e.preventDefault();
    dispatch(addNote(id, 'Enter Nursing Note Here', 'primary'));
  };

  return (
    <div>
      <div className="border-bottom p-3 text-end">
        <Button className="btn btn-success ms-auto" size="sm" onClick={handleNote}>
          Add New Note
        </Button>
      </div>
      {noteDetails && noteDetails.deleted === false ? (
        <div className="p-4">
          <FormGroup>
            <Label for="title1" tag="h5">
              Nursing Note
            </Label>
            <Input
              id="title1"
              name="title1"
              type="textarea"
              rows="5"
              value={noteDetails.title}
              onChange={(e) => dispatch(UpdateNote(noteDetails.id, 'title', e.target.value))}
            />
          </FormGroup>
          <Row>
          <Col md="2">
            <Button>Save Draft</Button>
          </Col>
          <Col md="3"> 
            <Button type="button" class="btn btn-danger">Submit Note</Button>
          </Col>
          </Row>  
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

export default NoteDetail;
