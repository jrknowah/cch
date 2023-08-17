import React from "react";
// import {BrowserRouter} from "react-router-dom";
import {
    Col,
    FormGroup,
    Input, Label,
    Row
} from 'reactstrap';
import { } from "../../../../data/arrayList";


const ResidencePolicy = () => {
    return (
        <Row>
            <Label className="text-center"></Label>
            <Col md="12">
                <p>
                    <center><b>Rules of Residence & Security Policy</b><br/></center><br/>
                    Welcome to Serenity Recuperative Care. The Recuperative Care program’s focus is to provide a safe
                    and nurturing environment where you can recuperate from illness or injury and where you can
                    stabilize until you are able to transition into independent community living. The Serenity Recuperative
                    Care staff is committed to assisting you in developing the daily living and social skills necessary to
                    obtain and sustain permanent housing. The following rules were developed to assist you in developing
                    these skills while you transition to permanent housing.<br/>
                    <br/>


                    Serenity is committed to making your stay at as safe and comfortable as possible. In order to ensure the safety
                    of all patients the following rules have been established. Please understand that <b>any behavior or action
                    that threatens the health, safety, security, and/or welfare of other patients or staff will not
                    be accepted or tolerated.</b><br/><br/>
                    <italic>The Program reserves the right to refuse services to anyone</italic>
                    <br/><br/>

                    <center><b>SAFETY</b><br/></center>
                    To ensure the safety of all patients at Serenity Recuperative Care we have established a <b>NO
                    VIOLENCE POLICY.</b><br/>
                    <ol style={{ listStyleType: 'circle' }}>
                        <li>Violence is defined as any serious threats of violence, fighting, physical aggression
                    towards staff or patients, intimidation, or destruction of property.</li>
                        <li>If you feel that another patient has violated the No Violence Policy please inform any
                    Serenity staff to address the issue immediately.</li>
                    </ol>

                    <center><b>PERSONAL PROPERTY</b><br/></center>
                    Due to very limited space at the facility, Patients are limited to one large bag during their entire
                    length of stay.<br/>
                    <ol style={{ listStyleType: 'circle' }}>
                        <li>All personal property must fit within the dimensions of the locker. </li>
                        <li>Personal belongings are to be kept in your locker at all times. </li>
                        <li>Prior to admission your personal property will be screened. </li>
                        <li>Staff may request to search your locker at any time. </li>
                        <li>The Program will not be responsible for any personal items left after discharge. </li>
                        <li>All items will be disposed of within one day after discharge. </li>
                        <li>Once discharged, a client may not leave their personal items to be picked up at a later
                    date. </li>
                        <li>Serenity is not responsible for any lost or stolen items. </li>
                    </ol>

                    It is everyone’s responsibility to ensure the cleanliness of the facility.<br/>
                    <ol style={{ listStyleType: 'circle' }}>
                        <li>Sleeping areas need to cleaned and organized daily.</li>
                        <li>No accumulation of garbage, food, or stockpiling of items is allowed in your sleeping
                    area or locker.</li>
                        <li>Clean linen are provided as needed. All bedding should be changed on a weekly basis.</li>
                        <li>Please do not write, pin, tape or nail anything to the walls or lockers.</li>
                        <li>Food and drink products of any kind are to be eaten in the dining room only.</li>
                    </ol>

                    <center><b>VISITATION RULE</b><br/></center>
                    <ol style={{ listStyleType: 'circle' }}>
                        <li>Serenity Recuperative care visiting hours are from 10:00 am - 7:00 pm.</li>
                    </ol>
                    
                    <center><b>CURFEW RULE</b><br/></center>
                    <ol style={{ listStyleType: 'circle' }}>
                        <li>Patients are asked to return to Serenity Recuperative Care by 8:00 pm.</li>
                        <li>Patients who will be out past 8:00 pm will not be allowed back in the facility
                    until the next morning, and will need to meet with their Advocate to ensure the
                    status of their bed.</li>
                        <li>Patients can request a late pass for events, activities such as family
                    reunification, recovery meetings and church activities. Patients must request an
                    approved late pass by staff prior to leaving the facility with an expected time of
                    return.</li>
                    </ol>

                    <center><b>MEDICATION MANAGEMENT RULE</b><br/></center>
                    <ol style={{ listStyleType: 'circle' }}>
                        <li>During office hours staff is available to provide access to medications.</li>
                        <li>All medication is to be turned into staff for storage in a locked medication cabinet. You
                    will have access to your medications as prescribed.</li>
                        <li>Over the counter drugs, such as cough and cold medications, must also be turned in.<br/></li>
                        <li>Do not share medication with others.</li>
                        <li>Medication will be available at medication call as following:</li>
                        <ol style={{ listStyleType: 'disc' }}>
                            <li>8:00am Medication Call</li>
                            <li>11:30am Medication Call</li>
                            <li>5:00pm Medication Call</li>
                            <li>9:00pm Medication Call</li>
                        </ol>
                    </ol>

                    <center><b>SECURITY</b><br/></center>
                    <ol style={{ listStyleType: 'circle' }}>
                        <li>From 7:00 pm till 7:00 am staff will be on-site.</li>
                        <li>Security staff have no access to medications or to client records.</li>
                        <li>Security staff are available to ensure your safety and to contact 911 in case of emergency.</li>
                        <li>Security staff are not allowed to let you in and out of the property after 11:00 pm unless<br/>
                    you have an approved pass from the staff.</li>
                    </ol>

                    <center><b>MEALS</b><br/></center>
                    <ol style={{ listStyleType: 'circle' }}>
                    Meals include breakfast, lunch and dinner seven days a week.
                        <li>Breakfast will be served at 8:00 am</li>
                        <li>Lunch will be served at 12:00 pm</li>
                        <li>Dinner at 5:00 pm</li>
                        <li>Snack at 8:00 pm</li>
                        <li>Staff are unable to save meals for clients who are not present during serving hours.</li>
                        <li>There is no food storage (cabinets/refrigerator) or cooking of any kind in the dormitory area.</li>
                        <li>There is to be no food consumption in the TV area, dormitory, or common areas.</li>
                    </ol>

                    <center><b>BEHAVIORAL RULES</b><br/></center>
                    <ol style={{ listStyleType: 'circle' }}>
                        Quiet hours for the facility are between the hours of 10:00 pm and 7:00 am.
                        <li>Please use headphones to listening to your radio or computer during this time.</li>
                        <li>Please do not have conversations in the dorm area.</li>
                        <li>Please keep conversations on the patio and TV area to minimum.</li>
                        <li>Please try to keep the traffic noise in the hallways and bathrooms to a minimum.</li>
                    </ol>
                    <ol style={{ listStyleType: 'circle' }}>
                        Please be respectful of all Patients living at the Serenity Recuperative Care
                        <li>No borrowing or loaning money to any patients.</li>
                        <li>No illegal activities including theft, loan-sharking, prostitution/sex work, or selling<br/>
                    drugs on premises or to other patients.</li>
                        <li>No selling, distributing, or warehousing goods/products of any kind on the premises.</li>
                        <li>Recycling storage is not permitted on the premises.</li>
                        <li>No pornography, obscene pictures or sexually implicit books, pictures or items</li>
                        <li>No language that might be offensive to others including cussing, racial slurs, racial jokes, OR
                    inappropriate comments.</li>
                        <li>No weapons on, in, or around Serenity property.</li>
                        <li>Nude sleeping is not allowed. Patients must be clothed (e.g. nightgown, T-shirt, shorts, pajamas,
                    etc.) while sleeping.</li>
                        <li>Please be fully clothed when in common areas. You should not walk around the facility with
                    bare feet.</li>
                        <li>All patients must use the restroom facilities to change clothes. Do not change clothes in sleeping
                    areas.</li>               
                    </ol>

                    <ol style={{ listStyleType: 'circle' }}>
                        You are responsible for your own personal hygiene.
                        <li>Please be considerate of others regarding your personal hygiene.</li>
                        <li>Please do not use perfume or other heavily scented hygiene items which can negatively
                    impact oxygen-dependent members</li>
                        <li>If you are in need of personal items like shampoo, soap, deodorant, razors, toothbrush,
                    tooth paste, or feminine hygiene items please inform the staff. Every effort will be
                    made to provide you with the requested items when available.</li>
                    </ol>
                    
                    The Program offers supportive housing and advocacy services. You are required to use housing
                    services. If you are determined to reside in the Program without utilizing available services,
                    you may be linked to alternate housing and terminated from the Program.
                    <ol style={{ listStyleType: 'circle' }}>
                        <li>Smoking is only permitted in the designated patio area</li>
                        <li>Smoking is not permitted near oxygen tanks or oxygen concentrators.</li>
                        <li>Oxygen tanks and oxygen concentrators are not allowed in the designated smoking area
                    while smoking or while others are smoking.</li>
                        <li>All hand rolling of cigarettes must be done in the designated smoking area and NOT IN
                    RESIDENTIAL or PATIO AREA.</li>
                    </ol>
                    

                    Smoking is prohibited inside any building at the facility.<br/>

                    All clients are required to meet with their assigned Advocate at least twice a week to discuss
                    your housing transition plan and to monitor progress on goals and objectives<br/><br/>

                    All clients are encouraged to attend groups available at Serenity Recuperative Care. A
                    schedule of Life Skills, Health (Medication Management), exercise and other groups will be
                    posted in the community room and offices every month.<br/><br/>

                    Daily Housekeeping jobs are voluntary. If interested in volunteering for a daily housekeeping
                    job, please see staff prior to ensure that no one else is already responsible for that job.<br/><br/>

                    Please notify staff if you will be absent over night before you leave. If you are gone over
                    twenty-four (24) hours and fail to contact us <b>you may lose your bed space.</b><br/><br/>

                    After discharge, client will not be allowed to return to the Program without obtaining a new
                    approval by DHS.<br/><br/>

                    We ask that all Patients take a proactive approach in building a safe and healthy community. We ask
                    that you report violations of the above rules: All reports will be treated with anonymity and
                    confidentiality, unless a “duty to warn” is present.<br/><br/>

                    <b>Violations to the above rules may disciplinary action identified herein including but not limited
                    to verbal warnings, probationary resident contract, and/or termination or residency.</b><br/><br/>

                    I have read and understand all points of the Rules of Residence and Security Policy provided to me by
                    Serenity Recuperative Care. I acknowledge the receipt and review of such rules.<br/><br/>
                </p>
                <div className="form-body">
                    <Row className="text-center">
                        <Col md="6">
                            <FormGroup>
                                <Label for="cftClientName">Patient Signature</Label>
                                <Input type="text" id="cftClientName" name="cftClientName"></Input>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="cftStaffSign">Staff Signature</Label>
                                <Input type="text" id="cftStaffSign" name="cftStaffSign"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
};
export default ResidencePolicy;