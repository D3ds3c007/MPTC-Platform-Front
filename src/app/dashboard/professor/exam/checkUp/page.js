'use client';

import { MPaperStudent } from "@/app/components/ui/PaperStudent/MPaperStudent";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MAvgCard } from "@/app/components/ui/AvgCard/MAvgCard";
import { useForm, FormProvider } from 'react-hook-form'; // Import necessary hooks
import { MChartBar } from "@/app/components/ui/ChartBar/MChartBar";
import { MCarousel } from "@/app/components/ui/Carousel/MCarousel";
import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";

export default function CheckUp(){
    return(
        <>
            <MCard title="Check Up Correction" >
                <div className="row">

                    <div className="col-md-6" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}>
                        <br></br>
                        <MCarousel></MCarousel>

                    </div>

                    <div className="col-md-6" style={{
                    }}>
                        <div
                        style={{
                            float:'right',
                        }}>
                            <MAvgCard></MAvgCard>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <MChartBar></MChartBar>
                    </div>
                </div>
            </MCard>
            <MCard title="List of Student Papers" >
                    <br></br>

                <div className="row"style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    <MFolderCard matricule="000021" avg="15.29" range="1" variant="secondary"></MFolderCard>
                    <MFolderCard matricule="000023" avg="14.29" range="2"></MFolderCard>
                    <MFolderCard matricule="000022" avg="13.14" range="3"></MFolderCard>
                    <MFolderCard matricule="000024" avg="10.92" range="4"></MFolderCard>
                    <MFolderCard matricule="000000" avg="10.00" range="5"></MFolderCard>
                    <MFolderCard matricule="000000" avg="10.00" range="6"></MFolderCard>
                    <MFolderCard matricule="000000" avg="10.00" range="7"></MFolderCard>
                </div>
            </MCard>

                




        </>
    )
}