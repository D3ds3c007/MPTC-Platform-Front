'use client';

import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MUploadZipFile } from "@/app/components/ui/UploadZipFile/MUploadZipFile";
import { useForm, FormProvider } from 'react-hook-form'; // Import necessary hooks
import Image from 'next/image';
import canva from '../../capture.png';
import { MInfoCard } from "@/app/components/ui/InfoCard/MInfoCard";
import { MLittleCard } from "@/app/components/ui/LittleCard/MLittleCard";

export default function Info(){
    return(
        <>
            <div className="row">
                <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '20px',
                }}>

                    
                    <MInfoCard></MInfoCard>

                    <div>
                        <MCard title="Add Exam Form">
                            
                            <br></br>
                            <br></br>
                            <MUploadZipFile></MUploadZipFile>
                        </MCard>
                        <p style={{
                        fontSize: '1.125rem', /* Relative font size (18px equivalent) */
                        fontWeight: '600',
                        marginBottom: '0.625rem', /* 10px equivalent in rem */
                        color: '#7D06EA',
                        }}>Exam Relative Documents</p>

                        <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '20px',
                        }}>
                            <MLittleCard></MLittleCard>
                            <MLittleCard type="Assetnote"></MLittleCard>
                        </div>
                    </div>
                        
                </div>
            </div>

        </>
    )
}