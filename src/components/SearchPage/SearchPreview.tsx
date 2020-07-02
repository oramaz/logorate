import React from "react"
import {LogoSearchInput} from "../General/LogoSearchInput";

type Props = {
   handleQueryChange: (query: string) => void;
   queryFromUrl?: string;
}

export const SearchPreview: React.FC<Props> = (props) => {
   const { handleQueryChange, queryFromUrl } = props
   return (
      <div className="search-preview-container">
         <div className="home-preview-container-2 m-auto text-center">
            <div className="home-preview-search-container mx-auto" >
                  <LogoSearchInput handleQueryChange={handleQueryChange} queryFromUrl={queryFromUrl}/>
            </div>
         </div>
      </div>
   )
}