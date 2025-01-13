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

                <center><p>I have reviewed and signed:</p></center>

                {/*<Row>*/}
                    {ppcList.map((list) => {
                        return (
                            <FormGroup check>
                                <Input type="checkbox" id={list.ppcListTitle} />
                                <Label for="coiClientSign">{list.ppcListTitle}</Label>
                            </FormGroup>
                        );
                    })}
                {/*</Row>*/}
                <FormGroup check>
                    <Input type="checkbox" id="clientAuthHI">Authorization for Use and/or Disclosure of Health Information</Input>
                    <Label for="coiClientSign">Authorization for Use and/or Disclosure of Health Information</Label>
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" id="clientAuthRel">Authorization for Release and Publication of Photograph, Art Work and/or Personal Information</Input>
                    <Label for="coiClientSign">Authorization for Release and Publication of Photograph, Art Work and/or Personal Information</Label>
                </FormGroup>

                <div className="form-body">
                    <Row className="text-center">
                        <Col md="12">
                            <FormGroup>
                                <Label for="clientOrientInfoSig">Sign</Label>
                                <Input type="text" id="clientOrientInfoSig" name="clientOrientInfoSig"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    )
};
export default ClientOrientation;