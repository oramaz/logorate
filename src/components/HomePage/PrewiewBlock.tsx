import React, {useCallback, useState} from "react"
import {SearchWhiteIcon} from "../../assets/images/Icons";
import {QueryPopover} from "./QueryPopover";
import {Logo} from "../../models/Logo";
import _ from "lodash";
import {LogoSearchInput} from "../General/LogoSearchInput";

type Props = {
   logos: Logo[];
}
export const HomePreview: React.FC<Props> = (props) => {
   const { logos } = props
   const [searchQuery, setSearchQuery] = useState("")

   const handleQueryChange = (query: string) => {
      setSearchQuery(query)
   }

   const getFilteredLogos = (query: string) => {
      if(!query.trim()) return []
      return Array.from(new Set(logos.filter(l => l.name.toLowerCase()
         .indexOf(query.trim().toLowerCase()) === 0).map(l => l.name)))
   }

   return (
      <div className="home-preview-container">
         <div className="home-preview-container-2 mx-auto text-center">
            <div className="home-preview-title " style={{marginBottom: "70px"}}
                 aria-valuetext="Touch the art with modern technology"/>
            <div className="home-preview-search-container mx-auto" style={{marginBottom: "110px"}}>
               <LogoSearchInput handleQueryChange={handleQueryChange} />
               {getFilteredLogos(searchQuery).length > 0 &&
               <QueryPopover relatedQueries={getFilteredLogos(searchQuery).slice(0, 8)}/>
               }
            </div>
            <button type="button" className="content-btn mx-auto">Generate logo</button>
         </div>
      </div>
   )
}