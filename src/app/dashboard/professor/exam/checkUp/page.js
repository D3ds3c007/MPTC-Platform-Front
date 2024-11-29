'use client';

import { MPaperStudent } from "@/app/components/ui/PaperStudent/MPaperStudent";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MAvgCard } from "@/app/components/ui/AvgCard/MAvgCard";
import { useForm, FormProvider } from 'react-hook-form'; // Import necessary hooks
import canva from '../../capture.png';
import { MChartBar } from "@/app/components/ui/ChartBar/MChartBar";
import { MCarousel } from "@/app/components/ui/Carousel/MCarousel";

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
                        <MAvgCard></MAvgCard>
                        <br></br>
                        <br></br>
                        <MChartBar></MChartBar>
                    </div>
                </div>

                <br></br>

                <div className="row"style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '60px',
                }}>
                        <br></br>

                    <p style={{
                        fontSize: '1.125rem', /* Relative font size (18px equivalent) */
                        fontWeight: '600',
                        marginBottom: '0.625rem', /* 10px equivalent in rem */
                        color: '#7D06EA',
                        }}>List of Student Papers</p>

                        <br></br>
                        <br></br>
                    <MPaperStudent></MPaperStudent>
                    <MPaperStudent></MPaperStudent>
                    <MPaperStudent></MPaperStudent>
                </div>



            </MCard>

        </>
    )
}