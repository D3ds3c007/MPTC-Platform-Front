'use client';
import {MEmployeeTable} from "@/app/components/ui/EmployeeTable/MEmployeeTable";
import {MEmployeeDetails} from "@/app/components/ui/EmployeeDetails/MEmployeeDetails";
import {MAddButton} from "@/app/components/ui/AddButton/MAddButton";
import { useState, useEffect } from "react";
import { MPopup } from "@/app/components/ui/Popup/MPopup";
import { MMultiStepForm } from "@/app/components/ui/MultiStepForm/MMultiStepForm";
import { MLoading } from "@/app/components/ui/Loading/MLoading";
export default function RevenuPage(){
    
const [selectedMatriculeId, setSelectedMatriculeId] = useState("");
const [isPopupVisible, setIsPopupVisible] = useState(false);
const [employees, setEmployees] = useState([]); // Store employees here
const [loading, setLoading] = useState(true);
const [selectedEmployee, setSelectedEmployee] = useState({});

const handleAddButtonClick = () => {
    setIsPopupVisible(true);
}

const handleClosePopup = () => {
    setIsPopupVisible(false);
}

// Fetch all list of employees
useEffect(() => {
    
        setLoading(true);
        // axios.headers = { cache: `force-cache` };
        // axios.get("Staff/employees")
        // .then(response => {
        //     console.log(response.data);
        //     setEmployees(response.data);  // Set fetched employees to the state
        //     setLoading(false);
        // })
        // .catch(error => {
        //     console.log(error);
        //     setLoading(false);
        // });

        // use fetch api to do the same thing as above
        fetch("http://localhost:5193/api/v1/Staff/employees", { cache: 'force-cache', revalidate : 3600 } )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setEmployees(data);  // Set fetched employees to the state
            setSelectedEmployee(data[0]);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        });
    
}, []);

 useEffect(() => {
    console.log(selectedMatriculeId);
}, [selectedMatriculeId]);

    return(
        <>
        {isPopupVisible && 
            <MPopup title="Add Employee" onClose={handleClosePopup}>
                <MMultiStepForm />
            </MPopup>}
        {loading ? <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}><MLoading /></div> : <div className="row">
            
            <div className="col-md-5">
                {/* Pass employees as prop */}
                <MEmployeeTable loading={loading} employees={employees} onEmployeeSelect={setSelectedEmployee} /> 
            </div>

            <div className="col-md-7">
                {loading &&  <MLoading /> }
                <MEmployeeDetails loading={loading} employee={selectedEmployee}/>
            </div>

            <MAddButton onClick={handleAddButtonClick} onClose={handleClosePopup}/>
        </div> }

        
        </>
    )
}
