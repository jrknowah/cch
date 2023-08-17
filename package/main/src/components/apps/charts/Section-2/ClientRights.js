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
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label for="coiClientSign">Client Signature</Label>
                                <Input type="text" id="coiClientSign" name="coiClientSign"></Input>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="coiClientSign">Staff Signature </Label>
                                <Input type="text" id="coiClientSign" name="coiClientSign"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    )
};
export default ClientRights;