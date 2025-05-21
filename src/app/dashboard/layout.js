'use client';
import {MSideBar} from "@/app/components/ui/SideBar/MSideBar";
import { useState } from "react";


export default function DashboardLayout({children})
{
    const [currentTitle, setCurrentTitle] = useState('Exam Section');

    const handleTitle = (title) => {

        console.log(title);
        setCurrentTitle(title);
    }

    return (
        
        <MSideBar currentTitle={currentTitle} onMenuChange={handleTitle}>
            {children}
        </MSideBar>
       
    )
}