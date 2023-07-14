import {Card, CardBody, CardHeader} from 'reactstrap';
import TwoColumn from '../../../twoColumn/TwoColumn';
import './notes.scss';
import CarePlanList from "./CarePlanList";
import CarePlanDetail from "./CarePlanDetail";

const CarePlan = () => {
    return (
        <>
            <Card>
                <CardHeader>Coordinated Care Plan</CardHeader>
                <CardBody>
                    <TwoColumn
                        leftContent={
                            <>
                                <CarePlanList />
                            </>
                        }
                        rightContent={<CarePlanDetail />}
                    />
                </CardBody>
            </Card>
        </>
    );
};

export default CarePlan;
