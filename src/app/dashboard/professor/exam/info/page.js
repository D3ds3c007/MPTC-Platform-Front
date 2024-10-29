'use client';

import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MUploadZipFile } from "@/app/components/ui/UploadZipFile/MUploadZipFile";
import { useForm, FormProvider } from 'react-hook-form'; // Import necessary hooks

export default function Info(){
    return(
        <>
            <div className="row">
                <div className="col-md-8">
                    <MCard title="Exam Information" >
                        <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap:'wrap',
                        gap: '1.2em',
                        }}>
                            
                            <MFolderCard />

                            <div className="col-md-6" style={{
                              display: 'flex',
                              flexDirection: 'row',
                              flexWrap: 'wrap',
                              border: '1px solid #CFD4FA',
                              borderRadius: '10px',
                              padding: '10px'
                            }}>
                                <FormProvider>
                                    <MUploadZipFile/> This  now has form context
                                </FormProvider>
                            </div>
                        </div>
                    
                    </MCard>
                </div>
                <div className="col-md-4">
                    <MCard title="Actions" >
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#01F073" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
          </svg> This is a card</span>
                    </MCard>
                </div>
            </div>


            <div className="col-md-11">
              <MCard title="Stats Overview">   
                  <div className="row">


                  </div>

              </MCard>
              
            </div>
        </>
    )
}