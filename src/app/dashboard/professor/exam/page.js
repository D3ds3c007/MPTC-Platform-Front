"use client";

import { useState, useEffect } from "react";
import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MAddButton } from "@/app/components/ui/AddButton/MAddButton";
import { MSearchBar } from "@/app/components/ui/SearchBar/MSearchBar";
import { MFilter } from "@/app/components/ui/Filter/MFilter";
import { MLoading } from '@/app/components/ui/Loading/MLoading';

export default function ExamPage() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5193/api/v1/Exam/list'); // Update the URL if needed
        const data = await response.json();

        console.log("Data fetched:", data);
        setExams(data); // Assuming `data` is an array of exams
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    }
    fetchData();
  }, []);

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
                <MSearchBar />
              </div>

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
                <MFilter selector="Level" />
                <MFilter selector="Year" />
                <MFilter selector="Period" />
              </div>

              <br />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: '1.2em',
                  padding: '5px',
                }}
              >
                {exams.map((exam) => (
                  <MFolderCard key={exam.idExam} level={exam.level} session={exam.session} subject={exam.subject} period={exam.period} />
                ))}
              </div>
            </>
          )}

          <a href="exam/create">
            <MAddButton />
          </a>

      </MCard>
    </div>
  );
}
