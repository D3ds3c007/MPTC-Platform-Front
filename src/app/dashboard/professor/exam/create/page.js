import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MButton } from "@/app/components/ui/Button/MButton";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MAddButton } from "@/app/components/ui/AddButton/MAddButton";
import { MSearchBar } from "@/app/components/ui/SearchBar/MSearchBar";
import { MFilter } from "@/app/components/ui/Filter/MFilter";

export default function ProfessorParge()
{
    return(
        <div className="row">
        <div className="col-md-11">

        <MCard title="Add Exam Form" >

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap:'wrap',
              gap: '1.2em',
              padding: '5px'
            }}>

            </div>
            
          </MCard>
        </div>
        </div>
    )
}