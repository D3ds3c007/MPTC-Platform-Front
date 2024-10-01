'use client';
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import styles from './MEmployeeTable.module.css';

// Sample employee data
const employees = [
    {
        picture: '/path/to/picture1.png', // Placeholder for employee's profile picture
        name: "John Doe",
        matriculeID: "A-1012",
        role: "Professor",
        venue: "Andranobeva"
    },
    {
        picture: '/path/to/picture2.png', // Placeholder for employee's profile picture
        name: "John Doe",
        matriculeID: "A-1012",
        role: "Professor",
        venue: "Andranomena"
    },
    // Add more employees here
];

// Column definition for DataTable
const columns = [
    {
        name: "Picture",
        selector: (row) => <img src={row.picture} alt="Profile" className={styles.profilePicture} />,
        sortable: false,
        width: '100px',
    },
    {
        name: "Name",
        selector: (row) => (
            <>
                <div>{row.name}</div>
                <small>{row.role}</small>
            </>
        ),
        sortable: true,
        width: '200px',
    },
    {
        name: "ID",
        selector: (row) => row.matriculeID,
        sortable: true,
        width: '150px',
    },
    // {
    //     name: "Venue",
    //     selector: (row) => <b>{row.venue}</b>,
    //     sortable: true,
    //     width: '150px',
    // },
];

export  function MEmployeeTable() {
    const [filterText, setFilterText] = useState("");
    
    // Filter employees based on search input
    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div className={`col-5 ${styles.tableContainer}`}>
            <h2 className={styles.title}>Employees</h2>
            
            <div className={styles.searchBox}>
                <input
                    type="text"
                    placeholder="Search ..."
                    className={styles.searchInput}
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />
            </div>

            <DataTable
                columns={columns}
                data={filteredEmployees}
                noHeader
                highlightOnHover
                striped
                pagination
                customStyles={customStyles} // Apply custom styles for header and table
            />
        </div>
    );
}

// Custom styles for DataTable
const customStyles = {
    headCells: {
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#9C27B0', // Purple header text like in the image
            textTransform: 'uppercase',
            borderBottom: '2px solid #e0e0e0',
            padding: '10px 15px',
        },
    },
    rows: {
        style: {
            minHeight: '72px', // Set row height
            borderBottom: '1px solid #e0e0e0',
        },
    },
    cells: {
        style: {
            fontSize: '14px',
            padding: '10px 15px',
        },
    },
};
