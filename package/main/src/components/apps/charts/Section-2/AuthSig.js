import React, {useState} from "react";
import {
    Card,
    CardTitle,
    Button,
    Row,
    Col, ModalBody, ModalFooter, Modal,
} from 'reactstrap';
import ClientOrientation from "./ClientOrientation";
import ClientRights from "./ClientRights";
import ConsentForTreatment from "./ConsentForTreatment";
// import AuthToRelease from "./AuthToRelease";
import AuthForDisclosure from "./AuthForDisclosure";
import PrivacyPractice from "./PrivacyPractices";
import ReleasePHI from "./ReleasePHI";
import LAHMIS from "./LAHMIS";
import ResidencePolicy from "./ResidencePolicy";
import InterimHousingAgreement from "./InterimHousingAgreement";
import AdvCareAck from "./AdvCareAck";

const AuthSig = () => {
    const [coiModal, setCoiModalToggle] = useState(false);
    const newCoiModalToggle = () => {
        setCoiModalToggle(!coiModal);
    };
    const [crModal, setCRModalToggle] = useState(false);
    const crModalToggle = () => {
        setCRModalToggle(!crModal);
    };

    const [agreeModal, setAgreeModalToggle] = useState(false);
    const agreeModalToggle = () => {
        setAgreeModalToggle(!agreeModal);
    };

    const [resModal, setResModalToggle] = useState(false);
    const resModalToggle = () => {
        setResModalToggle(!resModal);
    };

    const [consentModal, setConsentModalToggle] = useState(false);
    const consentModalToggle = () => {
        setConsentModalToggle(!consentModal);
    };
    
    const [preScreenModal, setPreScreenModalToggle] = useState(false);
    const preScreenModalToggle = () => {
        setPreScreenModalToggle(!preScreenModal);
    };

    const [authModal, setAuthModalToggle] = useState(false);
    const authModalToggle = () => {
        setAuthModalToggle(!authModal);
    };

    const [discloseModal, setDiscloseModalToggle] = useState(false);
    const discloseModalToggle = () => {
        setDiscloseModalToggle(!discloseModal);
    };

    const [lahmisModal, setLahmisModalToggle] = useState(false);
    const lahmisModalToggle = () => {
        setLahmisModalToggle(!lahmisModal);
    };

    const [termModal, setTermModalToggle] = useState(false);
    const termModalToggle = () => {
        setTermModalToggle(!termModal);
    };

    const [advModal, setAdvModalToggle] = useState(false);
    const advModalToggle = () => {
        setAdvModalToggle(!advModal);
    };
    const [PHIModal, setPHIModalToggle] = useState(false);
    const PHIModalToggle = () => {
        setPHIModalToggle(!PHIModal);
    };
    return (
        <div>

            {/* --------------------------------------------------------------------------------*/}
            <Row>
                 <Col md="4">
                    <Card body className="text-center">
                        <CardTitle tag="h5">Patient Orientation Information Sheet</CardTitle>
                        <Modal isOpen={coiModal} fade={false} toggle={newCoiModalToggle.bind(null)} size="lg">
                            <ModalBody>
                                <ClientOrientation />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={newCoiModalToggle.bind(null)}>
                                    Submit
                                </Button>
                                <Button color="secondary" onClick={newCoiModalToggle.bind(null)}>
                                    Clear
                                </Button>

                            </ModalFooter>
                        </Modal>
                        <div>
                            <Button onClick={setCoiModalToggle}>Open</Button>
                        </div>
                    </Card>
                </Col>
                <Col md="4">
                    <Card body className="text-center">
                        <CardTitle tag="h5">Client Rights</CardTitle>
                        <Modal isOpen={crModal} fade={false} toggle={crModalToggle.bind(null)} size="lg">
                            <ModalBody>
                                <ClientRights />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={crModalToggle.bind(null)}>
                                    Submit
                                </Button>
                                <Button color="secondary" onClick={crModalToggle.bind(null)}>
                                    Clear
                                </Button>
                            </ModalFooter>
                        </Modal>
                        <div>
                           <Button onClick={setCRModalToggle} >Open</Button>
                        </div>
                    </Card>
                </Col>
                <Col md="4">
                    <Card body className="text-center">
                        <CardTitle tag="h5">Consent for Treatment and Services</CardTitle>
                       <Modal isOpen={consentModal} fade={false} toggle={consentModalToggle.bind(null)} size="lg">
                            <ModalBody>
                                <ConsentForTreatment />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={consentModalToggle.bind(null)}>
                                    Submit
                                </Button>
                                <Button color="secondary" onClick={consentModalToggle.bind(null)}>
                                    Clear
                                </Button>

                            </ModalFooter>
                        </Modal>
                        <div>
                            <Button onClick={setConsentModalToggle}>Open</Button>
                        </div>
                    </Card>
                </Col>                
            </Row>
            <Row>
                <Col md="4">
                    <Card body className="text-center">
                        <CardTitle tag="h5">Housing Pre-Screen Form</CardTitle>
                       <Modal isOpen={preScreenModal} fade={false} toggle={preScreenModalToggle.bind(null)} size="lg">
                            <ModalBody>
                                <ConsentForTreatment />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={preScreenModalToggle.bind(null)}>
                                    Submit
                                </Button>
                                <Button color="secondary" onClick={preScreenModalToggle.bind(null)}>
                                    Clear
                                </Button>

                            </ModalFooter>
                        </Modal>
                        <div>
                            <Button onClick={setPreScreenModalToggle}>Open</Button>
                        </div>
                    </Card>
                </Col>
                <Col md="4">
                    <Card body className="text-center">
                        <CardTitle tag="h5">LA County Notice Of Private Practices</CardTitle>
                        <Modal isOpen={agreeModal} fade={false} toggle={agreeModalToggle.bind(null)} size="lg">
                            <ModalBody>
                                <PrivacyPractice />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={agreeModalToggle.bind(null)}>
                                    Submit
                                </Button>
                                <Button color="secondary" onClick={agreeModalToggle.bind(null)}>
                                    Clear
                                </Button>

                            </ModalFooter>
                        </Modal>
                        <div>
                            <Button onClick={setAgreeModalToggle}>Open</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                     <Card body className="text-center">
                         <CardTitle tag="h5">Client PHI Release</CardTitle>
                         <Modal isOpen={PHIModal} fade={false} toggle={PHIModalToggle.bind(null)} size="lg">
                             <ModalBody>
                                 <ReleasePHI />
                             </ModalBody>
                             <ModalFooter>
                                 <Button color="primary" onClick={PHIModalToggle.bind(null)}>
                                     Submit
                                 </Button>
                                 <Button color="secondary" onClick={PHIModalToggle.bind(null)}>
                                     Clear
                                 </Button>

                             </ModalFooter>
                         </Modal>
                         <div>
                             <Button onClick={setPHIModalToggle}>Open</Button>
                         </div>
                     </Card>
                </Col>
                <Col md="4">
                     <Card body className="text-center">
                         <CardTitle tag="h5">Rules of Residence & Security Policy</CardTitle>
                         <Modal isOpen={resModal} fade={false} toggle={resModalToggle.bind(null)} size="lg">
                             <ModalBody>
                                 <ResidencePolicy />
                             </ModalBody>
                             <ModalFooter>
                                 <Button color="primary" onClick={resModalToggle.bind(null)}>
                                     Submit
                                 </Button>
                                 <Button color="secondary" onClick={resModalToggle.bind(null)}>
                                     Clear
                                 </Button>
                             </ModalFooter>
                         </Modal>
                         <div>
                             <Button onClick={setResModalToggle}>Open</Button>
                         </div>
                     </Card>
                </Col>
                <Col md="4">
                    <Card body className="text-center">
                        <CardTitle tag="h5">Authorization To Share Information</CardTitle>
                       <Modal isOpen={authModal} fade={false} toggle={authModalToggle.bind(null)} size="lg">
                            <ModalBody>
                                <AuthForDisclosure />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={authModalToggle.bind(null)}>
                                    Submit
                                </Button>
                                <Button color="secondary" onClick={authModalToggle.bind(null)}>
                                    Clear
                                </Button>
                            </ModalFooter>
                        </Modal>
                        <div>
                            <Button onClick={setAuthModalToggle}>Open</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Card body className="text-center">
                        <CardTitle tag="h5">Termination Policy & Procedure</CardTitle>
                        <Modal isOpen={termModal} fade={false} toggle={termModalToggle.bind(null)} size="lg">
                            <ModalBody>
                                <InterimHousingAgreement />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={termModalToggle.bind(null)}>
                                    Submit
                                </Button>
                                <Button color="secondary" onClick={termModalToggle.bind(null)}>
                                    Clear
                                </Button>

                            </ModalFooter>
                        </Modal>
                        <div>
                            <Button onClick={setTermModalToggle}>Open</Button>
                        </div>
                    </Card>
                </Col>
                <Col md="4">
                    <Card body className="text-center">
                        <CardTitle tag="h5">Advance Healthcare Directive Form</CardTitle>
                        <Modal isOpen={advModal} fade={false} toggle={advModalToggle.bind(null)} size="lg">
                            <ModalBody>
                                <AdvCareAck />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={advModalToggle.bind(null)}>
                                    Submit
                                </Button>
                                <Button color="secondary" onClick={advModalToggle.bind(null)}>
                                    Clear
                                </Button>

                            </ModalFooter>
                        </Modal>
                        <div>
                            <Button onClick={setAdvModalToggle}>Open</Button>
                        </div>
                    </Card>
                </Col>
                <Col md="4" >
                    <Card body className="text-center">
                        <CardTitle tag="h5">Authorization Of Health & Social Service Information</CardTitle>
                        <Modal isOpen={discloseModal} fade={false} toggle={discloseModalToggle.bind(null)} size="lg">
                            <ModalBody>
                                <AuthForDisclosure />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={discloseModalToggle.bind(null)}>
                                    Submit
                                </Button>
                                <Button color="secondary" onClick={discloseModalToggle.bind(null)}>
                                    Clear
                                </Button>

                            </ModalFooter>
                        </Modal>
                        <div>
                            <Button onClick={setDiscloseModalToggle}>Open</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Card body className="text-center">
                        <CardTitle tag="h5">LA HMIS Consent</CardTitle>
                        <Modal isOpen={lahmisModal} fade={false} toggle={lahmisModalToggle.bind(null)} size="lg">
                            <ModalBody>
                                <LAHMIS />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={lahmisModalToggle.bind(null)}>
                                    Submit
                                </Button>
                                <Button color="secondary" onClick={lahmisModalToggle.bind(null)}>
                                    Clear
                                </Button>

                            </ModalFooter>
                        </Modal>
                        <div>
                            <Button onClick={setLahmisModalToggle}>Open</Button>
                        </div>
                    </Card>
                </Col>
                
            </Row>

        </div>
    );
};
export default AuthSig;