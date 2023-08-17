import React from "react";
// import {BrowserRouter} from "react-router-dom";
import {
    Form, FormGroup,
    Input, Label,
    Row
} from 'reactstrap';
import { } from "../../../../data/arrayList";


const CalAim = () => {
    return (
        <div>
            <Row className="text-center">
                <Label><b>Verbal Consent to Participate in the LA County CalAIM Program</b></Label>
            </Row>
            <Form>
                <p>
                    Los Angeles (LA) County has a new program called CalAIM that will help expand housing/services that are available to unhoused individuals. We invite you to participate in this program.
                </p>
                <p>
                    If you participate in CalAIM, you may receive additional services. In some cases, the CalAIM program covers the cost of services you are already receiving or may receive in the future.
                </p>
                <p>
                    Your participation in CalAIM is voluntary. You have the right to refuse services or opt out any time. Enrollment in CalAIM will NOT impact the housing/services you currently receive or might receive in the future. LA County will determine if you are eligible and will complete all the necessary requirements.
                </p>
                <p>
                    DHS will not charge you for the extra services. You will not be paid to participate.
                </p>

                <div className="form-body">
                    <p>
                        <FormGroup check>
                            <Input type="checkbox" id="" name=""></Input>
                            Do you acknowledge we have explained the CalAIM program to you?
                        </FormGroup>
                    </p>
                    <p>
                        <FormGroup check>
                            <Input type="checkbox" id="" name=""></Input>
                            Do you understand the terms of voluntary participation?
                        </FormGroup>
                    </p>
                    <p>
                        <FormGroup check>
                            <Input type="checkbox" id="" name=""></Input>
                            Do you agree to participate in the CalAIM [indicate program name: Housing Navigation, Tenancy and Sustaining Services, or Recuperative Care]?
                        </FormGroup>
                    </p>
                    <p>
                        <FormGroup check>
                            <Input type="checkbox" id="" name=""></Input>
                            If you agree to the CalAIM Housing Navigation participation, do you also agree to participate in [indicate program name: Housing Navigation, Tenancy and Sustaining Services, or Recuperative Care] when you become eligible for those services?
                        </FormGroup>
                    </p>

                </div>
            </Form>
        </div>
    )
};
export default CalAim;