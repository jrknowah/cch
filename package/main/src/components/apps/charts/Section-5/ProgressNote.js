import React from 'react';
import {Card, CardBody} from 'reactstrap';
import TwoColumn from '../../../twoColumn/TwoColumn';
import './notes.scss';
import NoteList from "./Notes/NoteList";
import NoteDetail from "./Notes/NoteDetail";

const ProgressNote = () => {
  return (
            <Card>
                <CardBody>
                    <TwoColumn
                        leftContent={
                            <>
                                <NoteList />
                            </>
                        }
                        rightContent={<NoteDetail />}
                    />
                </CardBody>
            </Card>
    
                      );
};

export default ProgressNote;
