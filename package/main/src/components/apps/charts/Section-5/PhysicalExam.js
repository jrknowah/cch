import React from "react";
import {
    Row,
    Col, Label, Input, Table
} from 'reactstrap';

const PhysicalExam = () => {

    return (

        <div className="form-body">
            <Row>
                <Col className="text-center">
                    <b><Label>PHYSICAL EXAM</Label></b>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Head</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No Deformities</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No evidence of recent trauma</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Skin</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Label for="">Color</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No rashes or eruptions</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No ulcerations</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Lymph Nodes</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Cervical, axillary, supraclavicular, &
                                inguinal nodes are not palpable</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>

                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Eyes</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Vision grossly intact</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Pupils: R mm L mm</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">PERRLA</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">EOM Intact</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Disc not elevated, margins distinct</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Vessels w/o narrowing or AV nicking</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No capillary aneurysms</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No hemorrhages or exudates</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                            <tr>
                                <th>Ears</th>
                                <th>Abnormal Findings/Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Input check inline type="checkbox" id="" name="" /> <Label for="">Symmetrical-No Deformities</Label>

                                </td>
                                <td><Input input type="text" id="" name=""/></td>
                            </tr>
                            <tr>
                                <td>
                                    <Input check inline type="checkbox" id="" name="" /> <Label for="">Canals clear</Label>

                                </td>
                                <td><Input input type="text" id="" name=""/></td>
                            </tr>
                            <tr>
                                <td>
                                    <Input check inline type="checkbox" id="" name="" /> <Label for="">Tympanic membranes intact</Label>

                                </td>
                                <td><Input input type="text" id="" name=""/></td>
                            </tr>
                            <tr>
                                <td>
                                    <Input check inline type="checkbox" id="" name="" /> <Label for="">Hearing grossly intact</Label>

                                </td>
                                <td><Input input type="text" id="" name=""/></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Nose</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No marked obstruction to airway</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Mucosa pink & moist</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Septum intact</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Oral Cavity</th>
                            <th>Abnormal Findings</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Mucosa pink & moist, no sores or leukoplakia</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No lymphoid hyperplasia</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Hygiene good, teeth in good condition</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Neck</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Supple</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Thyroid w/o mass/enlargement</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No venous distention</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Breast</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Symmetrical</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No masses or ulcerations</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Deferred</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No tenderness</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No discharge</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Back</th>
                            <th>Abnormal Findings</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No deformities of spine</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No CVA tenderness</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No muscle spasms</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Chest</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No deformities</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Lungs CTA</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Heart</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Normal rhythm and rate</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No murmurs, lifts, heaves, or thrills</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Abdomen</th>
                            <th>Abnormal Findings</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Soft, flat, nondistended</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No tenderness or rigidity</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No masses</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Normoactive Bowel Sounds</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No scars</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Extremities</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No clubbing or cyanosis</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No edema</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No deformities</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No open wounds</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Rectal</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No hemorrhoids</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Sphincter tone good</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Pelvic</th>
                            <th>Abnormal Findings</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No lesions of vulva</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No vaginal discharge</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Vaginal wall well supported</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Urethral meatus normal</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No lesions of cervix</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Fundus symmetrical, freely movable</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No adnexal masses or tenderness</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Male Genitalia</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No penile lesions</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Both testicles in scrotum</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No masses or swelling</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Neurological</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Language receptive and expressive</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Memory intact, oriented x</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Appropriate behavior</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Motor</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No weakness, normal strength</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Normal gait/stance</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    <Table className="align-middle">
                        <thead>
                        <tr>
                            <th>Sensory</th>
                            <th>Abnormal Findings/Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">No numbness or tingling</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        <tr>
                            <td>
                                <Input check inline type="checkbox" id="" name="" /> <Label for="">Sensation grossly intact</Label>

                            </td>
                            <td><Input input type="text" id="" name=""/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
};

export default PhysicalExam;
