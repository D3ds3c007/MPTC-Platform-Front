import { MCard } from "@/app/components/ui/Card/MCard";
import { MExamForm } from "@/app/components/ui/ExamForm/MExamForm";

export default function Create()
{
    return(
      <div className="col-md-12">
        <MCard title="Add Exam Form">   
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
              <MExamForm></MExamForm>
          </div>
        </MCard>
        
      </div>
    )
}