import React from 'react';
import { Input, Table, Button } from 'reactstrap';
import user1 from '../../../assets/images/users/user2.jpg';
// import user2 from '../../../assets/images/users/user2.jpg';
// import user3 from '../../../assets/images/users/user3.jpg';
// import user4 from '../../../assets/images/users/user4.jpg';
// import user5 from '../../../assets/images/users/user5.jpg';
import DashCard from '../dashboardCards/DashCard';
import {hhhSiteList} from '../../../data/arrayList';

const tableData = [
  {
    isActive: 'active',
    clientAvatar: user1,
    clientName: 'Jared Crest',
    clientSite: 'Northridge',
    clientID: '1234545',
  }
  // ,
  // {
  //   isActive: '',
  //   clientAvatar: user2,
  //   clientName: 'Client 2',
  //   clientSite: 'Cabrillo',
  //   clientID: '1234545',
  // },
  // {
  //   isActive: '',
  //   clientAvatar: user3,
  //   clientName: 'Client 3',
  //   clientSite: 'Downey',
  //   clientID: '1234545',
  // },
  // {
  //   isActive: '',
  //   clientAvatar: user4,
  //   clientName: 'Client 4',
  //   clientSite: '41st',
  //   clientID: '1234545',
  // },
  // {
  //   isActive: '',
  //   clientAvatar: user5,
  //   clientName: 'Client 5',
  //   clientSite: 'South Harmony',
  //   clientID: '1234545',
  // },
  // {
  //   isActive: '',
  //   clientAvatar: user1,
  //   clientName: 'Client 6',
  //   clientSite: 'Arroyo',
  //   clientID: '1234545',
  // },
];

const ProjectTable = () => {
  return (
    <DashCard
      title="Client Search"
      actions={
        <Input type="select" className="form-select" id="clientSearchSite">
          {hhhSiteList.map((sitelist) => (
              <option value={sitelist}>{sitelist}</option>
          ))}
        </Input>
      }
    >
      <div className="table-responsive">
        <Table className="text-nowrap mt-n3 mb-0 align-middle custom-table" borderless>
          <thead>
            <tr>
              <th>Client</th>
              <th>Client ID</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((tdata) => (
              <tr key={tdata.clientName} className={`border-top ${tdata.isActive}`}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={tdata.clientAvatar}
                      className="rounded-circle"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0 fw-bold">{tdata.clientName}</h6>
                      <span className="text-muted fs-7">{tdata.clientSite}</span>
                    </div>
                  </div>
                </td>
                <td>{tdata.clientID}</td>
                <td><Button block color="primary">Open </Button></td> 
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </DashCard>
  );
};

export default ProjectTable;
