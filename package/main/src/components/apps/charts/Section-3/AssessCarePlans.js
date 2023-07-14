import React from "react";
import {
    Row,
} from 'reactstrap';
import {acpList} from "../../../../data/arrayList";

const AssessCarePlans = () => {
    return (
        <div className="p-4">
            <Row>
                {acpList.map((list) => {
                    if (list.acpListDate==="") {
                        return (
                            <i className="bi-check-circle-fill" id={list.acpListTitle}>{list.acpListTitle}</i>
                        );
                    }
                    return (
                        <i className="bi-check-circle" id={list.acpListTitle}>{list.acpListTitle}</i>
                    );
                })}
            </Row>

        </div>

    );
};

export default AssessCarePlans;
