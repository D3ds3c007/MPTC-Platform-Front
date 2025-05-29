'use client';

import { useEffect, useState } from 'react';
import { MCard } from "@/app/components/ui/Card/MCard";
import { MExamForm } from "@/app/components/ui/ExamForm/MExamForm";
import { MLoading } from '@/app/components/ui/Loading/MLoading';

export default function UpdatePage()
{
  const [levels, setLevels] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [loading, setLoading] = useState(true);

  const [examId, setExamId] = useState(null);

  //fetcing exam data
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5193/api/v1/Data/exam-data'); // Update the URL if needed
        const data = await response.json();

        // console.log("Data fetched:", data);

        // Assuming data structure matches your controller's output
        setLevels(data[0]);
        setSubjects(data[1]);
        setPeriods(data[2]);

        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('parameter_id');
      
        if (id) {
        //   console.log('Parameter ID:', id);
          setExamId(id);
        }
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
        <MCard title="Modify Exam Informations">   
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
              <MExamForm levels={levels} subjects={subjects} periods={periods} defaultId={examId} />
            </div>
        </MCard>
      </div>
    )
}