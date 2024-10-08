import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MButton } from "@/app/components/ui/Button/MButton";
import { MCard } from "@/app/components/ui/Card/MCard";

export default function ProfessorParge()
{
    return(
        <div className="row">
        <div className="col-md-11">

        <MCard title="Exam Folders" >
            <p>5 folders</p>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap:'wrap',
              gap: '1.2em',
              padding: '5px'
            }}>
                <MFolderCard />
                <MFolderCard />
                <MFolderCard />
                <MFolderCard />
                <MFolderCard />
            </div>

          </MCard>
        </div>
        </div>
    )
}