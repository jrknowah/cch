import React from "react";
import {
    Col,
    Form, FormGroup,
    Input, Label,
    Row,
} from 'reactstrap';
import {ppcList} from "../../../../data/arrayList";

const ClientOrientation = () => {
    return (
        <div >
            <Form>

                <p>I, ___________  have reviewed and signed:</p>

                {/*<Row>*/}
                    {ppcList.map((list) => {
                        return (
                            <FormGroup>
                                <Input type="checkbox" id={list.ppcListTitle} />
                                <Label for="coiClientSign">{list.ppcListTitle}</Label>
                            </FormGroup>
                        );
                    })}
                {/*</Row>*/}
                <FormGroup>
                    <Input type="checkbox" id="clientAuthHI">Authorization for Use and/or Disclosure of Health Information</Input>
                    <Label for="coiClientSign">Authorization for Use and/or Disclosure of Health Information</Label>
                </FormGroup>
                <FormGroup>
                    <Input type="checkbox" id="clientAuthRel">Authorization for Release and Publication of Photograph, Art Work and/or Personal Information</Input>
                    <Label for="coiClientSign">Authorization for Release and Publication of Photograph, Art Work and/or Personal Information</Label>
                </FormGroup>

                <div className="form-body">
                    <Row className="text-center">
                        <Col md="6">
                            <FormGroup>
                                <Label for="coiClientSign">Client Signature</Label>
                                <Input type="text" id="coiClientSign" name="coiClientSign"></Input>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="coiStaff">Printed Name of Staff Providing</Label>
                                <Input type="text" id="coiStaff" name="coiStaff"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    )
};
export default ClientOrientation;