import React from "react";
import {
    Row,Form,FormGroup,Input,
    Label
} from 'reactstrap';


const PersonalInventory = () => {

    return (

        <div className="form-body">
            <Row className="text-center">
                <Form>
                    <Label>Please Select File to Upload</Label>
                    <FormGroup>
                        <Input type="file" name="file" id="exampleFile" />
                    </FormGroup>
                </Form>
            </Row>
        </div>
    );
};

export default PersonalInventory;
