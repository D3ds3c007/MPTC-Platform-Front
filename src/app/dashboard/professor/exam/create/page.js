'use client';

import { useEffect, useState } from 'react';
import { MCard } from "@/app/components/ui/Card/MCard";
import { MExamForm } from "@/app/components/ui/ExamForm/MExamForm";
import { MLoading } from '@/app/components/ui/Loading/MLoading';

export default function Create()
{
  const [levels, setLevels] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5193/api/v1/Data/exam-data'); // Update the URL if needed
        const data = await response.json();

        console.log("Data fetched:", data);

        // Assuming data structure matches your controller's output
        setLevels(data[0]);
        setSubjects(data[1]);
        setPeriods(data[2]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    }
    fetchData();
  }, []);
  
    return loading ? (
      <MLoading />
    ) : (
      <div className="col-md-12">
        <MCard title="Add Exam Form">
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
            <MExamForm levels={levels} subjects={subjects} periods={periods} />
          </div>
        </MCard>
      </div>
    );
}