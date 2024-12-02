import { MCard } from "@/app/components/ui/Card/MCard";
import { MIconicCard } from "@/app/components/ui/IconicCard/MIconicCard";
import { MChartBar } from "@/app/components/ui/ChartBar/MChartBar";
import { MTable } from "@/app/components/ui/Table/MTable";
import { MAvgCard } from "@/app/components/ui/AvgCard/MAvgCard";

export default function Result(){
    return(
        <>
            <div className="col-md-12">
                <MCard title="Exam Result">
                    <MAvgCard></MAvgCard>
                    <br></br>
                    <MTable></MTable>
                    <a href="../exam/stats">
                        See Stats
                    </a>
                    <br></br>
                    <br></br>

                </MCard>
            </div>
            
        </>
    )
}