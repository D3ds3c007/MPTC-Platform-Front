'use client';

import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MUploadZipFile } from "@/app/components/ui/UploadZipFile/MUploadZipFile";
import { useForm, FormProvider } from 'react-hook-form'; // Import necessary hooks
import canva from '../../capture.png';
import { MInfoCard } from "@/app/components/ui/InfoCard/MInfoCard";
import { MLoadingProcess } from "@/app/components/ui/LoadingProcess/MLoadingProcess";

export default function Process(){
    return(
        <>
            <div className="col-md-12">

                <MCard title="Loading Process" >
                <MLoadingProcess></MLoadingProcess>
                </MCard>
                
            </div>
            
        </>
    )
}