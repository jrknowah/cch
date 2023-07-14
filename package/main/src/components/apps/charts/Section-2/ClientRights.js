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

                <p>
                    {crList.map((list) => {
                        return (
                            <div>
                                {list}
                            </div>
                        );
                    })}
                </p>
                <div className="form-body">
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label for="coiClientSign">Client Signature</Label>
                                <Input type="text" id="coiClientSign" name="coiClientSign"></Input>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="coiStaff">Client Printed Name</Label>
                                <Input type="text" id="coiStaff" name="coiStaff"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label for="coiClientSign">Staff Printed Name</Label>
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