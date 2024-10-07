'use client';
import {MEmployeeTable} from "@/app/components/ui/EmployeeTable/MEmployeeTable";
import {MEmployeeDetails} from "@/app/components/ui/EmployeeDetails/MEmployeeDetails";
import {MAddButton} from "@/app/components/ui/AddButton/MAddButton";
import { useState, useEffect } from "react";
import { MPopup } from "@/app/components/ui/Popup/MPopup";
import { MMultiStepForm } from "@/app/components/ui/MultiStepForm/MMultiStepForm";
import axios from "@/app/lib/axiosInstance";


export default function RevenuPage(){
    
const [selectedMatriculeId, setSelectedMatriculeId] = useState("");
const [isPopupVisible, setIsPopupVisible] = useState(false);

const handleAddButtonClick = () => {
    setIsPopupVisible(true);
}

const handleClosePopup = () => {
    setIsPopupVisible(false);
}


 useEffect(() => {
        console.log(selectedMatriculeId);

}, [selectedMatriculeId]);

    return(
        <>
            {/* <h1 style={{
            color : "var(--dark-blue)",
            fontWeight: "600"
        }}>Employees</h1> */}

        {isPopupVisible && 
            <MPopup title="Add Employee" onClose={handleClosePopup}>
                <MMultiStepForm />
            </MPopup>}

        <div className="row">
            <div className="col-md-5">
                <MEmployeeTable onEmployeeSelect={setSelectedMatriculeId}/> 
            </div>

            <div className="col-md-7">
                <MEmployeeDetails />
                
            </div>

            
            
            <MAddButton onClick={handleAddButtonClick} onClose={handleClosePopup}/>
            

        </div>
      

        </>
    )
}