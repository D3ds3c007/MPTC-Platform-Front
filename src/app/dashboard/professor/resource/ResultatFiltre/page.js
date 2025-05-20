"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MFolderCardNa } from "@/app/components/ui/FolderCardNa/MFolderCardNa";

export default function ResultatFiltre() {
  const searchParams = useSearchParams();
  const selectedFilter = searchParams.get("filter"); // récupère le paramètre

  const resources = [
    { fileType: "PDF", title: "Lesson A1", session: "OCT 2024", subtitle: "Top 10 grammar lessons", level: "A1", year: "2024", type: "Lesson", category: "Grammar", publishedDate: "2024-11-20"},
    { fileType: "Image", title: "Exam A2", session: "OCT 2024", subtitle: "Mock test for beginners", level: "A2", year: "2024", type: "Exam", category: "Vocabulary", publishedDate: "2024-10-18"},
    { fileType: "Video", title: "Lesson A1", session: "OCT 2024", subtitle: "Key vocabulary tips", level: "A1", year: "2024", type: "Lesson", category: "Listening", publishedDate: "2024-11-26"},
    { fileType: "Word", title: "Exercise A1", session: "OCT 2024", subtitle: "Listening practice 101", level: "A1", year: "2024", type: "Exercise", category: "Listening", publishedDate: "2024-11-24"},
  ];

  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedFilter) return; // Don't run until it's available
  
    if (selectedFilter === "All") {
      setFiltered(resources);
    } else if (selectedFilter === "Recent") {
      const currentDate = new Date();
      const recentResources = resources.filter((res) => {
        const publishedDate = new Date(res.publishedDate);
        const diffTime = currentDate - publishedDate;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        return diffDays <= 7;
      });
      setFiltered(recentResources);
    } else {
      const matchingResources = resources.filter(
        res => res.fileType === selectedFilter
      );
      setFiltered(matchingResources);
      setLoading(false);
    }
  }, [selectedFilter]);

  useEffect(() => {
    console.log("Updated filtered resources:", filtered);
  }, [filtered]);

  return (
    <div>
      <h1>Filtered Resources: {selectedFilter}</h1>
      <div>
      {loading ? (
        <p>Loading resources...</p>
      ) : filtered.length > 0 ? (
        filtered.map((resource) => (
          <MFolderCardNa key={resource.title + resource.publishedDate} resource={resource} />
        ))
      ) : (
        <p>No matching resources.</p>
      )}
      </div>
    </div>
  );
}
