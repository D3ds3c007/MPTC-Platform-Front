import { MCard } from "@/app/components/ui/Card/MCard";
import Image from 'next/image';
import canva from './capture.png';

export default function ProfessorPage()
{
    return(
        <div className="row">
        <div className="col-md-11">

        <MCard title="Professor Page" >
            <Image src={canva} alt="screenshot" width={1000} height={561} />
        </MCard>
        </div>
        </div>
    )
}