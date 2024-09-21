'use client';
import { MSideBar} from "@/app/components/ui/SideBar/MSideBar";


export default function DashboardLayout({children})
{

    return (
        
        <MSideBar>
            {children}
        </MSideBar>
       
    )
}