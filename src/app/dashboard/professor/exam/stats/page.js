'use client';

import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MAvgCard } from "@/app/components/ui/AvgCard/MAvgCard";
import { useForm, FormProvider } from 'react-hook-form'; // Import necessary hooks
import Image from 'next/image';
import canva from '../../capture.png';
import { MIconicCard } from "@/app/components/ui/IconicCard/MIconicCard";
import { MChartBar } from "@/app/components/ui/ChartBar/MChartBar";
import { MPieChart } from "@/app/components/ui/PieChart/MPieChart";
import { MHorizontalBarChart } from "@/app/components/ui/HorizontalBarChart/MHorizontalBarChart";

export default function Stats(){
    return(
        <>
            <div className="col-md-12">
                <MCard title="" >

                <h2 style={{
                    margin: '0',
                    color: 'var(--primary-bg)',
                    fontWeight: 'bold',
                    }}>Statistics</h2>

                    <br></br>
                    <p style={{
                        fontSize: '1.125rem', /* Relative font size (18px equivalent) */
                        fontWeight: '600',
                        marginBottom: '0.625rem', /* 10px equivalent in rem */
                        color: '#7D06EA',
                        }}>System Performance</p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        }}>
                        
                            <MIconicCard data="10" label="Scanned Papers" bootstrapClass="col-md-3" variant="success"/>
                            <MIconicCard data="9mn46s" label="Total Time" bootstrapClass="col-md-3" variant="warning"/>
                            <MIconicCard data="88,74%" label="General Accuracy" bootstrapClass="col-md-3" />
                            <MIconicCard data="4Mbps" label="Connection Bandwidth" bootstrapClass="col-md-3" variant="primary"/>
                        
                    </div>

                    <br></br>
                    <p style={{
                        fontSize: '1.125rem', /* Relative font size (18px equivalent) */
                        fontWeight: '600',
                        marginBottom: '0.625rem', /* 10px equivalent in rem */
                        color: '#7D06EA',
                        }}>Students Performance</p>

                    <MAvgCard></MAvgCard>
                    <br></br>

                    <div className="row">

                        <div className="col-md-6" style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}>
                            <MChartBar></MChartBar>

                        </div>

                        <div className="col-md-6" style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            backgroundColor: '#15004F',
                            borderRadius: '10px',
                        }}>
                            <MPieChart></MPieChart>
                    </div>

                </div>

                    <br></br>
                    <br></br>

                    <div className="row">
                        <MHorizontalBarChart></MHorizontalBarChart>
                    </div>

                    <br></br>

                </MCard>
                
            </div>
        </>
    )
}