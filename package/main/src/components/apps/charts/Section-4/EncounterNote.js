import {Card, CardBody} from 'reactstrap';
import TwoColumn from '../../../twoColumn/TwoColumn';
import './notes.scss';
import EncounterNoteList from "./EncounterNoteList";
import EncounterNoteDetail from "./EncounterNoteDetail";

const EncounterNote = () => {
    return (
        <>
            <Card>
                <CardBody>
                    <TwoColumn
                        leftContent={
                            <>
                                <EncounterNoteList />
                            </>
                        }
                        rightContent={<EncounterNoteDetail />}
                    />
                </CardBody>
            </Card>
        </>
    );
};

export default EncounterNote;
