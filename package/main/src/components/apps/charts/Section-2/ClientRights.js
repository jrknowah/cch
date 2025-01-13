import React from "react";
import {
    Col,
    Form, FormGroup,
    Input, Label,
    Row,
} from 'reactstrap';
import {crList} from "../../../../data/arrayList";

const ClientRights = () => {
    return (
        <div>
            <Form>
                <div className="form-body">
                    <Row>
                        <Col md="12">
                            {crList.map((list) => {
                                return (
                                    <div>
                                        {list} <br/> <br/>
                                    </div>
                                );
                            })}
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col md="12">
                            <FormGroup>
                                <Label for="patientRightsSig">Sign</Label>
                                <Input type="text" id="patientRightsSig" name="patientRightsSig"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    )
};
export default ClientRights;