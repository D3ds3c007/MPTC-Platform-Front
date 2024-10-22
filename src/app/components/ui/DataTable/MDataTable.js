import React, { useState, useEffect, useRef } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

// Helper function to format date as yyyy-MM-dd
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-CA', options);
};

// Helper function to remove seconds and milliseconds from time
const formatTime = (timeString) => {
  if (!timeString) return 'N/A';
  const time = new Date(`1970-01-01T${timeString}`);
  return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// Updated sample data with descriptive remark text
const productsData = [
  { id: 1, staffName: '58', recordDate: '2024-10-18 15:34:27.914672+03', timeIn: '16:05:57.843039', timeOut: '16:08:42.990473', remark: 'Regular check-in/out procedure' },
  { id: 2, staffName: '59', recordDate: '2024-10-08 15:34:30.960518+03', timeIn: '08:05:59.529781', timeOut: '16:08:26.489489', remark: '' },
  { id: 6, staffName: '59', recordDate: '2024-10-22 08:16:53.44807+03', timeIn: '08:16:53.448127', timeOut: '', remark: '' },
  { id: 7, staffName: '59', recordDate: '2024-10-22 08:16:53.556031+03', timeIn: '09:45:54.497772', timeOut: '08:22:05.215314', remark: '' },
  { id: 8, staffName: '58', recordDate: '2024-10-22 08:32:50.844841+03', timeIn: '08:32:50.844949', timeOut: '', remark: '' },
];

const columns = [
  {
    name: 'ID',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'Staff Name',
    selector: row => row.staffName,
    sortable: true,
  },
  {
    name: 'Record Date',
    selector: row => formatDate(row.recordDate), // Format the date
    sortable: true,
  },
  {
    name: 'Clock In',
    selector: row => formatTime(row.timeIn), // Format the time
    cell: (row) => <span style={{ color: 'green' }}>{formatTime(row.timeIn)}</span>, // Color ClockIn green
    sortable: true,
  },
  {
    name: 'Clock Out',
    selector: row => formatTime(row.timeOut), // Format the time
    cell: (row) => <span style={{ color: 'red' }}>{formatTime(row.timeOut)}</span>, // Color ClockOut red
    sortable: true,
  },
  {
    name: 'Remark',
    selector: row => row.remark,
    cell: (row) => <RemarkCell remark={row.remark} />,
    sortable: true,
  },
  {
    name: 'Actions',
    cell: (row) => <ActionMenu row={row} />,
  },
];

// Component for displaying remark with "See More" option
const RemarkCell = ({ remark }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {isExpanded ? (
        <>
          <span>{remark}</span>
          <a onClick={toggleExpand} style={{ color: 'blue', marginLeft: '5px' }}>
            See Less
          </a>
        </>
      ) : (
        <>
          <span>{remark.length > 50 ? `${remark.substring(0, 50)}...` : remark}</span>
          {remark.length > 50 && (
            <a onClick={toggleExpand} style={{ color: 'blue', marginLeft: '5px' }}>
              See More
            </a>
          )}
        </>
      )}
    </div>
  );
};

// Component for the action menu (three dots and dropdown)
const ActionMenu = ({ row }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Handle clicks outside the dropdown to close it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownVisible]);

  const handleEditProduct = () => {
    alert(`Edit Entry for ID: ${row.id}`);
    setDropdownVisible(false); // Close the dropdown after clicking edit
  };

  return (
    <div ref={dropdownRef} style={{ display: 'inline-block' }}>
      {/* Three-dot button */}
      <button
        onClick={handleToggleDropdown}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
        }}
        aria-label="Toggle menu"
      >
        <i className="bi bi-three-dots"></i>
      </button>

      {/* Dropdown menu */}
      {dropdownVisible && (
        <div
          style={{
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            padding: '5px',
            display: 'inline-block', // No absolute positioning
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            marginTop: '8px',
          }}
        >
          <button
            onClick={handleEditProduct}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '5px 10px',
              display: 'block',
              width: '100%',
              textAlign: 'left',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            Edit
          </button>
          {/* Add other options here */}
        </div>
      )}
    </div>
  );
};

const customStyles = {
  table: {
    style: {
      borderRadius: '12px',
      overflow: 'hidden',
      marginTop:'20px'
    },
  },
  headRow: {
    style: {
      borderRadius: '12px 12px 0 0',
    },
  },
  rows: {
    style: {
      marginBottom: '5px',
    },
  },
};

export function MDataTable() {
  const [filterText, setFilterText] = useState('');
  const [dateFilter, setDateFilter] = useState(''); // State for date filter
  const [data, setData] = useState(productsData);

  // Handle filtering by staff name and record date
  const filteredItems = data.filter(item => {
    const matchesStaffName = item.staffName && item.staffName.toLowerCase().includes(filterText.toLowerCase());
    const matchesDate = item.recordDate && item.recordDate.startsWith(dateFilter); // Check if recordDate starts with the input date
    return matchesStaffName && (dateFilter === '' || matchesDate);
  });

  // Prepare data for CSV download
  const csvData = data.map(item => ({
    ID: item.id,
    StaffName: item.staffName,
    RecordDate: formatDate(item.recordDate), // Format the date
    ClockIn: formatTime(item.timeIn), // Format the time
    ClockOut: formatTime(item.timeOut), // Format the time
    Remark: item.remark,
  }));

  // Handle adding new entry (you can replace this with a form/modal)
  const handleAddEntry = () => {
    alert('Add New Entry Feature');
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Filter and Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Filters */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* Staff Name Filter */}
          <input
            type="text"
            placeholder="Filter by Staff Name"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <div style={{ position: 'relative' }}>
            <input
              type="date"
              placeholder="Filter by Record Date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            
           
          </div>
        </div>
        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* CSV Download Button */}
          <CSVLink
            data={csvData}
            filename={"staff_records.csv"}
            className="btn"
            style={{
              backgroundColor: '#E91112', // Change the color of the CSV button
              color: '#fff',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
            target="_blank"
          >
            <i className="bi bi-download" style={{ marginRight: '8px' }}></i>
            Download CSV
          </CSVLink>
          {/* Add New Entry Button */}
          <button onClick={handleAddEntry} style={{ backgroundColor: '#00119D', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '5px' }}>
            <i className="bi bi-plus-circle" style={{ marginRight: '8px' }}></i>
            Add New Entry
          </button>
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        highlightOnHover
        customStyles={customStyles}
        defaultSortFieldId={1}
      />

      {/* Hidden input field for demo purposes */}
      <input type="hidden" name="Id" value={1} />
    </div>
  );
}

export default MDataTable;
