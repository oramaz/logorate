import React from "react"
import "../../assets/styles/App.css";
import {Link} from "react-router-dom";

type Props = {
   logoUrl: string;
   name: string;
   style?: object;
}

export const LogoBlockSm: React.FC<Props> = (props) => {
   const { name, logoUrl, style } = props
   return (
      <div style={{margin: "5px 15px 25px 15px"}} className="cursor-pointer" onContextMenu={(e) => e.preventDefault()}>
         <div className="logo-small-container" style={{marginBottom: "10px"}}>
            <div className=" gradient-border" >
               <div style={{padding: "40px"}}>
                  <img src={logoUrl} width="117px" height="128px" alt={name} />
               </div>
            </div>
         </div>
         <div className="content-text-small" style={{width: "197px"}}>{name}</div>
      </div>
   )
}