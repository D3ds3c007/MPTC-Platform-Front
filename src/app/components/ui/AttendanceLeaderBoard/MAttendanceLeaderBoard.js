'use client';
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { EmojiEvents } from '@mui/icons-material';
import { amber, grey, brown } from '@mui/material/colors';
import { Card, CardContent, TextField, Button } from '@mui/material';
import { MCard } from '../Card/MCard';
import axios from '@/app/lib/axiosInstance';

const columns = [
    {
        name: 'Rank',
        selector: row => row.rank,
        cell: row => (
            <div>
                {row.rank <= 3 ? (
                    <EmojiEvents
                        style={{
                            color: row.rank === 1 ? amber[700] : row.rank === 2 ? grey[500] : brown[400],
                        }}
                    />
                ) : (
                    row.rank
                )}
            </div>
        ),
        sortable: true,
    },
    {
        name: 'Employee Name',
        selector: row => row.staffName,
        sortable: true,
    },
    {
        name: 'Punctuality Score',
        selector: row => row.latenessCount,
        sortable: true,
    },
    {
        name: 'Total Absences',
        selector: row => row.absenceCount,
        cell: row => <span className="absence">{row.absenceCount}</span>,
        sortable: true,
    },
    {
        name: 'Overall Performance',
        selector: row => row.punctualityRating,
        sortable: true,
        cell: row => (
            <span className={row.punctualityRating.toLowerCase().replace(' ', '-')}>{row.punctualityRating}</span>
        ),
    }
];

const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#00119D',
            color: 'white',
            fontSize: '14px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
        },
    },
    rows: {
        style: {
            minHeight: '50px',
            '&:nth-of-type(odd)': {
                backgroundColor: '#f9f9f9',
            },
            '&:nth-of-type(even)': {
                backgroundColor: '#e9ecef',
            },
            '&:hover': {
                backgroundColor: '#dcdcdc',
            },
        },
    },
    cells: {
        style: {
            padding: '15px',
        },
    },
};

export default function MAttendanceLeaderboard() {
    const [search, setSearch] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [leaderboardData, setLeaderboardData] = useState([]);

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                //get leaderboard list using axios
                const response = await axios.get('/attendance/leaderboard');

                console.log(response.data);
                
                setLeaderboardData(response.data);

              
            } catch (error) {
                console.error('Error fetching leaderboard data:', error);
            }
        };

        fetchData();
    }, []);

    // Filter function to handle the search and month filtering logic
    const filteredData = leaderboardData.filter(item => {
        const matchesSearch = item.staffName.toLowerCase().includes(search.toLowerCase());
        // const itemMonth = new Date(item.date).getMonth() + 1; // Month is zero-indexed
        // const matchesMonth = !selectedMonth || itemMonth === parseInt(selectedMonth);

        return matchesSearch;
    });

    return (
        <MCard style={{ margin: '20px auto', maxWidth: '1000px' }} title='Top Employee Attendance Leaderboard'>
            {/* Filters: Month Selection and Search */}
            <div style={{ marginBottom: '20px', display: 'flex' }}>
                <TextField
                    style={{ flex: 1, marginRight: '10px' }}
                    select
                    label="Select Month"
                    value={selectedMonth}
                    onChange={e => setSelectedMonth(e.target.value)}
                    SelectProps={{ native: true }}
                >
                    <option value="">All Months</option>
                    {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {new Date(0, i).toLocaleString('default', { month: 'long' })}
                        </option>
                    ))}
                    
                </TextField>
                <TextField
                    style={{ flex: 1 }}
                    label="Search by Employee Name"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            {/* Data Table */}
            <DataTable
                columns={columns}
                data={filteredData}
                customStyles={customStyles}
                highlightOnHover
                pagination
            />

            <style jsx>{`
                .absence {
                    color: #ff4d4d;
                    font-weight: bold;
                }

                .excellent {
                    color: #4CAF50;
                    font-weight: bold;
                }

                .very-good {
                    color: #66bb6a;
                    font-weight: bold;
                }

                .good {
                    color: #ffca28;
                    font-weight: bold;
                }

                .fair {
                    color: #ffa726;
                    font-weight: bold;
                }

                .average {
                    color: #f44336;
                    font-weight: bold;
                }
            `}</style>
        </MCard>
    );
}
