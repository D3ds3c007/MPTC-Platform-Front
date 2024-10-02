'use client';
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import styles from './MEmployeeTable.module.css';
import Image from 'next/image';
import picture1 from './picture1.png';

// Sample employee data
const employees = [
    {
        picture: picture1, // Placeholder for employee's profile picture
        name: "Johnas",
        matriculeID: "A-1012",
        role: "Professor",
        venue: "Andranobeva"
    },
    {
        picture: picture1, // Placeholder for employee's profile picture
        name: "John Doe",
        matriculeID: "B-3789",
        role: "Professor",
        venue: "Andranomena"
    },
    // Add more employees here
];

// Column definition for DataTable
const columns = (onRowClick) =>  [
    {
        name: "Picture",
        selector: (row) => <Image src={row.picture} alt="Profile" className={styles.profilePicture} />,
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
    },
    {
        name: "ID",
        selector: (row) => row.matriculeID,
        sortable: true,
    },
    // {
    //     name: "Venue",
    //     selector: (row) => <b>{row.venue}</b>,
    //     sortable: true,
    //     width: '150px',
    // },
];

export  function MEmployeeTable({ onEmployeeSelect }) {
    const [filterText, setFilterText] = useState("");
    
    // Filter employees based on search input
    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(filterText.toLowerCase())
    );

    const handleRowClick = (row) => {
        onEmployeeSelect(row.matriculeID);
    };

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
                columns={columns(handleRowClick)}
                data={filteredEmployees}
                noHeader
                highlightOnHover
                striped
                customStyles={customStyles} // Apply custom styles for header and table
                onRowClicked={handleRowClick}
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
        },
    },
};
