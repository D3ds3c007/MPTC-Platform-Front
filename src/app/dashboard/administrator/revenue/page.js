import {MEmployeeTable} from "@/app/components/ui/EmployeeTable/MEmployeeTable";
export default function RevenuPage(){
    return(
        <>
            <h1 style={{
            color : "var(--dark-blue)",
            fontWeight: "600"
        }}>Employees</h1>

        <div className="row">
            <div className="col-md-6">
                <MEmployeeTable/> 
            </div>

        </div>

        </>
    )
}