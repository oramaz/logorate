import React from "react"
import {SearchWhiteIcon} from "../../assets/images/Icons";

export const HomePreview: React.FC = () => {
   return (
      <div className="home-preview-container">
         <div className="home-preview-container-2 mx-auto text-center">
            <div className="home-preview-title " style={{marginBottom: "70px"}}
                 aria-valuetext="Touch the art with modern technology"/>
            <div className="home-preview-search-container mx-auto" style={{marginBottom: "110px"}}>
                  <span className="home-preview-search-icon">
                     <span className="m-auto"><SearchWhiteIcon/></span>
                  </span>
               <input type="text" autoFocus autoComplete="off" name="search" style={{textIndent: "20px"}}
                      className="content-input" placeholder="Search logo"/>
            </div>
            <button type="button" className="content-btn mx-auto">Generate logo</button>
         </div>
      </div>
   )
}