import React, { useState, useEffect, useRef } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import axios from '@/app/lib/axiosInstance';


// Helper function to format date as yyyy-MM-dd
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('mg-MG', options);
};


//Helper function to extract time from date
const extractTime = (dateString) => {
  if (!dateString) return '';
  const time = new Date(dateString);
  return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export function MLogsRecord({ data, setLogData }) {

  const columns = [
    {
      name: 'Matricule',
      selector: row => row.matricule, 
      sortable: true,
      width: '150px'
    },
    {
      name: 'Staff Name',
      selector: row => row.firstName,
      sortable: true,
      width: '200px'
    },
    {
      name: 'Date',
      selector: row => formatDate(row.eventTime), 
      sortable: true,
      width: '150px'
    },
    {
      name: 'Time',
      selector: row => extractTime(row.eventTime), 
      sortable: true,
      width: '100px'
    },
    {
      name: 'Event Type',
      selector: row => row.eventType,
      cell: row => (
        <span
          style={{
            display: 'inline-block',
            padding: "5px",
            borderRadius: "0 4px 4px 0",
            color: row.eventType === 'ClockIn' ? 'green' : 'red',
            backgroundColor: row.eventType === 'ClockIn' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
          }}
        >
          {row.eventType}
        </span>
      ),
      sortable: true,
      width: '120px'
    },
  ];

  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const hasFetched = useRef(false);


  // useEffect(() => {
  //   const formattedData = data.map(item => ({
  //     ...item,
  //     eventType: item.timeIn ? "ClockIn" : "ClockOut"
  //   }));
  //   setData(productsData);
  //   setFilteredData(productsData);
  // }, [productsData]);

  useEffect(() => {
    if (hasFetched.current) {
        // Skip fetch if it's the initial render
        const fetchData = async () => {
            try {
                // setIsLoading(true);
                const response = await axios.get(`/attendance/activity-logs?date=${selectedDate}`);
                setLogData(response.data);

                console.log("data setted successfully");
            } catch (error) {
                console.error('Error fetching leaderboard data:', error);
            } finally {
                // setIsLoading(false);
            }
        };
        fetchData();
    } else {
        hasFetched.current = true; // Set to true after the initial render
    }
}, [selectedDate]);

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    filterData(value, dateFilter);
  };

  // Handle date filter change
  

  // Combined filter function
  const filterData = (search, date) => {
    const filtered = data.filter(item =>
      item.staffName.toLowerCase().includes(search.toLowerCase()) &&
      (!date || formatDate(item.recordDate) === date)
    );
    setFilteredData(filtered);
  };

  // // Prepare data for CSV download
  // const csvData = data.map(item => ({
  //   "Matricule": item.matricule,
  //   "Staff Name": item.staffName,
  //   "Date": formatDate(item.recordDate),
  //   "Time": formatTime(item.time),
  //   "Event Type": item.eventType,
  // }));

  return (
    <div style={{ padding: '20px' }}>
      {/* Action Buttons and Search Filter */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by Staff Name"
          value={searchText}
          onChange={handleSearch}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            width: '200px'
          }}
        />
        
        {/* Date Filter */}
        <input
          type="date"
          placeholder="Filter by Date"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            width: '150px',
            marginLeft: '10px'
          }}
        />

        {/* CSV Download Button */}
        {/* <CSVLink
          data={csvData}
          filename={"staff_records.csv"}
          className="btn"
          style={{
            backgroundColor: '#E91112',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            textDecoration: 'none',
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
          }}
          target="_blank"
        >
          <i className="bi bi-download" style={{ marginRight: '8px' }}></i>
          Download CSV
        </CSVLink> */}
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        defaultSortFieldId={1}
        fixedHeader={true}
        fixedHeaderScrollHeight='400px'
      />
    </div>
  );
}

export default MLogsRecord;
