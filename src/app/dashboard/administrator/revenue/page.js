'use client';
import {MEmployeeTable} from "@/app/components/ui/EmployeeTable/MEmployeeTable";
import {MEmployeeDetails} from "@/app/components/ui/EmployeeDetails/MEmployeeDetails";
import { useState, useEffect } from "react";


export default function RevenuPage(){
const [selectedMatriculeId, setSelectedMatriculeId] = useState("");

 useEffect(() => {
        console.log(selectedMatriculeId);

}, [selectedMatriculeId]);

    return(
        <>
            <h1 style={{
            color : "var(--dark-blue)",
            fontWeight: "600"
        }}>Employees</h1>

        <div className="row">
            <div className="col-md-5">
                <MEmployeeTable onEmployeeSelect={setSelectedMatriculeId}/> 
            </div>

            <div className="col-md-7">
                <MEmployeeDetails />
            </div>

        </div>

        </>
    )
}