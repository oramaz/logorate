import React, {useContext, useEffect} from "react"
import "../assets/styles/App.css";
import "../assets/styles/LogoPage.css";
import {Title} from "../components/General/Title";
import {Tag} from "../components/General/Tag";
import {LogoBlockSm} from "../components/General/LogoSmallBlock";
import {Logo} from "../models/Logo";
import {LogosContext} from "./App";
import {Link, useLocation} from 'react-router-dom'
import {LogoBlockLg} from "../components/LogoPage/LogoBigBlock";

const getQuery = (paramsString: string) => {
   const params = new URLSearchParams(paramsString);
   return params.get('id');
}

export const LogoPage: React.FC = () => {
   useEffect(() => {
         window.scrollTo(0, 0)   },
      [])
   const location = useLocation()
   const logoId = getQuery(location.search)
   const logos = useContext(LogosContext)

   const logoCategories= ["Beach", "IT", "Business", "Sport"]

   const logo = logos.find(x => x.name === logoId)

   return (
      <React.Fragment>
         <div className="content-container-1">
            <Title text={logo?.name || ""} align="left" style={{marginBottom: "30px"}}/>

            <div className="logo-page-info" style={{marginBottom: "100px"}}>
               <div className="logo-page-logo-container" >
                  <LogoBlockLg name={logo?.name || ""} logoUrl={logo?.link || ""}/>
               </div>
               <div  style={{marginTop: "20px"}}>
                  <div className="content-tags-container mx-auto">
                     {logoCategories.map(category => {
                        return (
                           <Tag key={category}  name={category} style={{margin: "0 15px 15px 0px"}} linkTo="#"/>
                        )
                     })}
                  </div>
                  <div>
                     <div className=" logo-page-info-btns" style={{flexFlow: "row wrap"}}>
                        <div className="logo-page-load-png-btn content-btn-border-container logo-page-info-btn gradient-border">
                           <button type="button" className="content-btn-border  gradient-border mx-auto"
                                   aria-valuetext="Download PNG" />
                        </div>
                        <div className="logo-page-info-btn">
                           <button type="button" className="content-btn " aria-valuetext="Download SVG"/>
                        </div>
                     </div>
                     <div >
                        <div className="text-center content-text-small" style={{margin: "30px 0"}}>or</div>
                        <div className=" text-center  content-text-small">
                           <Link to="/sub" className="gradient-text" style={{marginLeft: "5px"}}>Subscribe</Link> and download logo in SVG for free
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <Title text="Related logos" align="left" style={{marginBottom: "30px"}}/>
            <div className="content-logos-container" style={{marginBottom: "20px"}}>
               {logos.slice(0, 5).map((logo: Logo) => {
                  return (
                     <LogoBlockSm key={logo.link} logoUrl={logo.link} name={logo.name}/>
                  )
               })}
            </div>
         </div>
      </React.Fragment>
   )
}