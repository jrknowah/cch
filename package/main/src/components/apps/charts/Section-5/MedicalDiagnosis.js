import React, { useState } from "react";


function MedicalDiagnosis() {
    const [rows, setRows] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [showModal, setShowModal] = useState(false);

    const addRow = () => {
        const newRow = {
            id: Date.now(),
            name,
            age,
        };

        setRows([...rows, newRow]);
        setName('');
        setAge('');
        setShowModal(false);
    };

    const deleteRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };

    return (
        <div className="container">
            <h3>React Js Add & Delete Table Row Dynamically</h3>
            <button class='Add-button' onClick={() => setShowModal(true)}>Add Row</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>
                            &times;
                        </span>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <button className='save-button' onClick={addRow}>Save</button>
                        <button className='close-button' onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                            <td>
                                <button className='delete-button ' onClick={() => deleteRow(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default MedicalDiagnosis;