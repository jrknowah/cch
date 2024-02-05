import React, { useState } from "react";


const MedicalDiagnosis = () => {
    const [rows, setRows] = useState([]);
  
    const addRow = () => {
      setRows([...rows, {
        name: '',
        age: '',
      }]);
    };
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={addRow}>Add Row</button>
      </div>
    );
  };
  
export default MedicalDiagnosis;