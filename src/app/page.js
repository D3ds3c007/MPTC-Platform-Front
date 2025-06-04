'use client';
import { MButton } from "@/app/components/ui/Button/MButton";
import { MCard } from "@/app/components/ui/Card/MCard";
import { MIconicCard } from "@/app/components/ui/IconicCard/MIconicCard";
import { MSideBar} from "@/app/components/ui/SideBar/MSideBar";
import { MMultiStepForm} from "@/app/components/ui/MultiStepForm/MMultiStepForm"
import { MAttendanceForm } from "./components/ui/pages/AttendanceForm/MAttendanceForm";
import MPopupMessage from "./components/ui/PopupMessage/MPopupMessage";
import { MTimeOffCalendar } from "./components/ui/TimeOffCalendar/MTimeOffCalendar";
import { MBarChart} from "@/app/components/ui/BarChart/MBarChart";
import { useState } from "react";
import defaultPic from './picture1.png';

import MTopLeaderBoard from "./components/ui/AttendanceLeaderBoard/MTopLeaderBoard";
import MLeaderBoardList from "./components/ui/AttendanceLeaderBoard/MLeaderBoardList";

export default function Page() {

  const [isVisible, setIsVisible] = useState(false);
  const [popupType, setPopupType] = useState("success");

  const showPopup = (type) => {
    setPopupType(type);
    setIsVisible(true);
  };
  
  const leaderboardData = [
    {
      name: "Ulama Rehan",
      points: "0 lateness, 0 absence",
      username: "username",
      image: defaultPic,
    },
    {
      name: "Ulama R.",
      points: "3 lateness, 0 absence",
      username: "username2",
      image: defaultPic,
    },
    {
      name: "Ulama R.",
      points: "4   lateness, 0 absence",
      username: "username3",
      image: defaultPic,
    },
  ];


const data = [
  {
    username: 'john_doe',
    name: 'John Doe',
    image: defaultPic,
    lateness: 2,
    punctuality: 10,
    absences: 1,
  },
  {
    username: 'jane_smith',
    name: 'Jane Smith',
    image: defaultPic,
    lateness: 0,
    punctuality: 12,
    absences: 0,
  },
  {
    username: 'jane_smith',
    name: 'Hello Kitty',
    image: defaultPic,
    lateness: 0,
    punctuality: 12,
    absences: 0,
  },
  {
    username: 'jane_smith',
    name: 'Bugs Bunny',
    image: defaultPic,
    lateness: 0,
    punctuality: 12,
    absences: 0,
  },
  // More data...
];
  return (
    <>
      <MSideBar>

          <div className="row">
            {/* <div className="col-md-5">
              <MCard title="Buttons" >
                <p>This is a card</p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap:'wrap',
                  gap: '1.2em',
                  padding: '5px'
                }}>
                  <MButton variant="primary" bootstrapclassName="btn-block">Primary</MButton>
                  <MButton variant="danger">Danger</MButton>
                  <MButton variant="warning">Warning</MButton>
                  <MButton variant="success">Success</MButton>
                </div>

                <p>Some text here</p>
              </MCard>

              <MCard title="Buttons" >
                <p>This is a card</p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap:'wrap',
                  gap: '1.2em',
                  padding: '5px'
                }}>
                  <MButton variant="primary" bootstrapclassName="btn-block">Primary</MButton>
                  <MButton variant="danger">Danger</MButton>
                  <MButton variant="warning">Warning</MButton>
                  <MButton variant="success">Success</MButton>

                </div>

              </MCard>
            </div> */}

            <div className="col-md-12">
              {/* <MCard title="Iconic Card">   
                <p>This is a card</p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-6" variant="primary"/>
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-6" variant="warning"/>
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-6" variant="success"/>
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-6" variant="secondary"/>
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-6"/>
                    <MIconicCard data="2024" label="This is a card of lorem Ipsum sum" bootstrapclassName="col-md-6" variant="pink"/>
                </div>
              </MCard> */}

              {/* <MMultiStepForm /> */}
              {/* <MAttendanceForm /> */}

              {/* <MTimeOffCalendar />
              <button onClick={() => showPopup("success")}>Show Success</button>
              <button onClick={() => showPopup("error")}>Show Error</button>

              <MPopupMessage
                type={popupType}
                title={popupType === "success" ? "Well done!" : "Oh snap!"}
                message={
                  popupType === "success"
                    ? "You successfully read this important alert message."
                    : "Change a few things up and try submitting again."
                }
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
              /> */}
            <MBarChart />
            


            </div>
          </div>
      </MSideBar>
      

      

      

    </>
  );
}