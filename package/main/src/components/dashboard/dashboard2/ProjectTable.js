import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Input, Table, Button } from 'reactstrap';
import DashCard from '../dashboardCards/DashCard';
import {hhhSiteList} from '../../../data/arrayList';


const ProjectTable = () => {
    const [clients, setClients] = useState([]); // ✅ Store fetched clients
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSite, setSelectedSite] = useState(""); // ✅ Store selected site filter

    // 🔹 Fetch clients from backend
    useEffect(() => {
      const fetchClients = async () => {
        try {
          const response = await axios.get("http://localhost:3000/getClients"); // ✅ Adjust endpoint as needed
          setClients(response.data); // ✅ Store response data in state
          setLoading(false);
        } catch (err) {
          console.error("❌ Error fetching clients:", err);
          setError("Failed to load clients.");
          setLoading(false);
        }
      };

      fetchClients();
    }, []); // 🔹 Fetch data when component mounts

    // 🔹 Filter clients based on selected site
    const filteredClients = selectedSite
      ? clients.filter(client => client.clientSite === selectedSite)
      : clients;

    return (
      <DashCard
        title="Client Search"
        actions={
          <Input type="select" className="form-select" id="clientSearchSite"
            value={selectedSite}
            onChange={(e) => setSelectedSite(e.target.value)} // 🔹 Handle site selection 
          >
            <option value="">All Sites</option>
            {hhhSiteList.map((sitelist) => (
                <option value={sitelist}>{sitelist}</option>
            ))}
          </Input> 
        }
      >
        <div className="table-responsive">
        {loading ? (
          <p>Loading clients...</p> // 🔹 Show loading state
        ) : error ? (
          <p className="text-danger">{error}</p> // 🔹 Show error message
        ) : (
          <Table className="text-nowrap mt-n3 mb-0 align-middle custom-table" borderless>
            <thead>
              <tr>
                <th>Client</th>
                <th>Client ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.clientID} className="border-top">
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={client.clientAvatar || "https://via.placeholder.com/45"} // 🔹 Default avatar if missing
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0 fw-bold">{client.clientName}</h6>
                        <span className="text-muted fs-7">{client.clientSite}</span>
                      </div>
                    </div>
                  </td>
                  <td>{client.clientID}</td>
                  <td>
                    <Button block color="primary">Open</Button>
                  </td> 
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>  
    </DashCard>
  );
};

export default ProjectTable;
