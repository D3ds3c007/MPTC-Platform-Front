"use client";

import { useState, useEffect } from "react";
import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MAddButton } from "@/app/components/ui/AddButton/MAddButton";
import { MFilter } from "@/app/components/ui/Filter/MFilter";
import { MLoading } from '@/app/components/ui/Loading/MLoading';
import { MFolderCardNa } from '@/app/components/ui/FolderCardNa/MFolderCardNa';
import { MSearchBar } from "@/app/components/ui/SearchBar/MSearchBar";
import { MViewFolder } from "@/app/components/ui/ViewFolder/MViewFolder";
import { set } from "react-hook-form";

export default function ExamPage() {
  const [exams, setExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);

  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("folder");

  const handleViewModeChange = (view) => {
    setViewMode(view);  // Update the view mode state in the parent
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5193/api/v1/Exam/list'); // Update the URL if needed
        const data = await response.json();

        console.log("Data fetched:", data);
        setExams(data); // Assuming `data` is an array of exams
        setFilteredExams(data);

        localStorage.setItem('examsData', JSON.stringify(data));

      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    }
    fetchData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  
    if (term.trim() !== "") {
      // Apply filter only if there's input
      applyFilters(term, exams);
    } else {
      // Reset to all exams when search is cleared
      setFilteredExams(exams);
    }
  };

  const handleFilter = (filteredData) => {
    setSearchTerm("");           // 🔄 Clear the search bar
    setFilteredExams(filteredData);  // Apply the selected filter
  };

  const applyFilters = (term, data) => {
    const filtered = data.filter((exam) =>
      exam.subject.toLowerCase().includes(term.toLowerCase()) ||
      exam.level.toLowerCase().includes(term.toLowerCase()) ||
      exam.period.toLowerCase().includes(term.toLowerCase()) ||
      exam.session.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredExams(filtered);
  };
  
  return (
    <div className="col-md-12">
      <MCard title="Exam Folders">
        
          {loading ? (
            <MLoading />
          ) : (
            <>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: '1.2em',
                  padding: '5px',
                  justifyContent: 'flex-end',
                }}
              >
                <MSearchBar onSearch={handleSearch} />
                <MFilter files={exams} onFilter={handleFilter} />
                <MViewFolder onFilter={handleViewModeChange} />
              </div>
              
              <br></br>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: '1.2em',
                  padding: '5px',
                }}
              >
                {/* {exams.map((exam) => (
                  <MFolderCard key={exam.idExam} level={exam.level} session={exam.session} subject={exam.subject} period={exam.period} />
                ))} */}
                {filteredExams.map((exam, index) => {  // ✅ Corrected to filteredExams
                  const variant = ['primary', 'secondary', 'purple', 'dark', 'success'][index % 5];
                  return (
                    <MFolderCard 
                      key={exam.idExam} 
                      exam={exam} 
                      variant={variant}
                    />
                  );
                })}
              {/* <MFolderCardNa></MFolderCardNa> */}

              </div>
            </>
          )}

          

<div style={{ display: 'flex', flexDirection: 'column', gap: '1.2em' }}>
  {viewMode === "folder" && (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2em' }}>
      {filteredExams.map((exam, index) => {
        const variant = ['primary', 'secondary', 'purple', 'dark', 'success'][index % 5];
        return (
          <MFolderCard 
            key={exam.idExam} 
            exam={exam} 
            variant={variant}
          />
        );
      })}
    </div>
  )}

  {viewMode === "table" && (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Level</th>
          <th>Period</th>
          <th>Session</th>
        </tr>
      </thead>
      <tbody>
        {filteredExams.map((exam) => (
          <tr key={exam.idExam}>
            <td>{exam.subject}</td>
            <td>{exam.level}</td>
            <td>{exam.period}</td>
            <td>{exam.session}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}

  {viewMode === "list" && (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {filteredExams.map((exam) => (
        <li key={exam.idExam} style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
          {exam.subject} - {exam.level} - {exam.period} - {exam.session}
        </li>
      ))}
    </ul>
  )}
</div>

          <a href="exam/create">
            <MAddButton />
          </a>



      </MCard>
    </div>
  );
}
