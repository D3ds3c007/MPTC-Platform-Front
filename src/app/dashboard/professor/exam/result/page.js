import { MCard } from "@/app/components/ui/Card/MCard";
import { MIconicCard } from "@/app/components/ui/IconicCard/MIconicCard";
import { MChartBar } from "@/app/components/ui/ChartBar/MChartBar";
import { MTable } from "@/app/components/ui/Table/MTable";
import { MPieChart } from "@/app/components/ui/PieChart/MPieChart";

export default function Result(){
    return(
        <>
            <div className="col-md-12">
                <MCard title="Exam Result" >
                    <p>These are temporary results. Please validate each entry to save them as the final exam results.</p>
                    <MTable></MTable>
                        
                </MCard>
            </div>
            <div className="col-md-12">
                <MCard title="System Performance" >
                <p>Here are the performance statistics for our system s ability to correct scanned exam papers.</p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        }}>
                        
                            <MIconicCard data="50" label="Scanned Papers" bootstrapClass="col-md-3" variant="primary"/>
                            <MIconicCard data="1mn30s" label="Total Time" bootstrapClass="col-md-3" variant="warning"/>
                            <MIconicCard data="70,00%" label="General Accuracy" bootstrapClass="col-md-3" />
                            <MIconicCard data="0" label="Ajustements" bootstrapClass="col-md-3" variant="success"/>
                        
                    </div>

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

                </MCard>
                
            </div>
        </>
    )
}