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

        <MCard title="Exam Folders" >

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap:'wrap',
              gap: '1.2em',
              padding: '5px',
              justifyContent: 'flex-end'
            }}>
                <MSearchBar/>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap:'wrap',
              gap: '1.2em',
              padding: '5px',
              justifyContent: 'flex-end'
            }}>
                <MFilter selector="Level"/>
                <MFilter selector="Year"/>
                <MFilter selector="Period"/>
            </div>

            <br></br>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap:'wrap',
              gap: '1.2em',
              padding: '5px'
            }}>

                <MFolderCard />
                <MFolderCard variant="secondary"/>
                <MFolderCard variant="grey"/>
                <MFolderCard variant="dark"/>
                <MFolderCard variant="purple"/>
            </div>
            
            <MAddButton />
          </MCard>
        </div>
        </div>
    )
}