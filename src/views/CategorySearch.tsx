import React, {useContext, useState} from "react"
import { useLocation } from 'react-router-dom'
import "../assets/styles/App.css";
import "../assets/styles/Home.css";
import {Title} from "../components/General/Title";
import {LogoBlockSm} from "../components/General/LogoSmallBlock";
import {Logo} from "../models/Logo";
import {LogosContext} from "./App";
import {CustomSelect} from "../components/General/Select";

const getQuery = (paramsString: string) => {
   const params = new URLSearchParams(paramsString);
   return params.get('q');
}

export const SearchByCategoryPage: React.FC = () => {
   const logos = useContext(LogosContext)

   return (
      <React.Fragment>
         <div className="content-container-1 text-center">
            <Title text="Search by categories" className="d-inline-block" style={{marginBottom: "50px"}} />
            <div className="d-flex" style={{marginBottom: "100px",
               justifyContent: "space-evenly", flexFlow: "row wrap"}}>
               <div style={{marginBottom: "30px"}}>
                  <CustomSelect placeholder="Choose category"/>
               </div>
               <div>
                  <CustomSelect placeholder="Sort by"/>
               </div>
            </div>
            <div className="content-logos-container" style={{marginBottom: "20px"}}>
               {logos.slice(0, 15).map((logo: Logo) => {
                  return (
                     <LogoBlockSm key={logo.link} logoUrl={logo.link}  name={logo.name}/>
                  )
               })}
            </div>
            <button type="button" className="content-btn mx-auto"  aria-valuetext="Load more"/>
         </div>
      </React.Fragment>
   )
}