import React, {useContext, useState} from "react"
import { useLocation } from 'react-router-dom'
import "../assets/styles/App.css";
import "../assets/styles/Home.css";
import {Title} from "../components/General/Title";
import {LogoBlockSm} from "../components/General/LogoSmallBlock";
import {Logo} from "../models/Logo";
import {LogosContext} from "./App";
import {SearchPreview} from "../components/SearchPage/SearchPreview";

const getQuery = (paramsString: string) => {
   const params = new URLSearchParams(paramsString);
   return params.get('q');
}

export const SearchLogoPage: React.FC = () => {
   const logos = useContext(LogosContext)
   const location = useLocation()
   const query = getQuery(location.search) || ""

   const [searchQuery, setSearchQuery] = useState(query)

   const handleQueryChange = (query: string) => {
      setSearchQuery(query)
   }

   const getFilteredLogos = (query: string) => {
      if(!query.trim()) return logos
      return logos.filter(l => l.name.toLowerCase()
         .indexOf(query.trim().toLowerCase()) === 0).map(l => l)
   }

   return (
      <React.Fragment>
         <SearchPreview queryFromUrl={query} handleQueryChange={handleQueryChange}/>
         <div className="content-container-1 text-center">
            <div className="d-flex">
               <div className="mx-auto overflow-hidden" style={{marginBottom: "50px"}}>
                  <Title text="Results for query" className="d-inline-block" style={{marginRight: "15px"}} />
                  <Title text={searchQuery} className="d-inline-block" style={{fontWeight: "bold"}} />
               </div>
            </div>
            <div className="content-logos-container" style={{marginBottom: "20px"}}>
               {getFilteredLogos(searchQuery).slice(0, 15).map((logo: Logo) => {
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