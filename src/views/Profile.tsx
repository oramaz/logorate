import React, { useEffect } from "react"
import "../assets/styles/App.css";
import "../assets/styles/Profile.css";
import { useLocation } from 'react-router-dom'
import { Title } from "../components/General/Title";
import { EmailInputIcon, PwdInputIcon } from "../assets/images/Icons";
import { LogoSearchInput } from "../components/General/LogoSearchInput";
import { LabelInput } from "../components/Profile/LabelInput";

export const ProfilePage: React.FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0)
   },
      [])

   const location = useLocation()
   const user = {
      avatar: "https://www.dw.com/image/45401789_403.jpg",
      name: "Elon Musk",
      username: "elonmusk",
      email: "elonmusk@gmail.com"
   }

   return (
      <React.Fragment>
         <div className="content-container-1 d-flex transition-load">
            <div className="mx-auto profile-container d-flex">
               <div className="profile-photo-side ">
                  <div className="mb-auto">
                     <div>
                        <img src={user.avatar} className="profile-image" style={{ marginBottom: "30px" }} />
                        <div className="text-center profile-actions-group">
                           <div className="cursor-pointer" style={{ marginBottom: "10px" }}>Change photo</div>
                           <div className="cursor-pointer" style={{ color: "red" }}>Remove photo</div>
                        </div>
                     </div>
                  </div>
                  <div className="mx-auto mt-auto profile-actions-group">
                     <div className="cursor-pointer" style={{ marginBottom: "20px" }}>Log out</div>
                     <div className="cursor-pointer" style={{ color: "red" }}>Delete account</div>
                  </div>
               </div>
               <div className="profile-data-side" >
                  <div style={{ marginBottom: "100px" }}>
                     <div>
                        <Title text="General Information" align="left" style={{ marginBottom: "50px" }} />
                     </div>
                     <LabelInput label="Your name" defaultValue={user.name} style={{ marginBottom: "30px" }} />
                     <LabelInput label="Username" defaultValue={user.username} style={{ marginBottom: "30px" }} />
                     <LabelInput label="E-mail" defaultValue={user.email} style={{ marginBottom: "30px" }} />
                  </div>
                  <div style={{ marginBottom: "100px" }}>
                     <div>
                        <Title text="Password Change" align="left" style={{ marginBottom: "50px" }} />
                     </div>
                     <LabelInput label="Current password" type="password" style={{ marginBottom: "30px" }} />
                     <LabelInput label="New password" type="password" style={{ marginBottom: "30px" }} />
                     <LabelInput label="Repeat password" type="password" style={{ marginBottom: "30px" }} />
                  </div>
                  <div style={{ marginBottom: "100px" }}>
                     <div>
                        <Title text="Subscription" align="left" style={{ marginBottom: "50px" }} />
                     </div>
                     <div className="d-inline-block">
                        <div style={{ marginBottom: "30px" }}>
                           <b style={{ marginRight: "20px" }}>Current status:</b><span className="gradient-text">Monthly subscription</span>
                        </div>
                        <div className="text-center">

                           <div className="content-btn-border-container  gradient-border d-inline-block">
                              <button type="button" className="content-btn-border-sm  gradient-border mx-auto"
                                 aria-valuetext="Unsubscribe" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div style={{ marginBottom: "50px" }}>
                     <div>
                        <Title text="Autopay" align="left" style={{ marginBottom: "50px" }} />
                     </div>
                     <div className="d-inline-block">
                        <div style={{ marginBottom: "30px" }}>
                           <b style={{ marginRight: "20px" }}>Current status:</b><span className="gradient-text">Autopay on</span>
                        </div>
                        <div className="text-center">
                           <button type="button" className="content-btn-sm mx-auto"
                              aria-valuetext="Apply for an autopay" />
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}