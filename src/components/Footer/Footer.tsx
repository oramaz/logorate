import React from "react"
import "../../assets/styles/Footer.css";
import {LogoIcon} from "../../assets/images/Icons";
import {Link} from "react-router-dom";

export const Footer: React.FC = () => {
   const headerLinks = [
      {name: "Home", to: "/"},
      {name: "About", to: "/about"},
      {name: "Sub benefits", to: "/sub/benefits"},
   ]
   const officialEmail = "logorate@gmail.com"

   return (
      <div className="footer-container-1">
         <div className="footer-container-2">
            <div className="my-auto">
               <div  style={{marginBottom: "10px"}}>Copyright © 2020.</div>
               <div>All Rights Reserved</div>
            </div>
            <div className="my-auto header-logo-icon-container">
               <Link to="/" className="header-logo-icon header-icon-link">
                  <LogoIcon/>
               </Link>
            </div>
            <div className="my-auto">
               <div className="d-flex" style={{marginBottom: "15px"}}>
                  {headerLinks.map(x => {
                     return (
                           <Link key={x.name} className="header-links"
                                 style={headerLinks.indexOf(x) === headerLinks.length - 1 ?
                                    {marginRight: "0"} : {}} to={x.to}>
                              {x.name}
                           </Link>
                     )
                  })}
               </div>
               <div className="text-right">
                  <a href={`mailto:${officialEmail}`}>{officialEmail}</a>
               </div>
            </div>
         </div>
      </div>
   )
}